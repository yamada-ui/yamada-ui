import { defineComponentStyle } from "../../core"

export const visuallyHiddenStyle = defineComponentStyle({
  base: {
    border: "0",
    boxSize: "1px",
    clipPath: "rect(0px 0px 0px 0px)",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
  },
})

export type VisuallyHiddenStyle = typeof visuallyHiddenStyle
