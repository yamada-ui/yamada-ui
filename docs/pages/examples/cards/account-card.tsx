import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Heading,
  HStack,
  Input,
  Divider,
  Text,
  VStack,
} from "@yamada-ui/react"
import { Github, X } from "components/media-and-icons"
import { memo } from "react"

export const AccountCard = memo(() => {
  return (
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Create an account
        </Heading>

        <Text color="muted">
          Enter your email below to create your account.
        </Text>
      </CardHeader>

      <CardBody>
        <ButtonGroup variant="outline" gap="sm" w="full">
          <Button leftIcon={<Github boxSize="1.25rem" />} w="full">
            GitHub
          </Button>

          <Button leftIcon={<X boxSize="1.25rem" />} w="full">
            X
          </Button>
        </ButtonGroup>

        <HStack w="full">
          <Divider />

          <Text color="muted" fontSize="sm" whiteSpace="nowrap">
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
        <Button colorScheme="primary" w="full">
          Create account
        </Button>
      </CardFooter>
    </Card>
  )
})

AccountCard.displayName = "AccountCard"
