import { Resizable, VStack } from "@yamada-ui/react"
import { ColorModeButton } from "./color-mode-button"

export default function Home() {
  return (
    <VStack align="flex-start" p="lg">
      <ColorModeButton />

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </VStack>
  )
}
