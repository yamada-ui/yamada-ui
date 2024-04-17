import {
  Spacer,
  Text,
  Checkbox,
  VStack,
  Divider,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Switch,
} from "@yamada-ui/react"
import { memo } from "react"

const checkboxElements = [
  "All new messages",
  "Direct messages and mentions",
  "Nothing",
]

const cardElements = [
  {
    header: "Communication emails",
    body: "Receive emails about your account activity.",
  },
  {
    header: "Marketing emails",
    body: "Receive emails about new products, features, and more.",
  },
  {
    header: "Social emails",
    body: "Receive emails for friend requests, follows, and more.",
  },
  {
    header: "Security emails",
    body: "Receive emails about your account activity and security.",
  },
]

export const NotificationsForm = memo(() => {
  return (
    <VStack divider={<Divider />}>
      <>
        <Text as="h5" fontSize="xl">
          Notifications
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Configure how you receive notifications.
        </Text>
      </>
      <>
        <Text as="h6" fontSize="sm">
          Notify me about...
        </Text>
        {checkboxElements.map((checkboxElement, index) => (
          <Checkbox key={index}>{checkboxElement}</Checkbox>
        ))}
        <Spacer />
        <Text as="h6" fontSize="sm">
          Email Notifications
        </Text>

        {cardElements.map((cardElement, index) => (
          <Card key={index} variant="outline">
            <CardHeader>{cardElement.header}</CardHeader>
            <CardBody>
              <HStack>
                <Text as="p" color="muted" fontSize="xs">
                  {cardElement.body}
                </Text>
                <Switch />
              </HStack>
            </CardBody>
          </Card>
        ))}

        <Spacer />
        <HStack>
          <Checkbox />
          <VStack gap={0}>
            <Text>Use different settings for my mobile devices</Text>
            <Text as="p" color="muted" fontSize="xs">
              You can manage your mobile notifications in the mobile settings
              page.
            </Text>
          </VStack>
        </HStack>
      </>
    </VStack>
  )
})

NotificationsForm.displayName = "NotificationsForm"
