import { defineComponentStyle } from "../../core"

export const iconStyle = defineComponentStyle({
  base: {
    boxSize: "1em",
    color: "currentColor",
    display: "inline-block",
    flexShrink: 0,
    lineHeight: "1em",
  },
})

export type IconStyle = typeof iconStyle
