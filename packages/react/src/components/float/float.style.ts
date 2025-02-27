import { defineComponentStyle } from "../../core"

export const floatStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    position: "absolute",
  },
})

export type FloatStyle = typeof floatStyle
