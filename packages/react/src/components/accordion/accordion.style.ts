import { defineComponentSlotStyle } from "../../core"
import { nativeAccordionStyle } from "../native-accordion"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    ...nativeAccordionStyle.base,
    button: {
      ...nativeAccordionStyle.base?.button,
      "&[aria-disabled=true]": { cursor: "default" },
    },
    icon: {
      ...nativeAccordionStyle.base?.icon,
      _expanded: { transform: "rotate(180deg)" },
    },
    panel: { ...nativeAccordionStyle.base?.panel, pb: "3" },
  },

  variants: nativeAccordionStyle.variants,

  defaultProps: {
    variant: "plain",
  },
})

export type AccordionStyle = typeof accordionStyle
