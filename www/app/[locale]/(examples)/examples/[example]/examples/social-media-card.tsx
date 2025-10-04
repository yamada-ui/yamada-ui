import { Avatar, Button, Card, HStack, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

export const SocialMediaCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header
        alignItems={{ base: "center", sm: "flex-start" }}
        flexDirection={{ base: "row", sm: "column" }}
      >
        <HStack flex="1">
          <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" />

          <VStack gap={0}>
            <Text as="h2" fontWeight="semibold" lineClamp={1}>
              Hirotomo Yamada
            </Text>
            <Text color="muted" lineClamp={1}>
              @hirotomoyamada
            </Text>
          </VStack>
        </HStack>

        <Button
          colorScheme="primary"
          size="sm"
          px="normal"
          rounded="full"
          w={{ base: undefined, sm: "full" }}
        >
          Follow
        </Button>
      </Card.Header>

      <Card.Body>
        <Text color="muted">
          UI Designer & Developer / Currently planning & producing Yamada UI,
          Yamada Colors / Contributing Next.js, Chakra UI, Mantine, Refine
        </Text>
      </Card.Body>

      <Card.Footer>
        <Text color="muted">
          <Text as="span" fontWeight="semibold" me="xs">
            200
          </Text>
          Following
        </Text>

        <Text color="muted">
          <Text as="span" fontWeight="semibold" me="xs">
            6000
          </Text>
          Followers
        </Text>
      </Card.Footer>
    </Card.Root>
  )
})

SocialMediaCard.displayName = "SocialMediaCard"
