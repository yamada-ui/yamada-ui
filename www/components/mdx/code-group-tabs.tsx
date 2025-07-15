"use client"

import type { BoxProps, GridProps } from "@yamada-ui/react"
import { Box, createContext, Grid, HStack, Tag } from "@yamada-ui/react"
import { useId, useMemo, useState } from "react"

const [CodeGroupTabsContext, useCodeGroupTabsContext] = createContext<{
  selectedId: string
  uuid: string
}>({ name: "CodeGroupTabs" })

export interface CodeGroupTabsProps extends GridProps {
  tabs: string[]
}

export function CodeGroupTabs({ children, tabs, ...rest }: CodeGroupTabsProps) {
  const uuid = useId()
  const [selectedId, setSelectedId] = useState(tabs[0]!)
  const context = useMemo(() => ({ selectedId, uuid }), [selectedId, uuid])

  return (
    <CodeGroupTabsContext value={context}>
      <Grid
        css={{ "& div:not([role='tablist'])": { m: "0", roundedTop: "0" } }}
        {...rest}
      >
        <HStack
          bg="bg.panel"
          borderBottomWidth="1px"
          borderColor="border.subtle"
          color="fg.emphasized"
          gap="1"
          h="12"
          px="4"
          role="tablist"
          roundedTop="l2"
        >
          {tabs.map((id) => (
            <Tag
              id={id}
              key={id}
              as="button"
              type="button"
              variant={{ base: "plain", _selected: "surface" }}
              aria-controls={`${uuid}-${id}`}
              aria-selected={selectedId === id}
              cursor="pointer"
              role="tab"
              transitionDuration="moderate"
              transitionProperty="common"
              onClick={() => setSelectedId(id)}
            >
              {id}
            </Tag>
          ))}
        </HStack>

        {children}
      </Grid>
    </CodeGroupTabsContext>
  )
}

export interface CodeGroupPanelProps extends BoxProps {
  id: string
}

export function CodeGroupPanel({ id, ...rest }: CodeGroupPanelProps) {
  const { selectedId, uuid } = useCodeGroupTabsContext()

  return (
    <Box
      id={`${uuid}-${id}`}
      aria-labelledby={id}
      hidden={selectedId !== id}
      role="tabpanel"
      {...rest}
    />
  )
}
