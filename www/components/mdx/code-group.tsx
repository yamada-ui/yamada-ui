import type { Dict } from "@yamada-ui/react"
import type { ReactNode } from "react"
import { Tabs } from "@yamada-ui/react"
import { Children, isValidElement } from "react"

export interface CodeGroupProps {
  children: ReactNode
  ids: string
}

export function CodeGroup({ children, ids }: CodeGroupProps) {
  const tabs = ids.split(",")

  return (
    <Tabs.Root size="sm" variant="subtle" gap="0">
      <Tabs.List
        bg="bg.panel"
        borderBottomWidth="1px"
        borderColor="border"
        color="fg.emphasized"
        gap="xs"
        h="12"
        px="md"
        role="tablist"
        roundedTop="l2"
      >
        {tabs.map((tab, index) => (
          <Tabs.Tab
            key={tab}
            fontFamily="mono"
            index={index}
            lineHeight="{sizes.6}"
            minH="6"
            px="sm"
            py="0"
            _selected={{ layerStyle: "surface" }}
          >
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {Children.map(children, (child, index) => {
        if (!isValidElement<Dict>(child)) return null

        return (
          <Tabs.Panel
            css={{ "& > div": { m: "0", roundedTop: "0" } }}
            index={index}
          >
            {child}
          </Tabs.Panel>
        )
      })}
    </Tabs.Root>
  )
}
