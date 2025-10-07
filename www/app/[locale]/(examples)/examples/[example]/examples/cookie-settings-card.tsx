import { Button, Card, Heading, Switch, Text } from "@yamada-ui/react"
import { memo } from "react"

export const CookieSettingsCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Cookie Settings
        </Heading>
        <Text color="muted">Manage your cookie settings here.</Text>
      </Card.Header>

      <Card.Body>
        <Switch defaultChecked reverse>
          <Text>Strictly Necessary</Text>
          <Text color="muted">
            These cookies are essential in order to use the website and use its
            features.
          </Text>
        </Switch>

        <Switch reverse>
          <Text>Functional Cookies</Text>
          <Text color="muted">
            These cookies allow the website to provide personalized
            functionality.
          </Text>
        </Switch>

        <Switch reverse>
          <Text>Performance Cookies</Text>
          <Text color="muted">
            These cookies help to improve the performance of the website.
          </Text>
        </Switch>
      </Card.Body>

      <Card.Footer>
        <Button colorScheme="primary" variant="outline" w="full">
          Save Preferences
        </Button>
      </Card.Footer>
    </Card.Root>
  )
})

CookieSettingsCard.displayName = "CookieSettingsCard"
