import { defineComponentSlotStyle } from "../../core"
import { nativePopoverStyle } from "../native-popover"

export const popoverStyle = defineComponentSlotStyle({
  base: {
    ...nativePopoverStyle.base,
    positioner: { zIndex: "recoome" },
  },

  sizes: nativePopoverStyle.sizes,

  defaultProps: {
    size: "md",
  },
})

export type PopoverStyle = typeof popoverStyle
