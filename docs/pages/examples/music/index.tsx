import {
  Resizable,
  ResizableItem,
  ResizableTrigger,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Content } from "./content"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

export const Music = memo(() => {
  const [isCollapse, { off, on }] = useBoolean()

  return (
    <VStack as="section" gap="0">
      <Header />

      <Resizable>
        <ResizableItem
          collapsedSize={4}
          collapsible
          defaultSize={20}
          maxSize={30}
          maxW={{ base: undefined, lg: "14" }}
          minSize={15}
          minW={{ base: isCollapse ? "14" : "56", lg: "14" }}
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
