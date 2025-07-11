import { RangeDatePicker } from "@yamada-ui/calendar"
import { Card, CardBody, CardHeader, Heading } from "@yamada-ui/react"
import { memo } from "react"

export const PickDateCard = memo(() => {
  return (
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader>
        <Heading as="h2" size="md">
          Pick a date
        </Heading>
      </CardHeader>

      <CardBody>
        <RangeDatePicker
          defaultValue={[
            new Date(new Date().setDate(5)),
            new Date(new Date().setDate(10)),
          ]}
          placeholder="YYYY/MM/DD"
        />
      </CardBody>
    </Card>
  )
})

PickDateCard.displayName = "PickDateCard"
