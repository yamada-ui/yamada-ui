import { defineComponentSlotStyle } from "../../core"

export const alphaSliderStyle = defineComponentSlotStyle({
  base: {
    root: {
      "--checkers-bg": ["colors.whiteAlpha.500", "colors.blackAlpha.500"],
      "--checkers-fg": ["colors.blackAlpha.300", "colors.whiteAlpha.300"],
    },
  },
})

export type AlphaSliderStyle = typeof alphaSliderStyle
