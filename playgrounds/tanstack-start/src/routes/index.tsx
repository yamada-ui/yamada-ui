import { createFileRoute } from "@tanstack/react-router"
import {
  Button,
  Heading,
  MoonIcon,
  SunIcon,
  Text,
  useColorMode,
  VStack,
} from "@yamada-ui/react"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack align="flex-start" gap="md" p="lg">
      <Heading>Home</Heading>
      <Text>Welcome to Yamada UI with TanStack Start.</Text>
      <Button
        startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? "Change to light" : "Change to dark"}
      </Button>
    </VStack>
  )
}
