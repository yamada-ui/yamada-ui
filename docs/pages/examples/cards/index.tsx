import { GridItem, SimpleGrid } from "@yamada-ui/react"
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
import { TeamMebersCard } from "./TeamMembersCard"

export const Cards = memo(() => {
  const columns = [
    [
      <AccountCard key="account" />,
      <PaymentMethodCard key="payment" />,
      <SocialMediaCard key="social" />,
      <BookmarkCard key="bookmark" />,
    ],
    [
      <ReportIssueCard key="report" />,
      <CookieSettingsCard key="cookie" />,
      <PickDateCard key="pick" />,
      <GitHubCard key="github" />,
      <StatCard key="stats" />,
      <ImageCard key="image" />,
    ],
    [
      <TeamMebersCard key="team" />,
      <ShareDocumentCard key="share" />,
      <NotificationsCard key="notifications" />,
      <OverflowImageCard key="overflow" />,
    ],
  ]

  return (
    <SimpleGrid
      templateColumns={{
        base: "repeat(3, 1fr)",
        xl: "repeat(2, 1fr)",
        lg: "repeat(1, 1fr)",
      }}
      gap="1.5rem"
      p="lg"
    >
      {columns.map((column) => (
        <SimpleGrid
          key={column.map((Component) => Component.type.displayName).join("-")}
          h="fit-content"
          gap="1.5rem"
        >
          {column.map((Component, index) => (
            <GridItem key={Component.type.displayName + index}>
              {Component}
            </GridItem>
          ))}
        </SimpleGrid>
      ))}
    </SimpleGrid>
  )
})

Cards.displayName = "Cards"
