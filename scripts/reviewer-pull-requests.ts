import { Octokit } from "@octokit/rest"
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
const DISCORD_REVIEW_COMMENT = (
  ids: string[],
  number: number,
  title: string,
  html_url: string,
) =>
  [
    ids.map((id) => `<@${id}>`).join(" "),
    "",
    constant.message.pullRequest.addReviewer,
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
  const alreadyReviewing: string[] = []

  await Promise.all(
    _pullRequests.map(async ({ number }) => {
      const pullRequest = await recursiveOctokit(() => getPullRequest(number))

      if (!pullRequest) return

      pullRequests.push(pullRequest)

      if (!pullRequest.requested_reviewers) return

      for (const { login } of pullRequest.requested_reviewers) {
        if (
          !alreadyReviewing.includes(login) &&
          !constant.pullRequest.excludeReviewers.includes(login)
        )
          alreadyReviewing.push(login)
      }
    }),
  )

  return { pullRequests, alreadyReviewing }
}

const addReviewers = async (
  {
    number,
    title,
    user,
    html_url,
    requested_reviewers,
    reviewers,
    head,
  }: PullRequest,
  assignedReviewers: string[],
  collaboratorIds: string[],
) => {
  await recursiveOctokit(() =>
    octokit.issues.addAssignees({
      ...COMMON_PARAMS,
      issue_number: number,
      assignees: ["hirotomoyamada"],
    }),
  )

  const count = (requested_reviewers?.length ?? 0) + reviewers.length

  let selectedReviewers: string[]

  if (head.label === "yamada-ui:changeset-release/main") {
    if (count >= 1) return

    selectedReviewers = ["hirotomoyamada"]

    await recursiveOctokit(() =>
      octokit.pulls.requestReviewers({
        ...COMMON_PARAMS,
        pull_number: number,
        reviewers: selectedReviewers,
      }),
    )
  } else {
    if (count >= constant.pullRequest.assignReviewerCount) return

    const omitCollaboratorIds = collaboratorIds.filter(
      (id) =>
        id !== user.login &&
        !requested_reviewers?.some(({ login }) => login === id) &&
        !reviewers.some(({ user }) => user?.login === id),
    )

    const targetCollaboratorIds = omitCollaboratorIds.filter(
      (id) => !assignedReviewers.some((login) => login === id),
    )

    const assignCount = constant.pullRequest.assignReviewerCount - count

    selectedReviewers = targetCollaboratorIds
      .sort(() => 0.5 - Math.random())
      .slice(0, assignCount)

    const addCount = assignCount - selectedReviewers.length

    if (addCount > 0) {
      const additionReviewers = omitCollaboratorIds
        .sort(() => 0.5 - Math.random())
        .slice(0, addCount)

      selectedReviewers.push(...additionReviewers)
    }

    assignedReviewers = [
      ...new Set([...assignedReviewers, ...selectedReviewers]),
    ]

    if (assignedReviewers.length === collaboratorIds.length)
      assignedReviewers = []

    await recursiveOctokit(() =>
      octokit.pulls.requestReviewers({
        ...COMMON_PARAMS,
        pull_number: number,
        reviewers: selectedReviewers,
      }),
    )
  }

  console.log("Added Reviewers", number, title, ...selectedReviewers)

  const selectedReviewerIds = selectedReviewers
    .map(
      (id) =>
        [...constant.maintainers, ...constant.members].find(
          ({ github }) => github.id === id,
        )?.discord?.id,
    )
    .filter(Boolean)

  const content = DISCORD_REVIEW_COMMENT(
    selectedReviewerIds,
    number,
    title,
    html_url,
  )

  await sendDiscordChannel("reviews", content)
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

    const { pullRequests, alreadyReviewing } = await getPullRequests()

    let assignedReviewers: string[] = [...alreadyReviewing]

    const collaboratorIds = collaborators
      .map(({ login }) => login)
      .filter((id) => !constant.pullRequest.excludeReviewers.includes(id))

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

      await addReviewers(pullRequest, assignedReviewers, collaboratorIds)
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
