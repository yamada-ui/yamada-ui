import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Spacer,
  Stat,
} from "@yamada-ui/react"
import { memo } from "react"

export const StatCard = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardBody>
        <Stat
          label="Total Downloads"
          number="1,993,818"
          icon="increase"
          helperMessage="21% more than last month"
          centerContent
          mx="auto"
        />
      </CardBody>

      <CardFooter
        flexDirection={{ base: "row", sm: "column" }}
        gap={{ base: "md", sm: "sm" }}
      >
        <Button
          size="sm"
          colorScheme="primary"
          w={{ base: undefined, sm: "full" }}
        >
          Add to Watch list
        </Button>

        <Spacer display={{ base: "block", sm: "none" }} />

        <Button
          size="sm"
          colorScheme="primary"
          variant="outline"
          w={{ base: undefined, sm: "full" }}
        >
          See Breakdown
        </Button>
      </CardFooter>
    </Card>
  )
})

StatCard.displayName = "StatCard"
