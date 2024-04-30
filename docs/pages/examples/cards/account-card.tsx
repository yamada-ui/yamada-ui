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
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          Create an account
        </Heading>

        <Text color="muted">
          Enter your email below to create your account.
        </Text>
      </CardHeader>

      <CardBody>
        <ButtonGroup variant="outline" gap="sm" w="full">
          <Button w="full" leftIcon={<Github />}>
            GitHub
          </Button>

          <Button w="full" leftIcon={<Twitter />}>
            Twitter
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
        <Button w="full" colorScheme="primary">
          Create account
        </Button>
      </CardFooter>
    </Card>
  )
})

AccountCard.displayName = "AccountCard"
