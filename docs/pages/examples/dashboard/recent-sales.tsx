import { Card, Text, Heading, CardHeader, CardBody } from "@yamada-ui/react"
import { memo } from "react"
import { NameCard } from "./name-card"

export const RecentSales = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mr={{ base: "lg", sm: "md" }}
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          RecentSales
        </Heading>
        <Text color="muted">You made 265 sales this month.</Text>
      </CardHeader>

      <CardBody>
        <NameCard
          name="Olivia Martin"
          mail_addres="olivia.martin@email.com"
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          money="+$1,999.00"
        />
        <NameCard
          name="Jackson Lee"
          mail_addres="jackson.lee@email.com"
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          money="+$39.00"
        />
        <NameCard
          name="Isabella Nguyen"
          mail_addres="isabella.nguyen@email.com"
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          money="+$299.00"
        />
        <NameCard
          name="William Kim"
          mail_addres="will@email.com"
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          money="+$99.00"
        />
        <NameCard
          name="Sofia Davis"
          mail_addres="sofia.davis@email.com"
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          money="+$39.00"
        />
      </CardBody>
    </Card>
  )
})
RecentSales.displayName = "RecentSales"
