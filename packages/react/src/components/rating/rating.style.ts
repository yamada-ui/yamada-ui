import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const ratingStyle = defineComponentSlotStyle({
  base: {
    group: {
      position: "relative",
    },
    icon: {
      alignItems: "center",
      display: "inline-flex",
      fill: "currentColor",
      justifyContent: "center",
    },
    item: {
      "&:has(input:focus-visible)": {
        ...focusRingStyle.outline,
      },
      "--filled-color": "colorScheme.solid",
      color: ["blackAlpha.300", "whiteAlpha.300"],
      cursor: "pointer",
      display: "block",
      lineHeight: "0",
      outline: "none",
      rounded: "sm",
      _filled: {
        color: ["{filled-color}", "{filled-color}"],
      },
      _notLast: {
        left: 0,
        position: "absolute",
        top: 0,
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _readOnly: {
        cursor: "default",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    root: {
      display: "flex",
      w: "max-content",
    },
  },

  sizes: {
    xs: {
      icon: {
        fontSize: "md",
      },
    },
    sm: {
      icon: {
        fontSize: "lg",
      },
    },
    md: {
      icon: {
        fontSize: "xl",
      },
    },
    lg: {
      icon: {
        fontSize: "2xl",
      },
    },
    xl: {
      icon: {
        fontSize: "3xl",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type RatingStyle = typeof ratingStyle
