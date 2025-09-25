import {
  Button,
  Card,
  Field,
  Heading,
  HStack,
  Input,
  Separator,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { XIcon } from "@/components"
import { GithubIcon } from "@/components/github-icon"

export const AccountCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Create an account
        </Heading>

        <Text color="muted">
          Enter your email below to create your account.
        </Text>
      </Card.Header>

      <Card.Body>
        <HStack gap="sm" w="full">
          <Button
            variant="outline"
            startIcon={<GithubIcon boxSize="1.25rem" />}
            w="full"
          >
            GitHub
          </Button>

          <Button
            variant="outline"
            startIcon={<XIcon boxSize="1.25rem" />}
            w="full"
          >
            X
          </Button>
        </HStack>

        <HStack w="full">
          <Separator />

          <Text color="muted" fontSize="sm" whiteSpace="nowrap">
            OR CONTINUE WITH
          </Text>

          <Separator />
        </HStack>

        <VStack w="full">
          <Field.Root label="Email" required>
            <Input type="email" placeholder="your email address" />
          </Field.Root>

          <Field.Root label="Password" required>
            <Input type="password" placeholder="your password" />
          </Field.Root>
        </VStack>
      </Card.Body>

      <Card.Footer>
        <Button colorScheme="primary" w="full">
          Create account
        </Button>
      </Card.Footer>
    </Card.Root>
  )
})

AccountCard.displayName = "AccountCard"
