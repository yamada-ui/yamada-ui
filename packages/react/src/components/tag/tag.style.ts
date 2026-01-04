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
      _hover: {
        layerStyle: "hover",
      },
      _active: {
        layerStyle: "active",
      },
      _disabled: {
        layerStyle: "disabled",
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
     * If `true`, the tag is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: { root: { rounded: "full" } },
    },
  },

  variants: {
    outline: {
      root: {
        layerStyle: "outline",
      },
    },
    plain: {
      root: {
        borderColor: "transparent",
        borderWidth: "1px",
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
        lineHeight: "{sizes.5}",
        minH: "5",
        minW: "5",
        px: "1.5",
      },
    },
    md: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "sm",
        lineHeight: "{sizes.6}",
        minH: "6",
        minW: "6",
        px: "2",
      },
    },
    lg: {
      element: {
        fontSize: "1.25em",
      },
      root: {
        fontSize: "md",
        lineHeight: "{sizes.7}",
        minH: "7",
        minW: "7",
        px: "2.5",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "subtle",
  },
})

export type TagStyle = typeof tagStyle
