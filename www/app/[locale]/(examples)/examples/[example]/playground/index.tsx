import { Card, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Editor } from "./editor"
import { Footer } from "./footer"
import { Header } from "./header"

export const Playground = memo(() => {
  return (
    <Card.Root bg="bg.float">
      <VStack as="section" gap="0">
        <Header />
        <Editor />
        <Footer />
      </VStack>
    </Card.Root>
  )
})

Playground.displayName = "Playground"
