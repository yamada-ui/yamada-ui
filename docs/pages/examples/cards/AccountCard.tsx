import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  FormControl,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Github, Twitter } from "components/media-and-icons"

export const AccountCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="lg">Create an account</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">
          Enter your email below to create your account.
        </Text>
        <ButtonGroup variant="outline" gap={2} w="full">
          <Button disableRipple w="full">
            <Github />
            <Text>GitHub</Text>
          </Button>
          <Button disableRipple w="full">
            <Twitter />
            <Text>Twitter</Text>
          </Button>
        </ButtonGroup>
        <HStack w="full">
          <Divider />
          <Text whiteSpace="nowrap" fontSize="sm" color="muted">
            OR CONTINUE WITH
          </Text>
          <Divider />
        </HStack>
        <VStack w="full">
          <FormControl isRequired label="Email">
            <Input type="email" placeholder="your email address" />
          </FormControl>
          <FormControl isRequired label="Password">
            <Input type="password" placeholder="your password" />
          </FormControl>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button w="full">Create account</Button>
      </CardFooter>
    </Card>
  )
})

AccountCard.displayName = "AccountCard"
