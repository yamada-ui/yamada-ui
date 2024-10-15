import type { NextApiRequest, NextApiResponse } from "next"
import { isUndefined } from "@yamada-ui/react"
import { getConstant, verifySignature } from "utils/github"
import { pullRequest } from "./pull-request"
import { pullRequestReview } from "./pull-request-review"

const actions = {
  pull_request: pullRequest,
  pull_request_review: pullRequestReview,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    verifySignature(req)
  } catch {
    return res.status(400).send({ message: "Invalid signature", status: 400 })
  }

  const constant = await getConstant()
  const event = req.headers["x-github-event"] as keyof typeof actions
  const action = req.body.action
  const handler = getEventHandler(event, action)

  await handler?.({ constant, req, res })

  res.status(200).end()
}

export default handler

const getEventHandler = <T extends keyof typeof actions>(
  event: T,
  action: keyof (typeof actions)[T],
) => {
  if (!isUndefined(actions[event])) return actions[event][action]
}
