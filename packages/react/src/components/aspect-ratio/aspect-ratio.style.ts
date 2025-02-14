import { defineComponentStyle } from "../../core"

export const aspectRatioStyle = defineComponentStyle({
  base: {
    "& > *:not(style)": {
      alignItems: "center",
      bottom: "0",
      display: "flex",
      h: "100%",
      justifyContent: "center",
      left: "0",
      overflow: "hidden",
      position: "absolute",
      right: "0",
      top: "0",
      w: "100%",
    },
    "& > img, & > video": {
      objectFit: "cover",
    },
    position: "relative",
  },
})

export type AspectRatioStyle = typeof aspectRatioStyle
