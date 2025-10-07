import {
  Button,
  MoonIcon,
  SunIcon,
  useColorMode,
  VStack,
} from "@yamada-ui/react"

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack align="flex-start" p="lg">
      <Button
        startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? "Change to light" : "Change to dark"}
      </Button>
    </VStack>
  )
}
