import type { PullRequestReviewAction } from "utils/github"
import type { APIHandler } from "utils/next"
import { dismissed } from "./dismissed"
import { submitted } from "./submitted"

export const pullRequestReview: {
  [_key in PullRequestReviewAction]?: APIHandler
} = {
  dismissed,
  submitted,
}
