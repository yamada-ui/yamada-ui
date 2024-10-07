declare module "insights" {
  type InsightSummarize = "day" | "month" | "week"

  interface InsightPeriod {
    end: string | undefined
    start: string | undefined
    summarize: InsightSummarize
  }

  interface InsightComment {
    created_at: string
    html_url: string
    issue_url: string
  }

  interface InsightReview {
    html_url: string
    pull_request_url: string
    submitted_at: string | undefined
  }

  interface InsightIssue {
    closed_at: null | string
    created_at: string
    html_url: string
    number: number
    title: string
  }

  interface InsightPullRequest {
    closed_at: null | string
    created_at: string
    html_url: string
    number: number
    title: string
  }

  interface UserInsight {
    approved?: InsightReview[]
    comments?: InsightComment[]
    issues?: InsightIssue[]
    pullRequests?: InsightPullRequest[]
    reviews?: InsightReview[]
  }

  interface UserInsightScore {
    approved: number
    comments: number
    issues: number
    pullRequests: number
    total: number
  }

  interface UserInsights {
    [key: string]: null | UserInsight
  }

  interface Insights {
    [key: string]: UserInsights
  }
}
