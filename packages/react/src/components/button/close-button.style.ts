import { defineComponentStyle } from "../../core"

export const closeButtonStyle = defineComponentStyle({
  sizes: {
    sm: {
      fontSize: "md",
      h: 6,
      minW: 6,
    },
    md: {
      fontSize: "xl",
      h: 8,
      minW: 8,
    },
    lg: {
      fontSize: "2xl",
      h: 10,
      minW: 10,
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
