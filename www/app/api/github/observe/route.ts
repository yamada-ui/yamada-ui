import { getSignature, verifySignature } from "../utils"
import { updateIssues } from "./update-issues"
import { updatePullRequests } from "./update-pull-requests"

export async function POST(req: Request) {
  const body = await req.json()
  const signature = getSignature(req)
  const valid = verifySignature(signature, body)

  if (!valid) return new Response(null, { status: 400 })

  const {
    issue = true,
    owner = "yamada-ui",
    pull_request = true,
    repo = "yamada-ui",
  } = body

  if (!repo) return new Response(null, { status: 400 })

  const handlers: ((owner: string, repo: string) => Promise<void>)[] = []

  if (issue) handlers.push(updateIssues)
  if (pull_request) handlers.push(updatePullRequests)

  await Promise.all(handlers.map((handler) => handler(owner, repo)))

  return new Response(null, { status: 200 })
}
