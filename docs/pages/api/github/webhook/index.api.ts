import type { NextApiRequest, NextApiResponse } from "next"
import { getConstant, verifySignature } from "utils/github"
import { pullRequest } from "./pull-request"
import { pullRequestReview } from "./pull-request-review"

const actions = {
  pull_request: pullRequest,
  pull_request_review: pullRequestReview,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await verifySignature(req)
  } catch {
    return res.status(400).send({ status: 400, message: "Invalid signature" })
  }

  const constant = await getConstant()
  const event = req.headers["x-github-event"] as keyof typeof actions
  const action = req.body.action
  const handler = getEventHandler(event, action)

  await handler?.({ req, res, constant })

  res.status(200).end()
}

export default handler

const getEventHandler = <T extends keyof typeof actions>(
  event: T,
  action: keyof (typeof actions)[T],
) => {
  return actions[event]?.[action]
}
