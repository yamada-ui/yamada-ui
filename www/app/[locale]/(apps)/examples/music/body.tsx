"use client"

import { Resizable, useBreakpointEffect } from "@yamada-ui/react"
import { useRef, useState } from "react"
import { Content } from "./content"
import { Sidebar } from "./sidebar"

export function Body() {
  const controlRef = useRef<Resizable.ItemControl>(null)
  const [collapsible, setCollapsible] = useState(false)

  useBreakpointEffect((breakpoint) => {
    if (["2xl", "base", "xl"].includes(breakpoint)) {
      setCollapsible(true)
    } else {
      setCollapsible(false)
      controlRef.current?.collapse()
    }
  }, [])

  return (
    <Resizable.Root>
      <Resizable.Item
        collapsedSize={52}
        collapsible
        containerType="size"
        controlRef={controlRef}
        defaultSize={52}
        maxSize="20%"
        minSize="10%"
      >
        <Sidebar />
      </Resizable.Item>

      <Resizable.Trigger
        disabled={!collapsible}
        _disabled={{ cursor: "auto!" }}
      />

      <Resizable.Item>
        <Content />
      </Resizable.Item>
    </Resizable.Root>
  )
}
