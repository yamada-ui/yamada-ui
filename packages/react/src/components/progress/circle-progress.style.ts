import { defineComponentSlotStyle } from "../../core"

export const circleProgressStyle = defineComponentSlotStyle({
  base: {
    circle: {
      strokeWidth: "{thickness}",
    },
    label: {
      fontSize: "0.25em",
      left: "50%",
      position: "absolute",
      textAlign: "center",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
    root: {
      display: "inline-block",
      fontSize: "{boxSize}",
      position: "relative",
      verticalAlign: "middle",
    },
    shape: { display: "block" },
  },
})

export type CircleProgressStyle = typeof circleProgressStyle
