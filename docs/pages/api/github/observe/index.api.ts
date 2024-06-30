import type { NextApiRequest, NextApiResponse } from "next"
import { getConstant, verifySignature } from "utils/github"
import { updatePullRequests } from "./update-pull-requests"
import { updateIssues } from "./update-issues"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await verifySignature(req)
  } catch (e) {
    return res.status(400).send({ status: 400, message: "Invalid signature" })
  }

  const constant = await getConstant()

  await updateIssues({ req, res, constant })
  await updatePullRequests({ req, res, constant })

  res.status(200).end()
}

export default handler
