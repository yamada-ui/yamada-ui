"use client"

import { Resizable, useBoolean } from "@yamada-ui/react"
import { Content } from "./content"
import { Sidebar } from "./sidebar"

export function Body() {
  const [collapsed, { off, on }] = useBoolean()

  return (
    <Resizable.Root>
      <Resizable.Item
        collapsedSize={4}
        collapsible
        defaultSize={15}
        maxSize={20}
        maxW={{ base: undefined, lg: "14" }}
        minSize={10}
        minW={{ base: collapsed ? "10" : "48", lg: "10" }}
        onCollapse={on}
        onExpand={off}
      >
        <Sidebar collapsed={collapsed} />
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item defaultSize={80}>
        <Content />
      </Resizable.Item>
    </Resizable.Root>
  )
}
