import type { EventAction, EventHandler } from "utils/github"
import { opened } from "./opened"
import { reviewRequestedRemoved } from "./review-request-removed"

export const pullRequest: { [key in EventAction]?: EventHandler } = {
  opened: opened,
  review_request_removed: reviewRequestedRemoved,
}
