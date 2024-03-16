import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]
type Review = Awaited<
  ReturnType<typeof octokit.pulls.listReviews>
>["data"][number]

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-docs" }
const OMIT_GITHUB_IDS = ["hirotomoyamada", "hajimemat"]
const DISCORD_USER_MAP: Record<string, string> = {
  hirotomoyamada: "434987704162451467",
  illionillion: "1000629510078738432",
  koralle: "702799711404425246",
  "108yen": "281653488084189184",
  umaidashi: "1001523961231839243",
  taroj1205: "631578250144907269",
  KenyaMasuko: "787761288088256512",
  nakayan5: "770535018040655873",
  setodeve: "441961406980554772",
  hoshico: "982900988073607269",
  "komura-c": "394133735567785996",
  melodyclue: "1039205048711913652",
}

const GITHUB_JOINING_COMMENT = (id: string) =>
  [
    `@${id}`,
    `Hi, Thanks for the PR!`,
    `A week has passed since this PR was created, so core members will be joining this PR.`,
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
  const { data } = await octokit.repos.listCollaborators({
    ...COMMON_PARAMS,
    per_page: 100,
  })

  return data
}

const getPullRequests = async () => {
  let pullRequests: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await octokit.issues.listForRepo({
      ...COMMON_PARAMS,
      state: "open",
      per_page: perPage,
      page,
    })

    pullRequests.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  pullRequests = pullRequests.filter(({ pull_request }) => pull_request)

  return pullRequests
}

const getPullRequest = async (number: number) => {
  const { data } = await octokit.pulls.get({
    ...COMMON_PARAMS,
    pull_number: number,
  })

  const { data: reviews } = await octokit.pulls.listReviews({
    ...COMMON_PARAMS,
    pull_number: number,
  })

  const reviewers = reviews
    .map(({ user }) => user)
    .filter(Boolean) as NonNullable<Review["user"]>[]

  return { ...data, reviewers }
}

const addReviewers = async (
  pullRequests: Issue[],
  collaborators: Collaborator[],
) => {
  const collaboratorIds = collaborators.map(({ login }) => login)

  const url = process.env.DISCORD_REVIEWS_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  await Promise.all(
    pullRequests.map(async ({ number, title, user, html_url }) => {
      if (!user) return

      const { draft, requested_reviewers, reviewers, head } =
        await getPullRequest(number)

      if (draft) return

      await octokit.issues.addAssignees({
        ...COMMON_PARAMS,
        issue_number: number,
        assignees: ["hirotomoyamada"],
      })

      const count = (requested_reviewers?.length ?? 0) + reviewers.length
      let selectedReviewers: string[]

      if (head.label === "yamada-docs:changeset-release/main") {
        if (count >= 1) return

        selectedReviewers = ["hirotomoyamada"]

        await octokit.pulls.requestReviewers({
          ...COMMON_PARAMS,
          pull_number: number,
          reviewers: selectedReviewers,
        })
      } else {
        if (count >= 2) return

        const omitCollaboratorIds = collaboratorIds.filter(
          (id) =>
            id !== user.login &&
            !requested_reviewers?.some(({ login }) => login === id) &&
            !reviewers.some(({ login }) => login === id) &&
            !OMIT_GITHUB_IDS.includes(id),
        )

        selectedReviewers = omitCollaboratorIds
          .sort(() => 0.5 - Math.random())
          .slice(0, 2 - count)

        await octokit.pulls.requestReviewers({
          ...COMMON_PARAMS,
          pull_number: number,
          reviewers: selectedReviewers,
        })
      }

      console.log("Added Reviewers", number, title)

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
    }),
  )
}

const addComment = async (
  pullRequests: Issue[],
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

        const { head } = await getPullRequest(number)

        if (head.label === "yamada-docs:changeset-release/main") return

        await octokit.issues.createComment({
          ...COMMON_PARAMS,
          issue_number: number,
          body: GITHUB_JOINING_COMMENT(user.login),
        })

        await octokit.issues.addLabels({
          ...COMMON_PARAMS,
          issue_number: number,
          labels: ["help wanted"],
        })

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

    await addReviewers(pullRequests, collaborators)

    await addComment(pullRequests, collaborators)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
