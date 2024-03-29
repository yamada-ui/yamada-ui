import { Card, CardBody, CardHeader, Heading, Text } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import { UserCard } from "./UserCard"

export const TeamMembersCard = memo(() => {
  const options = useMemo(() => ["Owner", "Admin", "Member", "Guest"], [])

  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          Team members
        </Heading>

        <Text color="muted">Manage your team members</Text>
      </CardHeader>

      <CardBody>
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          username="Hirotomo Yamada"
          userId="@hirotomoyamada"
          defaultValue="Owner"
          options={options}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/61367823?v=4"
          username="Shintaro Jokagi"
          userId="@taroj1205"
          defaultValue="Admin"
          options={options}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/24850340?v=4"
          username="hajimemat"
          userId="@hajime_mat"
          defaultValue="Guest"
          options={options}
        />
      </CardBody>
    </Card>
  )
})

TeamMembersCard.displayName = "TeamMembersCard"
