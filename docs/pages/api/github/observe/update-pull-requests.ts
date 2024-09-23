import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { sendDiscord } from "utils/discord"
import {
  recursiveOctokit,
  getPullRequests as _getPullRequests,
  getListEventsForTimeline,
} from "utils/github"
import type { Constant } from "utils/github"
import type { APIHandler } from "utils/next"

type PullRequest = Awaited<ReturnType<typeof getPullRequest>>

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const GITHUB_JOINING_COMMENT = (constant: Constant) => (id: string) =>
  [`@${id}`, "", constant.message.pullRequest.joinMaintainer].join("\n")
const DISCORD_HELP_WANTED_COMMENT =
  (constant: Constant) => (number: number, title: string, html_url: string) =>
    [
      `<@&1202956318718304276> <@&1246174065216192662>`,
      "",
      constant.message.pullRequest.addHelpWanted,
      "",
      `[${number}: ${title}](${html_url})`,
    ].join("\n")
const DISCORD_REVIEW_WANTED_COMMENT =
  (constant: Constant) => (number: number, title: string, html_url: string) =>
    [
      `<@&1202956318718304276> <@&1246174065216192662>`,
      "",
      constant.message.pullRequest.addReviewWanted,
      "",
      `[${number}: ${title}](${html_url})`,
    ].join("\n")
const DISCORD_REMIND_REVIEW_COMMENT =
  (constant: Constant) =>
  (ids: string[], number: number, title: string, html_url: string) =>
    [
      ids.map((id) => `<@${id}>`).join(" "),
      "",
      constant.message.pullRequest.remindReview,
      "",
      `[${number}: ${title}](${html_url})`,
    ].join("\n")

const getPullRequest = async ({
  owner,
  repo,
  pull_number,
}: {
  owner: string
  repo: string
  pull_number: number
}) => {
  const { data } = await octokit.pulls.get({
    owner,
    repo,
    pull_number,
  })

  const { data: reviewers } = await recursiveOctokit(() =>
    octokit.pulls.listReviews({
      owner,
      repo,
      pull_number,
    }),
  )

  return { ...data, reviewers }
}

const getPullRequests = async ({
  owner,
  repo,
}: {
  owner: string
  repo: string
}) => {
  let _pullRequests = await _getPullRequests({ owner, repo, state: "open" })

  const pullRequests: PullRequest[] = []

  await Promise.all(
    _pullRequests.map(async ({ number }) => {
      const pullRequest = await recursiveOctokit(() =>
        getPullRequest({ owner, repo, pull_number: number }),
      )

      if (!pullRequest) return

      pullRequests.push(pullRequest)

      if (!pullRequest.requested_reviewers) return
    }),
  )

  return pullRequests
}

const remindReviews = async ({
  owner,
  repo,
  pullRequest,
  constant,
  publish,
  runOctokit,
}: {
  owner: string
  repo: string
  pullRequest: PullRequest
  constant: Constant
  publish: boolean
  runOctokit: boolean
}) => {
  const {
    number,
    title,
    labels,
    created_at,
    html_url,
    requested_reviewers,
    head,
  } = pullRequest
  if (
    [
      "yamada-ui:changeset-release/main",
      "yamada-ui:changeset-release/docs",
      "yamada-ui:documentation",
    ].includes(head.label)
  )
    return

  const timeline = await getListEventsForTimeline({
    owner,
    repo,
    issue_number: number,
  })

  const commitIndex = timeline.findLastIndex(
    (item) =>
      item.event === "committed" &&
      "parents" in item &&
      item.parents.length === 1,
  )

  const omittedTimeline = timeline.slice(commitIndex + 1)

  const hasReviewed = omittedTimeline.some(
    (event) => event.event === "reviewed",
  )

  if (hasReviewed) {
    try {
      if (runOctokit) {
        await recursiveOctokit(() =>
          octokit.issues.removeLabel({
            owner,
            repo,
            issue_number: number,
            name: "review wanted",
          }),
        )
      } else {
        console.log("octokit.issues.removeLabel", number, "review wanted")
      }
    } catch {}

    return
  }

  const createdTimestamp = new Date(created_at)
  const remindTimestamp = new Date(
    Date.now() - constant.pullRequest.remindDay * 24 * 60 * 60 * 1000,
  )
  const limitTimestamp = new Date(
    Date.now() - constant.pullRequest.addReviewWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdTimestamp < remindTimestamp) {
    const requestedReviewers = (requested_reviewers ?? []).map(
      ({ login }) => login,
    )
    const requestedReviewerIds: string[] = requestedReviewers
      .map(
        (id) =>
          [...constant.maintainers, ...constant.members].find(
            ({ github }) => github.id === id,
          )?.discord?.id,
      )
      .filter(Boolean)

    if (publish && requestedReviewerIds.length) {
      const content = DISCORD_REMIND_REVIEW_COMMENT(constant)(
        requestedReviewerIds,
        number,
        title,
        html_url,
      )

      await sendDiscord(process.env.DISCORD_REVIEWS_WEBHOOK_URL, content)
    }
  }

  if (createdTimestamp < limitTimestamp) {
    const hasReviewWanted = labels.some(
      (label) => isObject(label) && "review wanted" === label?.name,
    )

    if (!hasReviewWanted) {
      if (runOctokit) {
        await recursiveOctokit(() =>
          octokit.issues.addLabels({
            owner,
            repo,
            issue_number: number,
            labels: ["review wanted"],
          }),
        )
      } else {
        console.log("octokit.issues.addLabels", number, "review wanted")
      }

      if (publish) {
        const content = DISCORD_REVIEW_WANTED_COMMENT(constant)(
          number,
          title,
          html_url,
        )

        await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
      }
    }
  }
}

const addHelpWanted = async ({
  owner,
  repo,
  pullRequest,
  collaboratorIds,
  constant,
  publish,
  runOctokit,
}: {
  owner: string
  repo: string
  pullRequest: PullRequest
  collaboratorIds: string[]
  constant: Constant
  publish: boolean
  runOctokit: boolean
}) => {
  const { number, title, user, labels, created_at, html_url, head } =
    pullRequest
  if (user.type === "Bot") return

  if (
    [
      "yamada-ui:changeset-release/main",
      "yamada-ui:changeset-release/docs",
      "yamada-ui:documentation",
    ].includes(head.label)
  )
    return

  if (labels.some((label) => isObject(label) && "help wanted" === label?.name))
    return

  if (collaboratorIds.includes(user.login)) return

  const createdTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.pullRequest.addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdTimestamp > limitTimestamp) return

  if (runOctokit) {
    await recursiveOctokit(() =>
      octokit.issues.createComment({
        owner,
        repo,
        issue_number: number,
        body: GITHUB_JOINING_COMMENT(constant)(user.login),
      }),
    )
  } else {
    console.log("octokit.issues.createComment", number, user.login)
  }

  if (runOctokit) {
    await recursiveOctokit(() =>
      octokit.issues.addLabels({
        owner,
        repo,
        issue_number: number,
        labels: ["help wanted"],
      }),
    )
  } else {
    console.log("octokit.issues.addLabels", number, "help wanted")
  }

  if (publish) {
    const content = DISCORD_HELP_WANTED_COMMENT(constant)(
      number,
      title,
      html_url,
    )

    await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
  }
}

export const updatePullRequests: APIHandler = async ({
  req,
  res,
  constant,
}) => {
  const { owner, repo, publish = true, octokit: runOctokit = true } = req.body

  if (!owner)
    return res.status(400).send({ status: 400, message: "Invalid owner" })

  if (!repo)
    return res.status(400).send({ status: 400, message: "Invalid repo" })

  const collaborators = [...constant.maintainers, ...constant.members]
  const collaboratorIds = collaborators.map(({ github }) => github.id)

  const pullRequests = await getPullRequests({ owner, repo })

  for await (const pullRequest of pullRequests) {
    const { user, draft, reviewers } = pullRequest

    if (!user || draft) continue

    const count = reviewers.reduce(
      (count, { state }) => (state === "APPROVED" ? count + 1 : count),
      0,
    )

    if (count >= constant.pullRequest.requireApprovalCount) continue

    await remindReviews({
      owner,
      repo,
      pullRequest,
      constant,
      publish,
      runOctokit,
    })

    await addHelpWanted({
      owner,
      repo,
      pullRequest,
      collaboratorIds,
      constant,
      publish,
      runOctokit,
    })
  }
}
