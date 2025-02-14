import { defineComponentStyle } from "../../core"

export const rippleStyle = defineComponentStyle({
  base: {
    rounded: "full",
    zIndex: "kurillin",
  },
})

export type RippleStyle = typeof rippleStyle
