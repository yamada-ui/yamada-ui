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
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardBody>
        <Stat
          centerContent
          helperMessage="21% more than last month"
          icon="increase"
          label="Total Downloads"
          mx="auto"
          number="1,993,818"
        />
      </CardBody>

      <CardFooter
        flexDirection={{ base: "row", sm: "column" }}
        gap={{ base: "md", sm: "sm" }}
      >
        <Button
          colorScheme="primary"
          size="sm"
          w={{ base: undefined, sm: "full" }}
        >
          Add to Watch list
        </Button>

        <Spacer display={{ base: "block", sm: "none" }} />

        <Button
          colorScheme="primary"
          size="sm"
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
