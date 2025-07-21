import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const ratingStyle = defineComponentSlotStyle({
  base: {
    group: { position: "relative" },
    icon: {
      alignItems: "center",
      clipPath: "{clip-path}",
      display: "inline-flex",
      fill: "currentColor",
      justifyContent: "center",
    },
    item: {
      "&:has(input:focus-visible)": { ...focusRingStyle.outside },
      color: { base: "{empty-color}", _filled: "{filled-color}" },
      cursor: "pointer",
      display: "block",
      lineHeight: "0",
      rounded: "l1",
      _notLast: { inset: 0, position: "absolute" },
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
    root: {
      "--empty-color": "colors.bg.muted",
      "--filled-color": "colorScheme.solid",
      display: "flex",
      w: "max-content",
    },
  },

  sizes: {
    xs: { icon: { fontSize: "md" } },
    sm: { icon: { fontSize: "lg" } },
    md: { icon: { fontSize: "xl" } },
    lg: { icon: { fontSize: "2xl" } },
    xl: { icon: { fontSize: "3xl" } },
  },

  defaultProps: {
    size: "md",
  },
})

export type RatingStyle = typeof ratingStyle
