import { defineComponentStyle } from "../../core"

export const closeButtonStyle = defineComponentStyle({
  defaultProps: {
    size: "xs",
    variant: "ghost",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
