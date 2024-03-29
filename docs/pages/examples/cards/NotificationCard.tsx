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
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Notifications</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">Choose what you want to be notified about.</Text>
        <VStack gap={2}>
          <HStack
            _hover={{ bg: ["gray.100", "gray.800"] }}
            w="full"
            rounded="md"
            p={4}
          >
            <FontAwesomeIcon icon={faBell} size="xl" />
            <VStack gap={1}>
              <Text>Everything</Text>
              <Text color="muted">Email digest, mentions & all activity.</Text>
            </VStack>
          </HStack>
          <HStack bg={["gray.100", "gray.800"]} w="full" rounded="md" p={4}>
            <FontAwesomeIcon icon={faUser} size="xl" />
            <VStack gap={1}>
              <Text>Available</Text>
              <Text color="muted">Only mentions and comments.</Text>
            </VStack>
          </HStack>
          <HStack
            _hover={{ bg: ["gray.50", "gray.800"] }}
            w="full"
            rounded="md"
            p={4}
          >
            <FontAwesomeIcon icon={faEyeSlash} size="xl" />
            <VStack gap={1}>
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
