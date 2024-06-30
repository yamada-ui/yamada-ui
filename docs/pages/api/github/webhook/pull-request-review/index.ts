import type { PullRequestReviewAction } from "utils/github"
import type { APIHandler } from "utils/next"
import { submitted } from "./submitted"
import { dismissed } from "./dismissed"

export const pullRequestReview: {
  [key in PullRequestReviewAction]?: APIHandler
} = {
  submitted,
  dismissed,
}
