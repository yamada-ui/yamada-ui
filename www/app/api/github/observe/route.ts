import { verifySignature } from "../utils"
import { updateIssues } from "./update-issues"
import { updatePullRequests } from "./update-pull-requests"

export async function POST(req: Request) {
  const valid = await verifySignature(req)

  if (!valid) return new Response(null, { status: 400 })

  const {
    issue = true,
    owner = "yamada-ui",
    pull_request = true,
    repo = "yamada-ui",
  } = await req.json()

  if (!repo) return new Response(null, { status: 400 })

  const handlers: ((owner: string, repo: string) => Promise<void>)[] = []

  if (issue) handlers.push(updateIssues)
  if (pull_request) handlers.push(updatePullRequests)

  await Promise.all(handlers.map((handler) => handler(owner, repo)))

  return new Response(null, { status: 200 })
}
