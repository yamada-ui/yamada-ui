import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"
import { recursiveOctokit } from "./utils"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]
type Review = Awaited<
  ReturnType<typeof octokit.pulls.listReviews>
>["data"][number]
type PullRequest = Awaited<ReturnType<typeof getPullRequest>>
type PullRequestMap = { [key: number]: PullRequest }

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }
const OMIT_GITHUB_IDS = ["hirotomoyamada", "hajimemat"]
const DISCORD_USER_MAP: Record<string, string> = {
  hirotomoyamada: "434987704162451467",
  illionillion: "1000629510078738432",
  koralle: "702799711404425246",
  "108yen": "281653488084189184",
  taroj1205: "631578250144907269",
  nakayan5: "770535018040655873",
  setodeve: "441961406980554772",
  hoshico: "982900988073607269",
  suzukisan22: "611441723712864256",
  cidkumagai: "831092312238719026",
  yasmro: "738432159441879151",
  fffk10: "385445321263677440",
  quantumshiro: "528930667094867978",
  hirayamahiroto: "442558594479816715",
  ayanami77: "1215887087530676317",
  "Haru-0001": "1244260714919497809",
  "Neru-Neru": "141686364864380928",
  "Tomoya-Matsubara": "1176786237944766495",
  "kryota-dev": "623519405040730112",
  "yamao-latte": "340481082640302083",
  "haru-036": "1063410330153259078",
  zonoryo17: "968897190783246416",
  harutsuka: "1084831703387877549",
  Hayato1031: "663701704990130177",
  kurakke: "1009394043974856704",
}
const REVIEWER_COUNT = 4

const GITHUB_JOINING_COMMENT = (id: string) =>
  [
    `@${id}`,
    `Hi, Thanks for the PR!`,
    `A week has passed since this PR was created, so maintainers will be joining this PR.`,
  ].join("\n\n")
const DISCORD_HELP_WANTED_COMMENT = (
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@&1202956318718304276>`,
    `Help!, I need somebody, Help!, not just anybody,\nHelp!, you know I need someone, Help!`,
    `[${number}: ${title}](${html_url})`,
  ].join("\n\n")
const DISCORD_REVIEW_COMMENT = (
  ids: string[],
  number: number,
  title: string,
  html_url: string,
) =>
  [
    ids.map((id) => `<@${id}>`).join(" "),
    `Please review this PR😎`,
    `[${number}: ${title}](${html_url})`,
  ].join("\n\n")

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const getCollaborators = async () => {
  const { data } = await recursiveOctokit(() =>
    octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      per_page: 100,
    }),
  )

  return data
}

const getPullRequests = async () => {
  let pullRequests: Issue[] = []
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

    pullRequests.push(...data)

    count = data.length

    if (count === perPage) {
      page++

      await recursiveOctokit(listForRepo)
    }
  }

  await recursiveOctokit(listForRepo)

  pullRequests = pullRequests.filter(({ pull_request }) => pull_request)

  return pullRequests
}

const getPullRequest = async (number: number) => {
  const { data } = await octokit.pulls.get({
    ...COMMON_PARAMS,
    pull_number: number,
  })

  const { data: reviews } = await recursiveOctokit(() =>
    octokit.pulls.listReviews({
      ...COMMON_PARAMS,
      pull_number: number,
    }),
  )

  const reviewers = reviews
    .map(({ user }) => user)
    .filter(Boolean) as NonNullable<Review["user"]>[]

  return { ...data, reviewers }
}

const getPullRequestAndReviewers = async (pullRequests: Issue[]) => {
  const alreadyReviewing: string[] = []
  const pullRequestMap: { [key: number]: PullRequest } = {}

  await Promise.all(
    pullRequests.map(async ({ number }) => {
      const pullRequest = await recursiveOctokit(() => getPullRequest(number))

      if (!pullRequest) return

      pullRequestMap[number] = pullRequest

      if (!pullRequest.requested_reviewers) return

      for (const { login } of pullRequest.requested_reviewers) {
        if (
          !alreadyReviewing.includes(login) &&
          !OMIT_GITHUB_IDS.includes(login)
        )
          alreadyReviewing.push(login)
      }
    }),
  )

  return { alreadyReviewing, pullRequestMap }
}

const addReviewers = async (
  pullRequests: Issue[],
  pullRequestMap: PullRequestMap,
  alreadyReviewing: string[],
  collaborators: Collaborator[],
) => {
  const collaboratorIds = collaborators
    .map(({ login }) => login)
    .filter((login) => !OMIT_GITHUB_IDS.includes(login))

  let assignedReviewers: string[] = [...alreadyReviewing]

  const url = process.env.DISCORD_REVIEWS_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  for await (const { number, title, user, html_url } of pullRequests) {
    if (!user) continue

    if (!pullRequestMap[number]) continue

    const { draft, requested_reviewers, reviewers, head } =
      pullRequestMap[number]

    if (draft) continue

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
      if (count >= 1) continue

      selectedReviewers = ["hirotomoyamada"]

      await recursiveOctokit(() =>
        octokit.pulls.requestReviewers({
          ...COMMON_PARAMS,
          pull_number: number,
          reviewers: selectedReviewers,
        }),
      )
    } else {
      if (count >= REVIEWER_COUNT) continue

      const omitCollaboratorIds = collaboratorIds.filter(
        (id) =>
          id !== user.login &&
          !requested_reviewers?.some(({ login }) => login === id) &&
          !reviewers.some(({ login }) => login === id),
      )

      const targetCollaboratorIds = omitCollaboratorIds.filter(
        (id) => !assignedReviewers.some((login) => login === id),
      )

      const assignCount = REVIEWER_COUNT - count

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

    const selectedReviewerIds = selectedReviewers.map(
      (id) => DISCORD_USER_MAP[id],
    )

    const content = DISCORD_REVIEW_COMMENT(
      selectedReviewerIds,
      number,
      title,
      html_url,
    )

    await sendDiscordChannel(url, content)

    console.log("Send discord", number, title)
  }
}

const addComment = async (
  pullRequests: Issue[],
  pullRequestMap: PullRequestMap,
  collaborators: Collaborator[],
) => {
  const collaboratorIds = collaborators.map(({ login }) => login)

  const url = process.env.DISCORD_HELP_WANTED_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  await Promise.all(
    pullRequests.map(
      async ({ number, title, user, labels, created_at, html_url }) => {
        if (!user || user.type === "Bot") return

        if (
          labels.some(
            (label) => isObject(label) && "help wanted" === label?.name,
          )
        )
          return

        if (collaboratorIds.includes(user.login)) return

        const createdTimestamp = new Date(created_at)
        const limitTimestamp = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

        if (createdTimestamp > limitTimestamp) return

        if (!pullRequestMap[number]) return

        const { head } = pullRequestMap[number]

        if (head.label === "yamada-ui:changeset-release/main") return

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

        console.log("Added comment", number, title)

        const content = DISCORD_HELP_WANTED_COMMENT(number, title, html_url)

        await sendDiscordChannel(url, content)

        console.log("Send discord", number, title)
      },
    ),
  )
}

const sendDiscordChannel = async (url: string, content: string) => {
  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const main = async () => {
  try {
    const collaborators = await getCollaborators()

    const pullRequests = await getPullRequests()
    const { pullRequestMap, alreadyReviewing } =
      await getPullRequestAndReviewers(pullRequests)

    await addReviewers(
      pullRequests,
      pullRequestMap,
      alreadyReviewing,
      collaborators,
    )

    await addComment(pullRequests, pullRequestMap, collaborators)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
