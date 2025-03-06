import { defineComponentSlotStyle } from "../../core"

export const linkBoxStyle = defineComponentSlotStyle({
  base: {
    container: {},
    overlay: {
      outline: 0,
      _focusVisible: {
        _before: {
          boxShadow: "outline",
        },
      },
    },
  },
})

export type LinkBoxStyle = typeof linkBoxStyle
