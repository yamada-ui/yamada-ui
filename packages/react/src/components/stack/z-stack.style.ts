import { defineComponentStyle } from "../../core"

export const zStackStyle = defineComponentStyle({
  base: {
    gap: "lg",
    overflow: "hidden",
    position: "relative",
  },
})

export type ZStackStyle = typeof zStackStyle
