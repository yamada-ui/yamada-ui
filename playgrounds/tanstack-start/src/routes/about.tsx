import { createFileRoute } from "@tanstack/react-router"
import { Heading, Text, VStack } from "@yamada-ui/react"

export const Route = createFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <VStack align="flex-start" gap="md" p="lg">
      <Heading>About</Heading>
      <Text>This is the about page.</Text>
    </VStack>
  )
}
