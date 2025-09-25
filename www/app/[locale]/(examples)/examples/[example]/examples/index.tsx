import { Box } from "@yamada-ui/react"
import { memo } from "react"
import { AccountCard } from "./account-card"
import { BookmarkCard } from "./bookmark-card"
import { CookieSettingsCard } from "./cookie-settings-card"
import { GitHubCard } from "./github-card"
import { ImageCard } from "./image-card"
import { NotificationsCard } from "./notification-card"
import { OverflowImageCard } from "./overflow-image-card"
import { PaymentMethodCard } from "./payment-method-card"
import { PickDateCard } from "./pick-date-card"
import { ReportIssueCard } from "./report-issue-card"
import { ShareDocumentCard } from "./share-document-card"
import { SocialMediaCard } from "./social-media-card"
import { StatCard } from "./stat-card"
import { TeamMembersCard } from "./team-members-card"

export const Examples = memo(() => {
  return (
    <Box
      as="section"
      columnCount={{ base: 3, lg: 1, xl: 2 }}
      gap={{ base: "lg", sm: "md" }}
      p={{ base: "lg", sm: "md" }}
    >
      <AccountCard key="account" />
      <PaymentMethodCard key="payment" />
      <SocialMediaCard key="social" />
      <BookmarkCard key="bookmark" />
      <ReportIssueCard key="report" />
      <CookieSettingsCard key="cookie" />
      <PickDateCard key="pick" />
      <GitHubCard key="github" />
      <StatCard key="stats" />
      <ImageCard key="image" />
      <TeamMembersCard key="team" />
      <ShareDocumentCard key="share" />
      <NotificationsCard key="notifications" />
      <OverflowImageCard key="overflow" />
    </Box>
  )
})

Examples.displayName = "Examples"
