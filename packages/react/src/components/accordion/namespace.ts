import type {
  AccordionButtonProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionRootProps,
} from "./accordion"
import {
  AccordionButton,
  AccordionContext,
  AccordionItem,
  AccordionPanel,
  AccordionPropsContext,
  AccordionRoot,
  useAccordionContext,
  useAccordionPropsContext,
} from "./accordion"
import {
  AccordionDescendantsContext,
  AccordionItemContext,
  useAccordionDescendant,
  useAccordionDescendants,
  useAccordionItemContext,
} from "./use-accordion"

export {
  AccordionButton as Button,
  AccordionContext as Context,
  AccordionDescendantsContext as DescendantsContext,
  AccordionItem as Item,
  AccordionItemContext as ItemContext,
  AccordionPanel as Panel,
  AccordionPropsContext as PropsContext,
  AccordionRoot as Root,
  useAccordionContext as useContext,
  useAccordionDescendant as useDescendant,
  useAccordionDescendants as useDescendants,
  useAccordionItemContext as useItemContext,
  useAccordionPropsContext as usePropsContext,
}
export type {
  AccordionButtonProps as ButtonProps,
  AccordionItemProps as ItemProps,
  AccordionPanelProps as PanelProps,
  AccordionRootProps as RootProps,
}
