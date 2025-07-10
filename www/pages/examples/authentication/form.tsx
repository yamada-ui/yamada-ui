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
import { GithubIcon } from "components/media-and-icons"
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
        variant="ghost"
        fontWeight="normal"
        position="absolute"
        right={{ base: "lg", sm: "md" }}
        top={{ base: "lg", sm: "md" }}
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
          variant="outline"
          borderColor="border"
          fontWeight="normal"
          leftIcon={<GithubIcon fontSize="0.875em" />}
        >
          GitHub
        </Button>

        <Text color="muted" fontSize="sm" textAlign="center">
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
