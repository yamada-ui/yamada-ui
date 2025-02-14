import { defineComponentStyle } from "../../core"

export const flexStyle = defineComponentStyle({
  base: {
    display: "flex",
  },
})

export type FlexStyle = typeof flexStyle
