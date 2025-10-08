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

export function CreateAccount() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      alignItems="stretch"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <VStack gap="xs">
        <Heading as="h2" size="xl">
          Create an account
        </Heading>

        <Text color="fg.muted" fontSize="sm">
          Enter your email below to create your account
        </Text>
      </VStack>

      <VStack gap="md">
        <Input placeholder="name@example.com" />

        <Button colorScheme="primary">Sign In with Email</Button>
      </VStack>

      <Center position="relative">
        <Text
          bg="bg.panel"
          color="fg.muted"
          display="inline-block"
          fontSize="sm"
          position="static"
          px="md"
          textTransform="uppercase"
          zIndex="1"
        >
          Or continue with
        </Text>

        <Box
          borderBottomWidth="1px"
          left="0"
          position="absolute"
          right="0"
          w="full"
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
        By clicking continue, you agree to our <Link>Terms of Service</Link> and{" "}
        <Link>Privacy Policy</Link>.
      </Text>
    </VStack>
  )
}
