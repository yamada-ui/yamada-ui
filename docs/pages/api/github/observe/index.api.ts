import type { NextApiRequest, NextApiResponse } from "next"
import { getConstant, verifySignature } from "utils/github"
import { updatePullRequests } from "./update-pull-requests"
import { updateIssues } from "./update-issues"

// curl -X POST -H "Content-Type: application/json" -H "x-signature: sha256=4b7251ec2f3a382546a5098839f72943a48f98c0866297959e659a2d4a7a037f" -d '{"owner": "yamada-ui"}' http://localhost:3000/api/github/observe

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await verifySignature(req)
  } catch (e) {
    return res.status(400).send({ status: 400, message: "Invalid signature" })
  }

  return res.status(200).end()

  const constant = await getConstant()

  await updateIssues({ req, res, constant })
  await updatePullRequests({ req, res, constant })

  res.status(200).end()
}

export default handler
