import { VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Editor } from "./editor"
import { Footer } from "./footer"
import { Header } from "./header"
// import { useI18n } from "contexts"

export const Playground = memo(() => {
  // const { t } = useI18n()

  return (
    <VStack as="section" gap="0">
      <Header />
      <Editor />
      <Footer />
    </VStack>
  )
})

Playground.displayName = "Playground"
