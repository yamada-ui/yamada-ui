import type { EventAction } from "utils/github"
import { opened } from "./opened"
import { reviewRequestedRemoved } from "./review-request-removed"
import type { APIHandler } from "utils/next"

export const pullRequest: { [key in EventAction]?: APIHandler } = {
  opened: opened,
  review_request_removed: reviewRequestedRemoved,
}
