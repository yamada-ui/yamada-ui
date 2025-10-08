import { Avatar, Button, Heading, HStack, Text, VStack } from "@yamada-ui/react"

export function SocialMedia() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <HStack>
        <HStack flex="1" gap="sm">
          <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" />

          <VStack gap={0}>
            <Heading as="h2" size="md" lineClamp={1}>
              Hirotomo Yamada
            </Heading>

            <Text color="fg.muted" fontSize="sm" lineClamp={1}>
              @hirotomoyamada
            </Text>
          </VStack>
        </HStack>

        <Button
          colorScheme="primary"
          size="sm"
          fullRounded
          w={{ base: undefined, sm: "full" }}
        >
          Follow
        </Button>
      </HStack>

      <Text color="fg.muted" fontSize="sm">
        UI Designer & Developer / Currently planning & producing Yamada UI,
        Yamada Colors / Contributing Next.js, Storybook, Chakra UI, Mantine,
        Motion, Refine
      </Text>

      <HStack gap="sm">
        <Text color="fg.muted">
          <Text as="span" color="fg" fontWeight="semibold" me="xs">
            818
          </Text>
          Following
        </Text>

        <Text color="fg.muted">
          <Text as="span" color="fg" fontWeight="semibold" me="xs">
            {(530000).toLocaleString()}
          </Text>
          Followers
        </Text>
      </HStack>
    </VStack>
  )
}
