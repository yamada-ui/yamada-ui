import type { CSSUIObject } from "@yamada-ui/core"
import type { Dispatch, SetStateAction } from "react"
import type { TabsOptions } from "./tabs"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"

export const {
  DescendantsContextProvider: TabDescendantsContextProvider,
  useDescendant: useTabDescendant,
  useDescendants: useTabDescendants,
  useDescendantsContext: useTabDescendantsContext,
} = createDescendant<HTMLButtonElement>()

export const {
  DescendantsContextProvider: TabPanelDescendantsContextProvider,
  useDescendant: useTabPanelDescendant,
  useDescendants: useTabPanelDescendants,
  useDescendantsContext: useTabPanelDescendantsContext,
} = createDescendant<HTMLDivElement>()

interface TabsContext
  extends Omit<TabsOptions, "defaultIndex" | "index" | "onChange"> {
  disableRipple: boolean
  focusedIndex: number
  selectedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  setSelectedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [TabsProvider, useTabsContext] = createContext<TabsContext>({
  name: "TabsContext",
  errorMessage: `useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`,
})

export const [TabPanelProvider, useTabPanelContext] = createContext<{
  index: number
  selected: boolean
  selectedIndex: number
}>({})
