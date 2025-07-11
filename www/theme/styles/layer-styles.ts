import type { LayerStyles } from "@yamada-ui/react"

export const layerStyles: LayerStyles = {
  masterRoshi: {
    bg: "#FFF",
    border: "6px solid #000",
    boxSize: "4xs",
    color: "#000",
    fontFamily: "serif",
    fontSize: "8xl",
    fontWeight: "bold",
    m: "md",
    position: "relative",
    rounded: "full",
    _after: {
      bg: "#FF7F0B",
      boxSize: "3xs",
      content: '""',
      left: "50%",
      position: "absolute",
      rounded: "md",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
  },
}
