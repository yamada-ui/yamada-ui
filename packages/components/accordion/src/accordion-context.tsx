import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"
import type { Dispatch, SetStateAction } from "react"
import type { AccordionOptions } from "./accordion"
import type { AccordionItemOptions } from "./accordion-item"

export const {
  DescendantsContextProvider,
  useDescendants,
  useDescendant: useAccordionDescendant,
} = createDescendant<HTMLButtonElement>()

type AccordionContext = Pick<
  AccordionOptions,
  "isMultiple" | "isToggle" | "icon" | "iconHidden"
> & {
  index: number | number[]
  setIndex: Dispatch<SetStateAction<number | number[]>>
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject }
}

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
