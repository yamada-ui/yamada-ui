import type { BoxProps } from "@yamada-ui/react"
import type { FC } from "react"
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
import { Github } from "components/media-and-icons"
import { memo } from "react"

export interface FormProps extends BoxProps {}

export const Form: FC<FormProps> = memo(({ ...rest }) => {
  return (
    <Center
      as="section"
      p={{ base: "lg", sm: "md" }}
      position="relative"
      {...rest}
    >
      <Button
        fontWeight="normal"
        position="absolute"
        right={{ base: "lg", sm: "md" }}
        top={{ base: "lg", sm: "md" }}
        variant="ghost"
      >
        Login
      </Button>

      <VStack alignItems="stretch" gap="normal" maxW="md">
        <VStack alignItems="center" gap={{ base: "sm", sm: "0" }}>
          <Heading as="h3" size="lg">
            Create an account
          </Heading>

          <Text color="muted" fontSize="sm">
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
            bg={["white", "black"]}
            color="muted"
            display="inline-block"
            fontSize="xs"
            px="md"
            textTransform="uppercase"
          >
            Or continue with
          </Text>

          <Box
            borderBottomWidth="1px"
            left="0"
            position="absolute"
            right="0"
            w="full"
            zIndex="-1"
          />
        </Center>

        <Button
          borderColor="border"
          fontWeight="normal"
          leftIcon={<Github fontSize="0.875em" />}
          variant="outline"
        >
          GitHub
        </Button>

        <Text color="muted" fontSize="sm" textAlign="center">
          By clicking continue, you agree to our{" "}
          <Link
            _hover={{ color: ["black", "white"] }}
            color="muted"
            textDecoration="underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            _hover={{ color: ["black", "white"] }}
            color="muted"
            textDecoration="underline"
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
