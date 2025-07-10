import { Card, CardBody, CardHeader, Heading, Text } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import { UserCard } from "./user-card"

export const TeamMembersCard = memo(() => {
  const options = useMemo(() => ["Owner", "Admin", "Member", "Guest"], [])

  return (
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Team members
        </Heading>

        <Text color="muted">Manage your team members</Text>
      </CardHeader>

      <CardBody>
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          defaultValue="Owner"
          options={options}
          userId="@hirotomoyamada"
          username="Hirotomo Yamada"
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/61367823?v=4"
          defaultValue="Admin"
          options={options}
          userId="@taroj1205"
          username="Shintaro Jokagi"
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/24850340?v=4"
          defaultValue="Guest"
          options={options}
          userId="@hajime_mat"
          username="hajimemat"
        />
      </CardBody>
    </Card>
  )
})

TeamMembersCard.displayName = "TeamMembersCard"
