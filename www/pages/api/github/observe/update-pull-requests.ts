import type { Constant } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { isObject, isUndefined } from "@yamada-ui/react"
import { sendDiscord } from "utils/discord"
import {
  getPullRequests as _getPullRequests,
  getListEventsForTimeline,
  recursiveOctokit,
} from "utils/github"

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
  pull_number,
  repo,
}: {
  owner: string
  pull_number: number
  repo: string
}) => {
  const { data } = await octokit.pulls.get({
    owner,
    pull_number,
    repo,
  })

  const { data: reviewers } = await recursiveOctokit(async () =>
    octokit.pulls.listReviews({
      owner,
      pull_number,
      repo,
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
      const pullRequest = await recursiveOctokit(async () =>
        getPullRequest({ owner, pull_number: number, repo }),
      )

      pullRequests.push(pullRequest)

      if (!pullRequest.requested_reviewers) return
    }),
  )

  return pullRequests
}

const remindReviews = async ({
  constant,
  owner,
  publish,
  pullRequest,
  repo,
  runOctokit,
}: {
  constant: Constant
  owner: string
  publish: boolean
  pullRequest: PullRequest
  repo: string
  runOctokit: boolean
}) => {
  const {
    created_at,
    head,
    html_url,
    labels,
    number,
    requested_reviewers,
    title,
  } = pullRequest
  if (
    ["yamada-ui:changeset-release/v1", "yamada-ui:v1/www"].includes(head.label)
  )
    return

  const timeline = await getListEventsForTimeline({
    issue_number: number,
    owner,
    repo,
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
        await recursiveOctokit(async () =>
          octokit.issues.removeLabel({
            name: "review wanted",
            issue_number: number,
            owner,
            repo,
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
          [...constant.maintainers].find(({ github }) => github.id === id)
            ?.discord?.id,
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
      (label) => isObject(label) && "review wanted" === label.name,
    )

    if (!hasReviewWanted) {
      if (runOctokit) {
        await recursiveOctokit(async () =>
          octokit.issues.addLabels({
            issue_number: number,
            labels: ["review wanted"],
            owner,
            repo,
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
  collaboratorIds,
  constant,
  owner,
  publish,
  pullRequest,
  repo,
  runOctokit,
}: {
  collaboratorIds: string[]
  constant: Constant
  owner: string
  publish: boolean
  pullRequest: PullRequest
  repo: string
  runOctokit: boolean
}) => {
  const { created_at, head, html_url, labels, number, title, user } =
    pullRequest
  if (user.type === "Bot") return

  if (
    ["yamada-ui:changeset-release/v1", "yamada-ui:v1/www"].includes(head.label)
  )
    return

  if (labels.some((label) => isObject(label) && "help wanted" === label.name))
    return

  if (collaboratorIds.includes(user.login)) return

  const createdTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.pullRequest.addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdTimestamp > limitTimestamp) return

  if (runOctokit) {
    await recursiveOctokit(async () =>
      octokit.issues.createComment({
        body: GITHUB_JOINING_COMMENT(constant)(user.login),
        issue_number: number,
        owner,
        repo,
      }),
    )
  } else {
    console.log("octokit.issues.createComment", number, user.login)
  }

  if (runOctokit) {
    await recursiveOctokit(async () =>
      octokit.issues.addLabels({
        issue_number: number,
        labels: ["help wanted"],
        owner,
        repo,
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
  constant,
  req,
  res,
}) => {
  const { octokit: runOctokit = true, owner, publish = true, repo } = req.body

  if (!owner)
    return res.status(400).send({ message: "Invalid owner", status: 400 })

  if (!repo)
    return res.status(400).send({ message: "Invalid repo", status: 400 })

  const collaboratorIds = [...constant.maintainers].map(
    ({ github }) => github.id,
  )

  const pullRequests = await getPullRequests({ owner, repo })

  for (const pullRequest of pullRequests) {
    const { draft, reviewers, user } = pullRequest

    if (isUndefined(user) || draft) continue

    const count = reviewers.reduce(
      (count, { state }) => (state === "APPROVED" ? count + 1 : count),
      0,
    )

    if (count >= constant.pullRequest.requireApprovalCount) continue

    await remindReviews({
      constant,
      owner,
      publish,
      pullRequest,
      repo,
      runOctokit,
    })

    await addHelpWanted({
      collaboratorIds,
      constant,
      owner,
      publish,
      pullRequest,
      repo,
      runOctokit,
    })
  }
}
