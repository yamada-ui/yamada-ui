import type { NextApiRequest, NextApiResponse } from "next"
import { updateIssues } from "./update-issues"
import { updatePullRequests } from "./update-pull-requests"
import { getConstant, verifySignature } from "utils/github"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await verifySignature(req)
  } catch {
    return res.status(400).send({ status: 400, message: "Invalid signature" })
  }

  const constant = await getConstant()

  const { issue = true, pullRequest = true } = req.body

  if (issue) await updateIssues({ req, res, constant })
  if (pullRequest) await updatePullRequests({ req, res, constant })

  res.status(200).end()
}

export default handler
