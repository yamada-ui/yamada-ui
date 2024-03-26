import { Card, CardBody, CardHeader, Heading, Text } from "@yamada-ui/react"
import { memo } from "react"
import { UserCard } from "./UserCard"

export const TeamMebersCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Team members</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">Manage your team members</Text>
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          username="Hirotomo Yamada"
          userId="@hirotomoyamada"
          defaultValue="Owner"
          options={["Owner", "Admin", "Member", "Guest"]}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/61367823?v=4"
          username="Shintaro Jokagi"
          userId="@taroj1205"
          defaultValue="Admin"
          options={["Owner", "Admin", "Member", "Guest"]}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/24850340?v=4"
          username="hajimemat"
          userId="@hajime_mat"
          defaultValue="Guest"
          options={["Owner", "Admin", "Member", "Guest"]}
        />
      </CardBody>
    </Card>
  )
})

TeamMebersCard.displayName = "TeamMebersCard"
