import type {
  EmitterWebhookEvent,
  EmitterWebhookEventName,
} from "@octokit/webhooks"
import { Webhooks } from "@octokit/webhooks"
import type { NextApiRequest, NextApiResponse } from "next"
import { Octokit } from "@octokit/rest"
import type { RequestError } from "@octokit/request-error"
import { wait } from "./async"

const COMMON_PARAMS = {
  owner: "yamada-ui",
  repo: "yamada-data",
  path: "",
  ref: "main",
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const webhooks = new Webhooks({
  secret: process.env.GITHUB_API_SECRET as string,
})

export type Event<T extends EmitterWebhookEventName> =
  EmitterWebhookEvent<T>["payload"]

export type EventAction = Event<"pull_request">["action"]

export type EventHandler = ({
  req,
  res,
  constant,
}: {
  req: NextApiRequest
  res: NextApiResponse
  constant: Constant
}) => Promise<void>

export const verifySignature = async ({ headers, body }: NextApiRequest) => {
  const signature = headers["x-hub-signature-256"] as string | undefined

  if (!signature) throw new Error("Invalid signature")

  const isVerified = await webhooks.verify(JSON.stringify(body), signature)

  if (!isVerified) throw new Error("Invalid signature")
}

const toCamelCase = (value: string & {}) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

export type Constant = Record<string, any>

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

export const recursiveOctokit = async <T extends any = void>(
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
        (e as RequestError).response?.headers?.["x-ratelimit-reset"] ?? "0"
      const resetTime = parseInt(ratelimitReset) * 1000
      const waitTime = resetTime - Date.now() + 1000

      await wait(waitTime)
      return await recursiveOctokit(callback)
    } else {
      throw e
    }
  }
}
