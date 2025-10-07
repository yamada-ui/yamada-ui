import {
  BellIcon,
  Card,
  EyeOffIcon,
  Heading,
  HStack,
  Text,
  UserIcon,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export const NotificationsCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading size="md">Notifications</Heading>

        <Text color="muted">Choose what you want to be notified about.</Text>
      </Card.Header>

      <Card.Body>
        <VStack gap="sm">
          <HStack
            cursor="pointer"
            p="md"
            rounded="md"
            w="full"
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
          >
            <BellIcon fontSize="2xl" />

            <VStack gap="xs">
              <Text>Everything</Text>
              <Text color="muted">Email digest, mentions & all activity.</Text>
            </VStack>
          </HStack>

          <HStack
            bg={["blackAlpha.50", "whiteAlpha.50"]}
            cursor="pointer"
            p="md"
            rounded="md"
            w="full"
          >
            <UserIcon fontSize="2xl" />

            <VStack gap="xs">
              <Text>Available</Text>
              <Text color="muted">Only mentions and comments.</Text>
            </VStack>
          </HStack>

          <HStack
            cursor="pointer"
            p="md"
            rounded="md"
            w="full"
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
          >
            <EyeOffIcon fontSize="2xl" />

            <VStack gap="xs">
              <Text>Ignoring</Text>
              <Text color="muted">Turn off all notifications.</Text>
            </VStack>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
})

NotificationsCard.displayName = "NotificationsCard"
