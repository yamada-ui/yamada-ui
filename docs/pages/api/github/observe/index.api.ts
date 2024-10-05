import type { NextApiRequest, NextApiResponse } from "next"
import { getConstant, verifySignature } from "utils/github"
import { updateIssues } from "./update-issues"
import { updatePullRequests } from "./update-pull-requests"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    verifySignature(req)
  } catch {
    return res.status(400).send({ message: "Invalid signature", status: 400 })
  }

  const constant = await getConstant()

  const { issue = true, pullRequest = true } = req.body

  if (issue) await updateIssues({ constant, req, res })
  if (pullRequest) await updatePullRequests({ constant, req, res })

  res.status(200).end()
}

export default handler
