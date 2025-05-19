import { defineComponentSlotStyle } from "../../core"

export const toggleStyle = defineComponentSlotStyle({
  base: {
    group: {
      display: "inline-flex",
      gap: "0.5rem",
    },
    root: {
      alignItems: "center",
      appearance: "none",
      cursor: "pointer",
      display: "inline-flex",
      gap: "{2, 0.5rem}",
      justifyContent: "center",
      outline: "none",
      overflow: "hidden",
      pointerEvents: "auto",
      position: "relative",
      rounded: "md",
      transitionDuration: "slower",
      transitionProperty: "common",
      userSelect: "none",
      verticalAlign: "middle",
      _readOnly: {
        cursor: "default",
        pointerEvents: "none",
        _ripple: {
          display: "none",
        },
      },
      _disabled: {
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
  },

  props: {
    /**
     * If true, the toggle button is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: {
        root: {
          borderRadius: "full",
        },
      },
    },
  },

  variants: {
    ghost: {
      root: {
        layerStyle: "ghost",
        _selected: {
          layerStyle: "ghost.hover",
        },
        _hover: {
          layerStyle: "ghost.hover",
        },
      },
    },
    outline: {
      root: {
        layerStyle: "outline",
        _selected: {
          layerStyle: "subtle.hover",
          color: "colorScheme.fg",
        },
        _hover: {
          layerStyle: "outline.hover",
        },
      },
    },
    solid: {
      root: {
        layerStyle: "solid",
        _selected: {
          layerStyle: "solid.hover",
        },
        _hover: {
          layerStyle: "solid.hover",
        },
      },
    },
    subtle: {
      root: {
        layerStyle: "subtle",
        _selected: {
          layerStyle: "subtle.hover",
        },
        _hover: {
          layerStyle: "subtle.hover",
        },
      },
    },
    surface: {
      root: {
        layerStyle: "surface",
        _selected: {
          layerStyle: "surface.hover",
        },
        _hover: {
          layerStyle: "surface.hover",
        },
      },
    },
  },

  sizes: {
    xs: {
      root: {
        fontSize: "xs",
        lineHeight: "{sizes.6}",
        minBoxSize: 6,
      },
    },
    sm: {
      root: {
        fontSize: "sm",
        lineHeight: "{sizes.8}",
        minBoxSize: 8,
      },
    },
    md: {
      root: {
        fontSize: "md",
        lineHeight: "{sizes.10}",
        minBoxSize: 10,
      },
    },
    lg: {
      root: {
        fontSize: "lg",
        lineHeight: "{sizes.12}",
        minBoxSize: 12,
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "subtle",
  },
})

export type ToggleStyle = typeof toggleStyle
