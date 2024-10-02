declare module "insights" {
  type InsightSummarize = "day" | "month" | "week"

  type InsightPeriod = {
    end: string | undefined
    start: string | undefined
    summarize: InsightSummarize
  }

  type InsightComment = {
    created_at: string
    html_url: string
    issue_url: string
  }

  type InsightReview = {
    html_url: string
    pull_request_url: string
    submitted_at: string | undefined
  }

  type InsightIssue = {
    closed_at: null | string
    created_at: string
    html_url: string
    number: number
    title: string
  }

  type InsightPullRequest = {
    closed_at: null | string
    created_at: string
    html_url: string
    number: number
    title: string
  }

  type UserInsight = {
    approved?: InsightReview[]
    comments?: InsightComment[]
    issues?: InsightIssue[]
    pullRequests?: InsightPullRequest[]
    reviews?: InsightReview[]
  }

  type UserInsightScore = {
    approved: number
    comments: number
    issues: number
    pullRequests: number
    total: number
  }

  type UserInsights = Record<string, null | UserInsight>

  type Insights = Record<string, UserInsights>
}
