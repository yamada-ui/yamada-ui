import type { Dispatch, SetStateAction } from "react"
import type { CSSUIObject, PropGetter } from "../../core"
import type { AccordionOptions } from "./accordion"
import type { AccordionItemOptions } from "./accordion-item"
import { createDescendant } from "../../hooks/use-descendant"
import { createContext } from "../../utils"

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
  styles: { [key: string]: CSSUIObject | undefined }
} & Pick<AccordionOptions, "icon" | "iconHidden" | "multiple" | "toggle">

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    errorMessage: `useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`,
  })

interface AccordionItemContext extends Omit<AccordionItemOptions, "children"> {
  open: boolean
  getLabelProps: PropGetter<"button">
  getPanelProps: PropGetter
}

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
    errorMessage: `useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`,
  })
