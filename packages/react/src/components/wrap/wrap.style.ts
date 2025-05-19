import { defineComponentStyle } from "../../core"

export const wrapStyle = defineComponentStyle({
  base: {
    flexWrap: "wrap",
  },
})

export type WrapStyle = typeof wrapStyle
