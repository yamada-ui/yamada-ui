import type { Route } from "./+types/home"
import { VStack } from "@yamada-ui/react"
import { ColorModeButton } from "../components/color-mode-button"

export function meta(_: Route.MetaArgs) {
  return [
    { title: "React Router - Yamada UI" },
    {
      name: "description",
      content: "React Router playground configured with Yamada UI.",
    },
  ]
}

export default function Home() {
  return (
    <VStack align="flex-start" p="lg">
      <ColorModeButton />
    </VStack>
  )
}
