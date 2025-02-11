import { defineComponentSlotStyle } from "../../core"

export const tagStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      alignItems: "center",
      color: "currentcolor",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      rounded: "full",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _active: {
        layerStyle: "active",
      },
      _hover: {
        layerStyle: "hover",
      },
    },
    content: {
      lineClamp: 1,
    },
    endIcon: {},
    icon: {
      alignItems: "center",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "center",
    },
    root: {
      alignItems: "center",
      display: "inline-flex",
      gap: "1",
      maxW: "full",
      rounded: "l2",
      userSelect: "none",
      verticalAlign: "top",
    },
    startIcon: {},
  },

  props: {
    /**
     * If `true`, the tag is disabled.
     *
     * @default false
     */
    disabled: {
      true: {
        closeButton: {
          layerStyle: "disabled",
        },
      },
    },
  },

  variants: {
    outline: {
      root: {
        layerStyle: "outline",
      },
    },
    solid: {
      root: {
        layerStyle: "solid",
      },
    },
    subtle: {
      root: {
        layerStyle: "subtle",
      },
    },
    surface: {
      root: {
        layerStyle: "surface",
      },
    },
  },

  sizes: {
    sm: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "xs",
        lineHeight: "{sizes.6}",
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
        lineHeight: "{sizes.7}",
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
        lineHeight: "{sizes.8}",
        minH: "8",
        minW: "8",
        px: "3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "subtle",
  },
})

export type TagStyle = typeof tagStyle
