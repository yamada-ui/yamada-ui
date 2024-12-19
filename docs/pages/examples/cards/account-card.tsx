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
  Separator,
  Text,
  VStack,
} from "@yamada-ui/react"
import { GithubIcon, XIcon } from "components/media-and-icons"
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
          <Button leftIcon={<GithubIcon boxSize="1.25rem" />} w="full">
            GitHub
          </Button>

          <Button leftIcon={<XIcon boxSize="1.25rem" />} w="full">
            X
          </Button>
        </ButtonGroup>

        <HStack w="full">
          <Separator />

          <Text color="muted" fontSize="sm" whiteSpace="nowrap">
            OR CONTINUE WITH
          </Text>

          <Separator />
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
