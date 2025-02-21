import { defineComponentStyle } from "../../core"

export const emStyle = defineComponentStyle({
  base: {
    fontSize: "italic",
  },
})

export type EmStyle = typeof emStyle
