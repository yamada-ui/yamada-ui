import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const linkBoxStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      focusVisibleRing: "none",
      position: "static",
      _before: {
        boxSize: "full",
        cursor: "inherit",
        display: "block",
        inset: "0",
        position: "absolute",
        zIndex: "0",
      },
      _focusVisible: {
        _before: {
          ...focusRingStyle.outline,
        },
      },
    },
    root: {
      "a[href]:not([data-link-box-overlay]), abbr[title]": {
        position: "relative",
        zIndex: "yamcha",
      },
      position: "relative",
    },
  },
})

export type LinkBoxStyle = typeof linkBoxStyle
