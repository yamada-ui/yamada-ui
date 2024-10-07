import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Switch,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"

export const CookieSettingsCard = memo(() => {
  return (
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Cookie Settings
        </Heading>
        <Text color="muted">Manage your cookie settings here.</Text>
      </CardHeader>

      <CardBody>
        <Switch defaultIsChecked isReverse>
          <Text>Strictly Necessary</Text>
          <Text color="muted">
            These cookies are essential in order to use the website and use its
            features.
          </Text>
        </Switch>

        <Switch isReverse>
          <Text>Functional Cookies</Text>
          <Text color="muted">
            These cookies allow the website to provide personalized
            functionality.
          </Text>
        </Switch>

        <Switch isReverse>
          <Text>Performance Cookies</Text>
          <Text color="muted">
            These cookies help to improve the performance of the website.
          </Text>
        </Switch>
      </CardBody>

      <CardFooter>
        <Button colorScheme="primary" variant="outline" w="full">
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
})

CookieSettingsCard.displayName = "CookieSettingsCard"
