import { Button, Card, Spacer, Stat } from "@yamada-ui/react"
import { memo } from "react"

export const StatCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Body>
        <Stat.Root
          centerContent
          helperMessage="21% more than last month"
          icon="increase"
          label="Total Downloads"
          mx="auto"
          value="1,993,818"
        />
      </Card.Body>

      <Card.Footer
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
      </Card.Footer>
    </Card.Root>
  )
})

StatCard.displayName = "StatCard"
