import type { RequestError } from "@octokit/request-error"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import type {
  EmitterWebhookEvent,
  EmitterWebhookEventName,
} from "@octokit/webhooks"
import type { NextApiRequest } from "next"
import { Octokit } from "@octokit/rest"
import { toCamelCase } from "@yamada-ui/utils"
import crypto from "crypto"
import { config } from "dotenv"
import { wait } from "./async"

config()

const COMMON_PARAMS = {
  ref: "main",
  owner: "yamada-ui",
  path: "",
  repo: "yamada-data",
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export type Event<T extends EmitterWebhookEventName> =
  EmitterWebhookEvent<T>["payload"]

export type PullRequestAction = Event<"pull_request">["action"]

export type PullRequestReviewAction = Event<"pull_request_review">["action"]

export const generateSignature = (body: any) => {
  const hmac = crypto.createHmac(
    "sha256",
    process.env.GITHUB_API_SECRET as string,
  )

  const digest = "sha256=" + hmac.update(JSON.stringify(body)).digest("hex")

  return digest
}

export const verifySignature = ({ body, headers }: NextApiRequest) => {
  const signature = (headers["x-hub-signature-256"] ??
    headers["x-signature"]) as string | undefined

  if (!signature) throw new Error("Invalid signature")

  const digest = generateSignature(body)

  if (signature !== digest) throw new Error("Invalid signature")
}

export interface Constant {
  [key: string]: any
}

export const getConstant = async (): Promise<Constant> => {
  const result: Constant = {}

  const { data } = await octokit.repos.getContent(COMMON_PARAMS)

  if (Array.isArray(data)) {
    await Promise.all(
      data.map(async ({ name, path }) => {
        try {
          const { data } = await octokit.repos.getContent({
            ...COMMON_PARAMS,
            path,
          })

          if ("content" in data) {
            const content = Buffer.from(data.content, "base64").toString(
              "utf-8",
            )

            name = name.replace(".json", "")
            name = toCamelCase(name)

            result[name] = JSON.parse(content)
          }
        } catch {}
      }),
    )
  }

  return result
}

export const recursiveOctokit = async <T = void>(
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    return await callback()
  } catch (e) {
    const isForbidden = (e as RequestError).status === 403
    const isRateLimitExceeded =
      (e as RequestError).response?.headers["x-ratelimit-remaining"] === "0"

    if (isForbidden && isRateLimitExceeded) {
      const ratelimitReset =
        (e as RequestError).response?.headers["x-ratelimit-reset"] ?? "0"
      const resetTime = parseInt(ratelimitReset) * 1000
      const waitTime = resetTime - Date.now() + 1000

      await wait(waitTime)
      return await recursiveOctokit(callback)
    } else {
      throw e
    }
  }
}

export type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
export type ListEvent = { created_at: number } & Awaited<
  ReturnType<typeof octokit.issues.listEventsForTimeline>
>["data"][number]

const pagingOctokit = async <Y>(
  func: ({
    page,
    per_page,
  }: {
    page: number
    per_page: number
  }) => Promise<{ data: Y[] }>,
) => {
  let items: Y[] = []
  let page = 1
  let count = 0
  const per_page = 100

  const cb = async () => {
    const { data } = await func({ page, per_page })

    items.push(...data)

    count = data.length

    if (count === per_page) {
      page++

      await recursiveOctokit(cb)
    }
  }

  await recursiveOctokit(cb)

  return items
}

type ListForRepoParams =
  RestEndpointMethodTypes["issues"]["listForRepo"]["parameters"]

const getListForRepo = async (params: ListForRepoParams) =>
  pagingOctokit(async ({ page, per_page }) =>
    octokit.issues.listForRepo({
      ...params,
      page,
      per_page,
    }),
  )

type ListEventsForTimelineParams =
  RestEndpointMethodTypes["issues"]["listEventsForTimeline"]["parameters"]

export const getListEventsForTimeline = async (
  params: ListEventsForTimelineParams,
) =>
  pagingOctokit(async ({ page, per_page }) =>
    octokit.issues.listEventsForTimeline({
      ...params,
      page,
      per_page,
    }),
  )

export const getIssues = async (params: ListForRepoParams) => {
  const issues = await getListForRepo(params)

  return issues.filter(({ pull_request }) => !pull_request)
}

export const getPullRequests = async (params: ListForRepoParams) => {
  const pullRequests = await getListForRepo(params)

  return pullRequests.filter(({ pull_request }) => pull_request)
}
