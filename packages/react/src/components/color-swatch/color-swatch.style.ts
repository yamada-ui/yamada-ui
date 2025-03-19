import { defineComponentSlotStyle } from "../../core"

export const colorSwatchStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      bottom: 0,
      boxSize: "full",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
    },
    overlays: {},
    root: {
      "& > *": {
        alignItems: "center",
        bottom: "0",
        display: "flex",
        h: "100%",
        justifyContent: "center",
        left: "0",
        overflow: "hidden",
        position: "absolute",
        right: "0",
        top: "0",
        w: "100%",
      },
      position: "relative",
      _before: {
        content: `""`,
        display: "block",
        h: 0,
        pb: "100%",
      },
    },
  },

  sizes: {
    xs: {
      overlay: { rounded: "sm" },
      root: { boxSize: "6", rounded: "sm" },
    },
    sm: {
      overlay: { rounded: "md" },
      root: { boxSize: "8", rounded: "md" },
    },
    md: {
      overlay: { rounded: "md" },
      root: { boxSize: "10", rounded: "md" },
    },
    lg: {
      overlay: { rounded: "md" },
      root: { boxSize: "12", rounded: "md" },
    },
  },

  variants: {
    basic: {},
    rounded: {
      overlay: { rounded: "full" },
      root: { rounded: "full" },
    },
  },

  props: {
    /**
     * If `true`, the color swatch will be perfectly round. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      false: {},
      true: {
        overlay: {
          rounded: "{full, 9999px}",
        },
        overlays: {
          rounded: "{full, 9999px}",
        },
        root: {
          rounded: "{full, 9999px}",
        },
      },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "basic",
  },
})

export type ColorSwatchStyle = typeof colorSwatchStyle
