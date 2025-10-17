import type {
  EmitterWebhookEventName,
  WebhookEvent,
} from "@yamada-ui/workspace/octokit"
import { verifySignature } from "../utils"
import { dismissed } from "./pull-request-review/dismissed"
import { submitted } from "./pull-request-review/submitted"
import { opened } from "./pull-request/opened"
import { reviewRequestRemoved } from "./pull-request/review-request-removed"

type PullRequestAction = WebhookEvent<"pull_request">["action"]
type PullRequestReviewAction = WebhookEvent<"pull_request_review">["action"]
type Handler = (req: Request) => Promise<Response | void>
type PullRequestActionMap = {
  [key in PullRequestAction]?: Handler
}
type PullRequestReviewActionMap = {
  [key in PullRequestReviewAction]?: Handler
}
type EventMap = {
  [key in EmitterWebhookEventName]?: PullRequestActionMap &
    PullRequestReviewActionMap
}

const eventMap: EventMap = {
  pull_request: {
    opened,
    review_request_removed: reviewRequestRemoved,
  },
  pull_request_review: {
    dismissed,
    submitted,
  },
}

export async function POST(req: Request) {
  const valid = await verifySignature(req)

  if (!valid) return new Response(null, { status: 400 })

  const event = req.headers.get("x-github-event") as EmitterWebhookEventName
  const body = await req.json()
  const action = body.action as PullRequestAction | PullRequestReviewAction
  const handler = eventMap[event]?.[action]

  if (!handler) return new Response(null, { status: 400 })

  return (await handler(req)) || new Response(null, { status: 200 })
}
