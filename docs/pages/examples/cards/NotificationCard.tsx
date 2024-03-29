import { faBell, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
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
            <FontAwesomeIcon icon={faBell} size="xl" />

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
            <FontAwesomeIcon icon={faUser} size="xl" />

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
            <FontAwesomeIcon icon={faEyeSlash} size="xl" />

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
