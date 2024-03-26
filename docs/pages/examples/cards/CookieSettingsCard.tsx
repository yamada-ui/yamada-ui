import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Switch,
} from "@yamada-ui/react"
import { memo } from "react"

export const CookieSettingsCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Cookie Settings</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">Manage your cookie settings here.</Text>
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
        <Button w="full" variant="outline">
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
})

CookieSettingsCard.displayName = "CookieSettingsCard"
