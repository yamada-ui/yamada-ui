import { defineComponentStyle } from "../../core"

export const visuallyHiddenStyle = defineComponentStyle({
  base: {
    layerStyle: "visuallyHidden",
  },
})

export type VisuallyHiddenStyle = typeof visuallyHiddenStyle
