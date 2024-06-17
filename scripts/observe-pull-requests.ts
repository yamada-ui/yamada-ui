import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"
import type { Constant } from "./utils"
import { getConstant, recursiveOctokit } from "./utils"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type PullRequest = Awaited<ReturnType<typeof getPullRequest>>

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
let constant: Constant = {}

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }

const GITHUB_JOINING_COMMENT = (id: string) =>
  [`@${id}`, "", constant.message.pullRequest.joinMaintainer].join("\n")
const DISCORD_HELP_WANTED_COMMENT = (
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@&1202956318718304276> <@&1246174065216192662>`,
    "",
    constant.message.pullRequest.addHelpWanted,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")
const DISCORD_REVIEW_WANTED_COMMENT = (
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@&1202956318718304276> <@&1246174065216192662>`,
    "",
    constant.message.pullRequest.addReviewWanted,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")
const DISCORD_REMIND_REVIEW_COMMENT = (
  ids: string[],
  number: number,
  title: string,
  html_url: string,
) =>
  [
    ids.map((id) => `<@${id}>`).join(" "),
    "",
    constant.message.pullRequest.remindReview,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")

const getCollaborators = async () => {
  const { data } = await recursiveOctokit(() =>
    octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      per_page: 100,
    }),
  )

  return data
}

const getPullRequest = async (number: number) => {
  const { data } = await octokit.pulls.get({
    ...COMMON_PARAMS,
    pull_number: number,
  })

  const { data: reviewers } = await recursiveOctokit(() =>
    octokit.pulls.listReviews({
      ...COMMON_PARAMS,
      pull_number: number,
    }),
  )

  return { ...data, reviewers }
}

const getPullRequests = async () => {
  let _pullRequests: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  const listForRepo = async () => {
    const { data } = await octokit.issues.listForRepo({
      ...COMMON_PARAMS,
      state: "open",
      per_page: perPage,
      page,
    })

    _pullRequests.push(...data)

    count = data.length

    if (count === perPage) {
      page++

      await recursiveOctokit(listForRepo)
    }
  }

  await recursiveOctokit(listForRepo)

  _pullRequests = _pullRequests.filter(({ pull_request }) => pull_request)

  const pullRequests: PullRequest[] = []

  await Promise.all(
    _pullRequests.map(async ({ number }) => {
      const pullRequest = await recursiveOctokit(() => getPullRequest(number))

      if (!pullRequest) return

      pullRequests.push(pullRequest)

      if (!pullRequest.requested_reviewers) return
    }),
  )

  return { pullRequests }
}

const remindReviews = async ({
  number,
  title,
  labels,
  created_at,
  html_url,
  requested_reviewers,
  mergeable_state,
  head,
}: PullRequest) => {
  if (head.label === "yamada-ui:changeset-release/main") return

  if (mergeable_state === "dirty") {
    try {
      await recursiveOctokit(() =>
        octokit.issues.removeLabel({
          ...COMMON_PARAMS,
          issue_number: number,
          name: "review wanted",
        }),
      )
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

    if (requestedReviewerIds.length) {
      const content = DISCORD_REMIND_REVIEW_COMMENT(
        requestedReviewerIds,
        number,
        title,
        html_url,
      )

      await sendDiscordChannel("reviews", content)

      console.log("Reminded review", number, title, ...requestedReviewers)
    }
  }

  if (createdTimestamp < limitTimestamp) {
    const hasReviewWanted = labels.some(
      (label) => isObject(label) && "review wanted" === label?.name,
    )

    if (!hasReviewWanted) {
      await recursiveOctokit(() =>
        octokit.issues.addLabels({
          ...COMMON_PARAMS,
          issue_number: number,
          labels: ["review wanted"],
        }),
      )

      const content = DISCORD_REVIEW_WANTED_COMMENT(number, title, html_url)

      await sendDiscordChannel("help-wanted", content)

      console.log("Added 'review wanted' label", number, title)
    }
  }
}

const addHelpWanted = async (
  { number, title, user, labels, created_at, html_url, head }: PullRequest,
  collaboratorIds: string[],
) => {
  if (user.type === "Bot") return

  if (head.label === "yamada-ui:changeset-release/main") return

  if (labels.some((label) => isObject(label) && "help wanted" === label?.name))
    return

  if (collaboratorIds.includes(user.login)) return

  const createdTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.pullRequest.addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdTimestamp > limitTimestamp) return

  await recursiveOctokit(() =>
    octokit.issues.createComment({
      ...COMMON_PARAMS,
      issue_number: number,
      body: GITHUB_JOINING_COMMENT(user.login),
    }),
  )

  await recursiveOctokit(() =>
    octokit.issues.addLabels({
      ...COMMON_PARAMS,
      issue_number: number,
      labels: ["help wanted"],
    }),
  )

  console.log("Added 'help wanted' label", number, title)

  const content = DISCORD_HELP_WANTED_COMMENT(number, title, html_url)

  await sendDiscordChannel("help-wanted", content)
}

const sendDiscordChannel = async (
  type: "reviews" | "help-wanted",
  content: string,
) => {
  const url =
    type === "reviews"
      ? process.env.DISCORD_REVIEWS_WEBHOOK_URL
      : process.env.DISCORD_HELP_WANTED_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const main = async () => {
  try {
    constant = await getConstant()

    const collaborators = await getCollaborators()

    const { pullRequests } = await getPullRequests()

    const collaboratorIds = collaborators.map(({ login }) => login)

    for await (const pullRequest of pullRequests) {
      const { number, title, user, draft, reviewers } = pullRequest

      if (!user || draft) {
        console.log("Drafted pull request", number, title)

        continue
      }

      const count = reviewers.reduce(
        (count, { state }) => (state === "APPROVED" ? count + 1 : count),
        0,
      )

      if (count >= constant.pullRequest.requireApprovalCount) {
        console.log("Approved pull request", number, title)

        continue
      }

      await remindReviews(pullRequest)

      await addHelpWanted(pullRequest, collaboratorIds)
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
