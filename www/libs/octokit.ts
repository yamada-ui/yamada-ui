import type { RequestError } from "@octokit/request-error"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import type { Dict } from "@yamada-ui/utils"
import { Octokit } from "@octokit/rest"
import { isArray } from "@yamada-ui/utils"
import { config } from "dotenv"

config()

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

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

export async function getContent<Y extends Dict>(
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

  if (isArray(data)) throw new Error(`Multiple files found: ${params.path}`)

  if ("content" in data) {
    const content = Buffer.from(data.content, "base64").toString("utf-8")

    const name = data.name.split(".")[0]!

    return [name, JSON.parse(content) as Y] as const
  } else {
    throw new Error(`Content not found: ${params.path}`)
  }
}
