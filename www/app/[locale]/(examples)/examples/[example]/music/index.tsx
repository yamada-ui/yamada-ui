"use client"
import { Card, Resizable, useBoolean, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Content } from "./content"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

export const Music = memo(() => {
  const [isCollapse, { off, on }] = useBoolean()

  return (
    <Card.Root bg="bg.float">
      <VStack as="section" gap="0">
        <Header />

        <Resizable.Root>
          <Resizable.Item
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
          </Resizable.Item>

          <Resizable.Trigger />

          <Resizable.Item defaultSize={80}>
            <Content />
          </Resizable.Item>
        </Resizable.Root>
      </VStack>
    </Card.Root>
  )
})

Music.displayName = "Music"
