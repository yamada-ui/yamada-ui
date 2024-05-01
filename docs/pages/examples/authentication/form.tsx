import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "@yamada-ui/react"
import type { BoxProps } from "@yamada-ui/react"
import { Github } from "components/media-and-icons"
import { memo } from "react"
import type { FC } from "react"

export type FormProps = BoxProps & {}

export const Form: FC<FormProps> = memo(({ ...rest }) => {
  return (
    <Center
      as="section"
      position="relative"
      p={{ base: "lg", sm: "md" }}
      {...rest}
    >
      <Button
        variant="ghost"
        position="absolute"
        top={{ base: "lg", sm: "md" }}
        right={{ base: "lg", sm: "md" }}
        fontWeight="normal"
      >
        Login
      </Button>

      <VStack maxW="md" alignItems="stretch" gap="normal">
        <VStack alignItems="center" gap={{ base: "sm", sm: "0" }}>
          <Heading as="h3" size="lg">
            Create an account
          </Heading>

          <Text fontSize="sm" color="muted">
            Enter your email below to create your account
          </Text>
        </VStack>

        <VStack>
          <Input placeholder="name@example.com" />

          <Button colorScheme="primary" fontWeight="normal">
            Sign In with Email
          </Button>
        </VStack>

        <Center position="relative">
          <Text
            display="inline-block"
            px="md"
            bg={["white", "black"]}
            fontSize="xs"
            color="muted"
            textTransform="uppercase"
          >
            Or continue with
          </Text>

          <Box
            position="absolute"
            zIndex="-1"
            left="0"
            right="0"
            w="full"
            borderBottomWidth="1px"
          />
        </Center>

        <Button
          variant="outline"
          borderColor="border"
          fontWeight="normal"
          leftIcon={<Github fontSize="0.875em" />}
        >
          GitHub
        </Button>

        <Text fontSize="sm" textAlign="center" color="muted">
          By clicking continue, you agree to our{" "}
          <Link
            color="muted"
            textDecoration="underline"
            _hover={{ color: ["black", "white"] }}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            color="muted"
            textDecoration="underline"
            _hover={{ color: ["black", "white"] }}
          >
            Privacy Policy
          </Link>
          .
        </Text>
      </VStack>
    </Center>
  )
})

Form.displayName = "Form"
