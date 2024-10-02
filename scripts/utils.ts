import type { RequestError } from "@octokit/request-error"
import type { Options } from "prettier"
import { Octokit } from "@octokit/rest"
import { isArray } from "@yamada-ui/react"
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

export const toCamelCase = (value: {} & string) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

export const toKebabCase = (value: {} & string) =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const recursiveOctokit = async <T extends any = void>(
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    return await callback()
  } catch (e) {
    const { message, response, status } = e as RequestError

    const isForbidden = status === 403
    const isRateLimitExceeded =
      response?.headers["x-ratelimit-remaining"] === "0"
    const isTimeoutError = status === 500 && message === "Connect Timeout Error"

    if (isForbidden && isRateLimitExceeded) {
      const ratelimitReset = response?.headers?.["x-ratelimit-reset"] ?? "0"
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
  }
}

export type Constant = Record<string, any>

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
