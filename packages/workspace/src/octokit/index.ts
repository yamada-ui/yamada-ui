import type { RequestError } from "@octokit/request-error"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import type {
  EmitterWebhookEvent,
  EmitterWebhookEventName,
} from "@octokit/webhooks"
import { Octokit } from "@octokit/rest"
import { config } from "dotenv"

export type * from "@octokit/request-error"
export type * from "@octokit/rest"
export type * from "@octokit/webhooks"

config()

export type WebhookEvent<T extends EmitterWebhookEventName> =
  EmitterWebhookEvent<T>["payload"]

export const octokit: Octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function retryOnRateLimit<Y = void>(
  callback: () => Promise<Y>,
): Promise<Y> {
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

      return await retryOnRateLimit<Y>(callback)
    } else {
      throw e
    }
  }
}

export async function retryOnRateLimitWithPaging<Y>(
  func: ({
    page,
    per_page,
  }: {
    page: number
    per_page: number
  }) => Promise<{ data: Y[] }>,
) {
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

      await retryOnRateLimit(cb)
    }
  }

  await retryOnRateLimit(cb)

  return items
}

export async function getContent<Y extends { [key: string]: any }>(
  params: Partial<RestEndpointMethodTypes["repos"]["getContent"]["parameters"]>,
) {
  const { data } = await retryOnRateLimit(async () =>
    octokit.repos.getContent({
      ref: "main",
      owner: "yamada-ui",
      path: "",
      repo: "yamada-ui",
      ...params,
    }),
  )

  if (Array.isArray(data))
    throw new Error(`Multiple files found: ${params.path}`)

  if ("content" in data) {
    const content = Buffer.from(data.content, "base64").toString("utf-8")

    return JSON.parse(content) as Y
  } else {
    throw new Error(`Content not found: ${params.path}`)
  }
}
