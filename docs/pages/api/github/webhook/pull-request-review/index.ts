import { dismissed } from "./dismissed"
import { submitted } from "./submitted"
import type { PullRequestReviewAction } from "utils/github"
import type { APIHandler } from "utils/next"

export const pullRequestReview: {
  [_key in PullRequestReviewAction]?: APIHandler
} = {
  submitted,
  dismissed,
}
