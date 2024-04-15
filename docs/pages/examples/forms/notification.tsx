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
        <Checkbox>All new messages</Checkbox>
        <Checkbox>Direct messages and mentions</Checkbox>
        <Checkbox>Nothing</Checkbox>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Email Notifications
        </Text>
        <Card variant="outline">
          <CardHeader>Communication emails</CardHeader>
          <CardBody>
            <HStack>
              <Text as="p" color="muted" fontSize="xs">
                Receive emails about your account activity.
              </Text>
              <Switch />
            </HStack>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>Marketing emails</CardHeader>
          <CardBody>
            <HStack>
              <Text as="p" color="muted" fontSize="xs">
                Receive emails about new products, features, and more.
              </Text>
              <Switch />
            </HStack>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>Social emails</CardHeader>
          <CardBody>
            <HStack>
              <Text as="p" color="muted" fontSize="xs">
                Receive emails for friend requests, follows, and more.
              </Text>
              <Switch />
            </HStack>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>Security emails</CardHeader>
          <CardBody>
            <HStack>
              <Text as="p" color="muted" fontSize="xs">
                Receive emails about your account activity and security.
              </Text>
              <Switch />
            </HStack>
          </CardBody>
        </Card>
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
