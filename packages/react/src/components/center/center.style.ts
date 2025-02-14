import { defineComponentStyle } from "../../core"

export const centerStyle = defineComponentStyle({
  base: {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
  },
})

export type CenterStyle = typeof centerStyle
