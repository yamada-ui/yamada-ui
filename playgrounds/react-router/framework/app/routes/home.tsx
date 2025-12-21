import { VStack } from "@yamada-ui/react"
import { ColorModeButton } from "../components/color-mode-button"

export default function Home() {
  return (
    <VStack align="flex-start" p="lg">
      <ColorModeButton />
    </VStack>
  )
}
