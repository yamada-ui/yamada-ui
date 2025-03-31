import type { Options } from "prettier"
import { RequestError } from "@octokit/request-error"
import { Octokit } from "@octokit/rest"
import { isArray, toCamelCase } from "@yamada-ui/utils"
import { config } from "dotenv"
import path from "path"
import { format, resolveConfig } from "prettier"

const COMMON_PARAMS = {
  ref: "main",
  owner: "yamada-ui",
  path: "",
  repo: "yamada-data",
}

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

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

export interface Constant {
  [key: string]: any
}

export const getConstant = async (): Promise<Constant> => {
  const result: Constant = {}

  const { data } = await octokit.repos.getContent(COMMON_PARAMS)

  if (isArray(data)) {
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

            if (content) result[name] = JSON.parse(content)
          }
        } catch {}
      }),
    )
  }

  return result
}
