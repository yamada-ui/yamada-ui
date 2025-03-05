import { defineComponentStyle } from "../../core"

export const linkOverlayStyle = defineComponentStyle({
  base: {
    outline: 0,
    _focusVisible: {
      _before: {
        boxShadow: "outline",
      },
    },
  },
})

export type LinkOverlayStyle = typeof linkOverlayStyle
