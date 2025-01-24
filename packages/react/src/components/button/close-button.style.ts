import { defineComponentStyle } from "../../core"

export const closeButtonStyle = defineComponentStyle({
  sizes: {
    sm: {
      h: 6,
      minW: 6,
      fontSize: "md",
    },
    md: {
      h: 8,
      minW: 8,
      fontSize: "xl",
    },
    lg: {
      h: 10,
      minW: 10,
      fontSize: "2xl",
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
