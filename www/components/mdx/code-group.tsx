import type { Dict } from "@yamada-ui/react"
import type { ReactNode } from "react"
import { Children, isValidElement } from "react"
import { CodeGroupPanel, CodeGroupTabs } from "./code-group-tabs"

export interface CodeGroupProps {
  children: ReactNode
  ids: string
}

export function CodeGroup({ children, ids }: CodeGroupProps) {
  const tabs = ids.split(",")

  const clonedChildren = Children.map(children, (child, index) => {
    if (!isValidElement<Dict>(child)) return null

    return <CodeGroupPanel id={tabs[index]!}>{child}</CodeGroupPanel>
  })

  return <CodeGroupTabs tabs={tabs}>{clonedChildren}</CodeGroupTabs>
}
