import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  VStack,
  Center,
} from "@yamada-ui/react"
import { memo } from "react"
import { FaRegCircle, FaRegStar } from "react-icons/fa"

export const GitHubCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <VStack gap={1}>
          <Heading size="md">yamada-ui</Heading>
          <Text color="muted">
            React UI components of the Yamada, by the Yamada, for the Yamada
            built with React and Emotion.
          </Text>
        </VStack>
        <Button mb="3.5rem" leftIcon={<FaRegStar />}>
          Star
        </Button>
      </CardHeader>
      <CardFooter mt="sm">
        <Text as={Center} gap={1} color="muted">
          <FaRegCircle /> TypeScript
        </Text>
        <Text as={Center} gap={1} color="muted">
          <FaRegStar /> 400
        </Text>
        <Text color="muted">Updated 26 March 2024</Text>
      </CardFooter>
    </Card>
  )
})

GitHubCard.displayName = "GitHubCard"
