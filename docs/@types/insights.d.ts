declare module "insights" {
  type InsightSummarize = "day" | "week" | "month"

  type InsightPeriod = {
    start: string | undefined
    end: string | undefined
    summarize: InsightSummarize
  }

  type InsightComment = {
    html_url: string
    issue_url: string
    created_at: string
  }

  type InsightReview = {
    html_url: string
    pull_request_url: string
    submitted_at: string | undefined
  }

  type InsightIssue = {
    number: number
    title: string
    html_url: string
    created_at: string
    closed_at: string | null
  }

  type InsightPullRequest = {
    number: number
    title: string
    html_url: string
    created_at: string
    closed_at: string | null
  }

  type UserInsight = {
    comments?: InsightComment[]
    reviews?: InsightReview[]
    issues?: InsightIssue[]
    pullRequests?: InsightPullRequest[]
    approved?: InsightReview[]
  }

  type UserInsightScore = {
    comments: number
    issues: number
    pullRequests: number
    approved: number
    total: number
  }

  type UserInsights = Record<string, UserInsight | null>

  type Insights = Record<string, UserInsights>
}
