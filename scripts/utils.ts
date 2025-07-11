import type { Options } from "prettier"
import { RequestError } from "@octokit/request-error"
import { config } from "dotenv"
import path from "path"
import { format, resolveConfig } from "prettier"

config()

export const prettier = async (content: string, options?: Options) => {
  const prettierConfig = await resolveConfig(
    path.join(process.cwd(), ".prettierrc"),
  )

  try {
    return format(content, {
      ...prettierConfig,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}

export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const recursiveOctokit = async <T = void>(
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    return await callback()
  } catch (e) {
    if (e instanceof RequestError) {
      const { message, response, status } = e

      const isForbidden = status === 403
      const isRateLimitExceeded =
        response?.headers["x-ratelimit-remaining"] === "0"
      const isTimeoutError =
        status === 500 && message === "Connect Timeout Error"

      if (isForbidden && isRateLimitExceeded) {
        const ratelimitReset = response.headers["x-ratelimit-reset"] ?? "0"
        const resetTime = parseInt(ratelimitReset) * 1000
        const waitTime = resetTime - Date.now() + 1000

        await wait(waitTime)
        return await recursiveOctokit(callback)
      } else if (isTimeoutError) {
        await wait(3000)
        return await recursiveOctokit(callback)
      } else {
        throw e
      }
    } else {
      throw e
    }
  }
}
