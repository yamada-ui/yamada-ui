import { defineComponentSlotStyle } from "../../core"

export const linkBoxStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      outline: 0,
      _focusVisible: {
        _before: {
          boxShadow: "outline",
        },
      },
    },
    root: {},
  },
})

export type LinkBoxStyle = typeof linkBoxStyle
