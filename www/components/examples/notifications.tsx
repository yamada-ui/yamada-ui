import { Heading, RadioCardGroup, Text, VStack } from "@yamada-ui/react"

export function Notifications() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <VStack gap="xs">
        <Heading as="h2" size="xl">
          Notifications
        </Heading>

        <Text color="fg.muted" fontSize="sm">
          Choose what you want to be notified about
        </Text>
      </VStack>

      <RadioCardGroup.Root
        colorScheme="primary"
        variant="outline"
        defaultValue="everything"
        items={[
          {
            bg: "bg",
            description: "Receive notifications for everything.",
            label: "Everything",
            value: "everything",
          },
          {
            bg: "bg",
            description: "Only mentions and comments",
            label: "Available",
            value: "available",
          },
          {
            bg: "bg",
            description: "Turn off notifications",
            label: "Ignoring",
            value: "ignoring",
          },
        ]}
        orientation="vertical"
      />
    </VStack>
  )
}
