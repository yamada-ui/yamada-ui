import { Card, Heading } from "@yamada-ui/react"
import { memo } from "react"

export const PickDateCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header>
        <Heading as="h2" size="md">
          Pick a date
        </Heading>
      </Card.Header>

      <Card.Body>
        {/*
        TODO: 
        <RangeDatePicker
          defaultValue={[
            new Date(new Date().setDate(5)),
            new Date(new Date().setDate(10)),
          ]}
          placeholder="YYYY/MM/DD"
        /> */}
      </Card.Body>
    </Card.Root>
  )
})

PickDateCard.displayName = "PickDateCard"
