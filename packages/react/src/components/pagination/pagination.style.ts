import { defineComponentSlotStyle } from "../../core"

export const paginationStyle = defineComponentSlotStyle({
  base: {
    ellipsis: { pointerEvents: "none" },
    first: {},
    inner: {},
    item: {
      alignItems: "center",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      px: 1,
      transitionDuration: "slower",
      transitionProperty: "common",
      userSelect: "none",
      _selected: { cursor: "default", pointerEvents: "none" },
      _hover: {
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        _disabled: {
          bg: ["initial", "initial"],
        },
      },
      _active: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
      },
      _focus: {
        outline: "none",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    last: {},
    next: {},
    prev: {},
    root: {
      _disabled: {
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    ghost: {
      ellipsis: {
        border: "0",
      },
      item: {
        _selected: {
          layerStyle: "ghost",
          fontWeight: "semibold",
        },
        _hover: {
          layerStyle: "ghost.hover",
        },
      },
    },
    outline: {
      ellipsis: {
        border: "0",
      },
      item: {
        border: "1px solid",
        borderColor: "border",
        _selected: {
          layerStyle: "outline",
        },
        _hover: {
          layerStyle: "outline.hover",
        },
      },
    },
    solid: {
      ellipsis: {
        border: "0",
      },
      item: {
        border: "1px solid",
        borderColor: "border.muted",
        _selected: {
          layerStyle: "solid",
        },
      },
    },
    subtle: {
      item: {
        _selected: {
          layerStyle: "subtle",
        },
      },
    },
    surface: {
      ellipsis: {
        border: "0",
      },
      item: {
        border: "1px solid",
        borderColor: "border",
        _selected: {
          layerStyle: "surface",
        },
      },
    },
  },

  sizes: {
    xs: {
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "xs",
        minH: 6,
        minW: 6,
        rounded: "sm",
      },
    },
    sm: {
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "sm",
        minH: 8,
        minW: 8,
        rounded: "md",
      },
    },
    md: {
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "md",
        minH: 10,
        minW: 10,
        rounded: "md",
      },
    },
    lg: {
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "lg",
        minH: 12,
        minW: 12,
        rounded: "md",
      },
    },
    xl: {
      inner: {
        gap: "md",
      },
      item: {
        fontSize: "xl",
        minH: 14,
        minW: 14,
        rounded: "lg",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "sm",
    variant: "solid",
  },
})

export type PaginationStyle = typeof paginationStyle
