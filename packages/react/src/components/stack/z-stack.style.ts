import { defineComponentStyle } from "../../core"

export const zStackStyle = defineComponentStyle({
  base: {
    gap: "md",
    overflow: "hidden",
    position: "relative",
  },
})

export type ZStackStyle = typeof zStackStyle
