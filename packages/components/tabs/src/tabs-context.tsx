import type { CSSUIObject } from "@yamada-ui/core"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"
import type { Dispatch, SetStateAction } from "react"
import type { TabsOptions } from "./tabs"

export const {
  DescendantsContextProvider,
  useDescendantsContext: useTabsDescendantsContext,
  useDescendants,
  useDescendant: useTabsDescendant,
} = createDescendant<HTMLButtonElement>()

type TabsContext = Omit<TabsOptions, "index" | "defaultIndex" | "onChange"> & {
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject }
  disableRipple: boolean
}

export const [TabsProvider, useTabsContext] = createContext<TabsContext>({
  name: "TabsContext",
  errorMessage: `useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`,
})

export const [TabPanelProvider, useTabPanelContext] = createContext<{
  isSelected: boolean
  selectedIndex: number
}>({})
