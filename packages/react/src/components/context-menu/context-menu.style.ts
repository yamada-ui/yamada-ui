import { defineComponentSlotStyle } from "../../core"

export const contextMenuStyle = defineComponentSlotStyle({
  base: {
    anchor: {
      position: "absolute",
    },
    root: {},
    trigger: {},
  },
})

export type ContextMenuStyle = typeof contextMenuStyle
