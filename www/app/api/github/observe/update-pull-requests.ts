import type { Dict } from "@yamada-ui/utils"
import { isObject, isUndefined } from "@yamada-ui/utils"
import { sendDiscord } from "@yamada-ui/workspace/discord"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

type PullRequest = Awaited<ReturnType<typeof octokit.pulls.get>>["data"]

async function remindReviews(
  owner: string,
  repo: string,
  pullRequest: PullRequest,
  remindDay: number,
  addReviewWantedDay: number,
  collaborators: any[],
  message: Dict,
) {
  const timeline = await retryOnRateLimitWithPaging(async (params) =>
    octokit.issues.listEventsForTimeline({
      issue_number: pullRequest.number,
      owner,
      repo,
      ...params,
    }),
  )
  const commitIndex = timeline.findLastIndex(
    (item) =>
      item.event === "committed" &&
      "parents" in item &&
      item.parents.length === 1,
  )
  const omittedTimeline = timeline.slice(commitIndex + 1)

  if (omittedTimeline.some((event) => event.event === "reviewed")) {
    await retryOnRateLimit(async () =>
      octokit.issues.removeLabel({
        name: "review wanted",
        issue_number: pullRequest.number,
        owner,
        repo,
      }),
    )

    return
  }

  const createdAt = new Date(pullRequest.created_at)
  const remindLimitAt = new Date(Date.now() - remindDay * 24 * 60 * 60 * 1000)
  const AddHelpWantedLimitAt = new Date(
    Date.now() - addReviewWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdAt < remindLimitAt) {
    const requestedReviewerIds = pullRequest.requested_reviewers?.map(
      ({ login }) => login,
    )
    const requestedReviewerDiscordIds: string[] | undefined =
      requestedReviewerIds
        ?.map(
          (id) =>
            collaborators.find(({ github }) => github.id === id)?.discord?.id,
        )
        .filter(Boolean)

    if (requestedReviewerDiscordIds?.length) {
      const content = [
        requestedReviewerDiscordIds.map((id) => `<@${id}>`).join(" "),
        "",
        message.pullRequest.remindReview,
        "",
        `[${pullRequest.number}: ${pullRequest.title}](${pullRequest.html_url})`,
      ].join("\n")

      await sendDiscord(process.env.DISCORD_REVIEWS_WEBHOOK_URL, content)
    }
  }

  if (createdAt < AddHelpWantedLimitAt) {
    if (
      !pullRequest.labels.some(
        (label) => isObject(label) && "review wanted" === label.name,
      )
    ) {
      await retryOnRateLimit(async () =>
        octokit.issues.addLabels({
          issue_number: pullRequest.number,
          labels: ["review wanted"],
          owner,
          repo,
        }),
      )

      const content = [
        `<@&1202956318718304276>`,
        "",
        message.pullRequest.addReviewWanted,
        "",
        `[${pullRequest.number}: ${pullRequest.title}](${pullRequest.html_url})`,
      ].join("\n")

      await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
    }
  }
}

async function addHelpWanted(
  owner: string,
  repo: string,
  pullRequest: PullRequest,
  addHelpWantedDay: number,
  message: Dict,
) {
  if (pullRequest.user.type === "Bot") return
  if (
    pullRequest.labels.some(
      (label) => isObject(label) && "help wanted" === label.name,
    )
  )
    return

  const createdAt = new Date(pullRequest.created_at)
  const AddHelpWantedLimitAt = new Date(
    Date.now() - addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdAt > AddHelpWantedLimitAt) return

  const body = [
    `@${pullRequest.user.login}`,
    "",
    message.pullRequest.joinMaintainer,
  ].join("\n")

  await retryOnRateLimit(async () =>
    octokit.issues.createComment({
      body,
      issue_number: pullRequest.number,
      owner,
      repo,
    }),
  )

  await retryOnRateLimit(async () =>
    octokit.issues.addLabels({
      issue_number: pullRequest.number,
      labels: ["help wanted"],
      owner,
      repo,
    }),
  )

  const content = [
    `<@&1202956318718304276>`,
    "",
    message.pullRequest.addHelpWanted,
    "",
    `[${pullRequest.number}: ${pullRequest.title}](${pullRequest.html_url})`,
  ].join("\n")

  await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
}

export async function updatePullRequests(owner: string, repo: string) {
  const {
    maintainers,
    message,
    "pull-request": {
      addHelpWantedDay,
      addReviewWantedDay,
      remindDay,
      requireApprovalCount,
    },
  } = Object.fromEntries(
    await Promise.all(
      ["maintainers.json", "pull-request.json", "message.json"].map(
        async (path) => [
          path.split(".")[0]!,
          await getContent<Dict>({ path, repo: "yamada-data" }),
        ],
      ),
    ),
  )
  const collaborators = [...maintainers]
  const collaboratorIds = collaborators.map(({ github }) => github.id)
  const changesetBranches = [
    "yamada-ui:changeset-release/main",
    "yamada-ui:changeset-release/v1",
  ]
  const pullRequests = (
    await retryOnRateLimitWithPaging(async (params) =>
      octokit.issues.listForRepo({ owner, repo, ...params }),
    )
  ).filter(({ pull_request }) => pull_request)

  await Promise.all(
    pullRequests.map(async ({ number }) => {
      const { data: pullRequest } = await retryOnRateLimit(async () =>
        octokit.pulls.get({ owner, pull_number: number, repo }),
      )

      if (changesetBranches.includes(pullRequest.head.label)) return
      if (isUndefined(pullRequest.user) || pullRequest.draft) return

      const { data: reviewers } = await retryOnRateLimit(async () =>
        octokit.pulls.listReviews({
          owner,
          pull_number: number,
          repo,
        }),
      )

      const ApprovedReviewCount = reviewers.reduce(
        (count, { state }) => (state === "APPROVED" ? count + 1 : count),
        0,
      )

      if (ApprovedReviewCount >= requireApprovalCount) return

      await remindReviews(
        owner,
        repo,
        pullRequest,
        remindDay,
        addReviewWantedDay,
        collaborators,
        message,
      )

      if (collaboratorIds.includes(pullRequest.user.login)) return

      await addHelpWanted(owner, repo, pullRequest, addHelpWantedDay, message)
    }),
  )
}
