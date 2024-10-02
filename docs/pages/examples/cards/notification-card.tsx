import { Bell, EyeOff, User } from "@yamada-ui/lucide"
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export const NotificationsCard = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading size="md">Notifications</Heading>

        <Text color="muted">Choose what you want to be notified about.</Text>
      </CardHeader>

      <CardBody>
        <VStack gap="sm">
          <HStack
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
            cursor="pointer"
            p="md"
            rounded="md"
            w="full"
          >
            <Bell fontSize="2xl" />

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
            <User fontSize="2xl" />

            <VStack gap="xs">
              <Text>Available</Text>
              <Text color="muted">Only mentions and comments.</Text>
            </VStack>
          </HStack>

          <HStack
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
            cursor="pointer"
            p="md"
            rounded="md"
            w="full"
          >
            <EyeOff fontSize="2xl" />

            <VStack gap="xs">
              <Text>Ignoring</Text>
              <Text color="muted">Turn off all notifications.</Text>
            </VStack>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
})

NotificationsCard.displayName = "NotificationsCard"
