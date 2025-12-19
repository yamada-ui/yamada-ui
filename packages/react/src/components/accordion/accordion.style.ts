import { defineComponentSlotStyle } from "../../core"
import { nativeAccordionStyle } from "../native-accordion"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    ...nativeAccordionStyle.base,
    button: {
      ...nativeAccordionStyle.base?.button,
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      display: "inline-flex",
      focusVisibleRing: "inside",
      w: "100%",
    },
    panel: {
      ...nativeAccordionStyle.base?.panel,
      pb: "3",
    },
  },

  variants: nativeAccordionStyle.variants,

  defaultProps: {
    variant: "plain",
  },
})

export type AccordionStyle = typeof accordionStyle
