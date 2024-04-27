import {
  useBoolean,
  Resizable,
  ResizableItem,
  ResizableTrigger,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Content } from "./content"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

export const Music = memo(() => {
  const [isCollapse, { on, off }] = useBoolean()

  return (
    <VStack as="section" gap="0">
      <Header />

      <Resizable>
        <ResizableItem
          defaultSize={20}
          collapsedSize={4}
          collapsible
          minSize={15}
          maxSize={30}
          minW={{ base: isCollapse ? "14" : "56", lg: "14" }}
          maxW={{ base: undefined, lg: "14" }}
          onCollapse={on}
          onExpand={off}
        >
          <Sidebar isCollapse={isCollapse} />
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem defaultSize={80}>
          <Content />
        </ResizableItem>
      </Resizable>
    </VStack>
  )
})

Music.displayName = "Music"
