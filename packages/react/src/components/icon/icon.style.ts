import { defineComponentStyle } from "../../core"

export const iconStyle = defineComponentStyle({
  base: {
    color: "currentColor",
    display: "inline-block",
    flexShrink: 0,
    fontSize: "1em",
    lineHeight: "1em",
  },
})

export type IconStyle = typeof iconStyle
