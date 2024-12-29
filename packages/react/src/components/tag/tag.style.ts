import { defineComponentSlotStyle } from "../../core"
import { badgeStyle } from "../badge"

export const tagStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      alignItems: "center",
      color: "currentcolor",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      outline: "0",
      rounded: "full",
      transitionDuration: "normal",
      transitionProperty: "common",
      _active: {
        opacity: 1,
      },
      _disabled: {
        opacity: 0.4,
      },
      _focusVisible: {
        bg: "rgba(0, 0, 0, 0.14)",
        boxShadow: "outline",
      },
      _hover: {
        opacity: 0.8,
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
        },
      },
    },
    element: {
      alignItems: "center",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "center",
    },
    endElement: {},
    label: {
      lineClamp: 1,
    },
    root: {
      alignItems: "center",
      display: "inline-flex",
      gap: "1",
      maxW: "full",
      outline: 0,
      rounded: "md",
      userSelect: "none",
      verticalAlign: "top",
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    startElement: {},
  },

  variants: {
    outline: {
      root: badgeStyle.variants?.outline,
    },
    solid: {
      root: badgeStyle.variants?.solid,
    },
    subtle: {
      root: badgeStyle.variants?.subtle,
    },
    surface: {
      root: badgeStyle.variants?.surface,
    },
  },

  sizes: {
    sm: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "xs",
        lineHeight: "$sizes.6",
        minH: "6",
        minW: "6",
        px: "2",
      },
    },
    md: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "sm",
        lineHeight: "$sizes.7",
        minH: "7",
        minW: "7",
        px: "2",
      },
    },
    lg: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "md",
        lineHeight: "$sizes.8",
        minH: "8",
        minW: "8",
        px: "3",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "subtle",
  },
})

export type TagStyle = typeof tagStyle
