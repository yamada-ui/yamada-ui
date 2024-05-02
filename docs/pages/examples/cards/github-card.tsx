import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Center,
  CardBody,
  Spacer,
  Icon,
} from "@yamada-ui/react"
import { Circle, Star } from "lucide-react"
import { memo } from "react"

export const GitHubCard = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader>
        <Heading as="h2" size="md" lineClamp={1}>
          yamada-ui
        </Heading>

        <Spacer />

        <Button leftIcon={<Icon as={Star} />}>Star</Button>
      </CardHeader>

      <CardBody>
        <Text color="muted">
          React UI components of the Yamada, by the Yamada, for the Yamada built
          with React and Emotion.
        </Text>
      </CardBody>

      <CardFooter
        flexDirection={{ base: "row", sm: "column" }}
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={{ base: "md", sm: "sm" }}
      >
        <Text as={Center} gap="xs" color="muted">
          <Icon as={Circle} /> TypeScript
        </Text>

        <Text as={Center} gap="xs" color="muted">
          <Icon as={Star} /> 400
        </Text>

        <Text color="muted" lineClamp={1}>
          Updated 26 March 2024
        </Text>
      </CardFooter>
    </Card>
  )
})

GitHubCard.displayName = "GitHubCard"
