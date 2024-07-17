import type { PullRequestReviewAction } from "utils/github"
import type { APIHandler } from "utils/next"
import { dismissed } from "./dismissed"
import { submitted } from "./submitted"

export const pullRequestReview: {
  [key in PullRequestReviewAction]?: APIHandler
} = {
  submitted,
  dismissed,
}
