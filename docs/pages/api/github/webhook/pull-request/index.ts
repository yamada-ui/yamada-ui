import { opened } from "./opened"
import { reviewRequestedRemoved } from "./review-request-removed"
import type { PullRequestAction } from "utils/github"
import type { APIHandler } from "utils/next"

export const pullRequest: { [_key in PullRequestAction]?: APIHandler } = {
  opened,
  review_request_removed: reviewRequestedRemoved,
}
