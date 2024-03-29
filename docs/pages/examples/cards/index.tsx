import { Box } from "@yamada-ui/react"
import { memo } from "react"
import { AccountCard } from "./AccountCard"
import { BookmarkCard } from "./BookmarkCard"
import { CookieSettingsCard } from "./CookieSettingsCard"
import { GitHubCard } from "./GitHubCard"
import { ImageCard } from "./ImageCard"
import { NotificationsCard } from "./NotificationCard"
import { OverflowImageCard } from "./OverflowImageCard"
import { PaymentMethodCard } from "./PaymentMethodCard"
import { PickDateCard } from "./PickDateCard"
import { ReportIssueCard } from "./ReportIssueCard"
import { ShareDocumentCard } from "./ShareDocumentCard"
import { SocialMediaCard } from "./SocialMediaCard"
import { StatCard } from "./StatCard"
import { TeamMembersCard } from "./TeamMembersCard"

export const Cards = memo(() => {
  return (
    <Box
      columnCount={{ base: 3, xl: 2, lg: 1 }}
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

Cards.displayName = "Cards"
