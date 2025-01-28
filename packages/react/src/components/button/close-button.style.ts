import { defineComponentStyle } from "../../core"

export const closeButtonStyle = defineComponentStyle({
  defaultProps: {
    size: "sm",
    variant: "ghost",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
