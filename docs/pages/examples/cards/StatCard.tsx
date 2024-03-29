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
    <Card rounded="xl" variant="outline">
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
      <CardFooter>
        <Button size="sm" colorScheme="primary">
          Add to Watchlist
        </Button>
        <Spacer />
        <Button size="sm" colorScheme="primary" variant="outline">
          See Breakdown
        </Button>
      </CardFooter>
    </Card>
  )
})

StatCard.displayName = "StatCard"
