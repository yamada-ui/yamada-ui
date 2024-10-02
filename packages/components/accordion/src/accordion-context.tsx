import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import type { Dispatch, SetStateAction } from "react"
import type { AccordionOptions } from "./accordion"
import type { AccordionItemOptions } from "./accordion-item"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"

export const {
  DescendantsContextProvider,
  useDescendant: useAccordionDescendant,
  useDescendants,
} = createDescendant<HTMLButtonElement>()

type AccordionContext = {
  focusedIndex: number
  index: number | number[]
  setFocusedIndex: Dispatch<SetStateAction<number>>
  setIndex: Dispatch<SetStateAction<number | number[]>>
  styles: { [key: string]: CSSUIObject }
} & Pick<AccordionOptions, "icon" | "iconHidden" | "isMultiple" | "isToggle">

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    errorMessage: `useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`,
  })

interface AccordionItemContext extends Omit<AccordionItemOptions, "children"> {
  isOpen: boolean
  getLabelProps: PropGetter<"button">
  getPanelProps: PropGetter
}

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
    errorMessage: `useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`,
  })
