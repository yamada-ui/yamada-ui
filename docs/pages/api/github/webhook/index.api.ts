import type { NextApiRequest, NextApiResponse } from "next"
import { getConstant, verifySignature } from "utils/github"
import type { EventAction } from "utils/github"
import { pullRequest } from "./pull-request"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await verifySignature(req)
  } catch (e) {
    return res.status(400).send({ status: 400, message: "Invalid signature" })
  }

  const constant = await getConstant()
  const action = req.body.action as EventAction

  await pullRequest[action]?.({ req, res, constant })

  res.status(200).end()
}

export default handler
