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
        outlineColor: "{--focus-ring-color}",
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
      "a[href]:not(.ui-link-box__overlay), abbr[title]": {
        position: "relative",
        zIndex: "yamcha",
      },
      position: "relative",
    },
  },
})

export type LinkBoxStyle = typeof linkBoxStyle
