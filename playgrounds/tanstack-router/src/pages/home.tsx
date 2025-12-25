import {
  Button,
  Heading,
  MoonIcon,
  SunIcon,
  Text,
  useColorMode,
  VStack,
} from "@yamada-ui/react"

export function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack align="flex-start" gap="md">
      <Heading>Home</Heading>
      <Text>Welcome to Yamada UI with TanStack Router.</Text>
      <Button
        startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? "Change to light" : "Change to dark"}
      </Button>
    </VStack>
  )
}
