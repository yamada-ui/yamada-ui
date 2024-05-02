import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@yamada-ui/react"
import { Bell, EyeOff, User } from "lucide-react"
import { memo } from "react"

export const NotificationsCard = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading size="md">Notifications</Heading>

        <Text color="muted">Choose what you want to be notified about.</Text>
      </CardHeader>

      <CardBody>
        <VStack gap="sm">
          <HStack
            cursor="pointer"
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
            w="full"
            rounded="md"
            p="md"
          >
            <Icon as={Bell} size="2xl" />

            <VStack gap="xs">
              <Text>Everything</Text>
              <Text color="muted">Email digest, mentions & all activity.</Text>
            </VStack>
          </HStack>

          <HStack
            cursor="pointer"
            bg={["blackAlpha.50", "whiteAlpha.50"]}
            w="full"
            rounded="md"
            p="md"
          >
            <Icon as={User} size="2xl" />

            <VStack gap="xs">
              <Text>Available</Text>
              <Text color="muted">Only mentions and comments.</Text>
            </VStack>
          </HStack>

          <HStack
            cursor="pointer"
            _hover={{ bg: ["blackAlpha.50", "whiteAlpha.50"] }}
            w="full"
            rounded="md"
            p="md"
          >
            <Icon as={EyeOff} size="2xl" />

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
