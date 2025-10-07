import type { BoxProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Box,
  Button,
  Center,
  GithubIcon,
  Heading,
  Input,
  Link,
  Text,
 VStack } from "@yamada-ui/react"
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

      <VStack alignItems="stretch" gap="lg" maxW="md">
        <VStack alignItems="center" gap="sm">
          <Heading as="h3" size="3xl">
            Create an account
          </Heading>

          <Text fontSize="sm">
            Enter your email below to create your account
          </Text>
        </VStack>

        <VStack gap="md">
          <Input placeholder="name@example.com" />

          <Button colorScheme="primary" fontWeight="normal">
            Sign In with Email
          </Button>
        </VStack>

        <Center position="relative">
          <Text
            bg={["white", "black"]}
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
          startIcon={<GithubIcon boxSize="0.875em" />}
        >
          GitHub
        </Button>

        <Text fontSize="sm" textAlign="center">
          By clicking continue, you agree to our{" "}
          <Link colorScheme="primary" textDecoration="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link colorScheme="primary" textDecoration="underline">
            Privacy Policy
          </Link>
          .
        </Text>
      </VStack>
    </Center>
  )
})

Form.displayName = "Form"
