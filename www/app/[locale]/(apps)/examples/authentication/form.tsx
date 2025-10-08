import type { CenterProps } from "@yamada-ui/react"
import {
  Box,
  Button,
  Center,
  GithubIcon,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "@yamada-ui/react"

export interface FormProps extends CenterProps {}

export function Form({ ...rest }: FormProps) {
  return (
    <Center as="section" p="{space}" position="relative" {...rest}>
      <Button variant="ghost" position="absolute" right="{space}" top="{space}">
        Login
      </Button>

      <VStack alignItems="stretch" maxW="md">
        <VStack alignItems="center" gap="sm">
          <Heading as="h3" size="3xl">
            Create an account
          </Heading>

          <Text color="fg.muted" fontSize="sm">
            Enter your email below to create your account
          </Text>
        </VStack>

        <VStack gap="md">
          <Input placeholder="name@example.com" />

          <Button>Sign In with Email</Button>
        </VStack>

        <Center position="relative">
          <Text
            bg="bg"
            color="fg.muted"
            display="inline-block"
            fontSize="sm"
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

        <Button variant="outline" startIcon={<GithubIcon />}>
          GitHub
        </Button>

        <Text
          color="fg.muted"
          fontSize="sm"
          textAlign="center"
          textWrap="balance"
        >
          By clicking continue, you agree to our <Link>Terms of Service</Link>{" "}
          and <Link>Privacy Policy</Link>.
        </Text>
      </VStack>
    </Center>
  )
}
