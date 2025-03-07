import { createDescendant } from "../../hooks/use-descendant"
import { createContext } from "../../utils"

export const {
  DescendantsContext: TabDescendantsContext,
  useDescendant: useTabDescendant,
  useDescendants: useTabDescendants,
  useDescendantsContext: useTabDescendantsContext,
} = createDescendant<HTMLButtonElement>()

export const {
  DescendantsContext: TabPanelDescendantsContext,
  useDescendant: useTabPanelDescendant,
  useDescendants: useTabPanelDescendants,
  useDescendantsContext: useTabPanelDescendantsContext,
} = createDescendant<HTMLDivElement>()

export const [TabPanelContext, useTabPanelContext] = createContext<{
  index: number
  selected: boolean
  selectedIndex: number
}>({})
