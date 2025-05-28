import { defineComponentSlotStyle } from "../../core"
import { iconButtonStyle } from "../button"

export const toggleStyle = defineComponentSlotStyle({
  base: {
    group: {},
    root: {
      "--error-border-color": "colors.border.error",
      gap: "2",
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
          rounded: "full",
        },
      },
    },
  },

  variants: {
    ghost: {
      root: {
        _checked: {
          layerStyle: "solid",
        },
        _notChecked: {
          layerStyle: "ghost",
          _hover: {
            layerStyle: "ghost.hover",
          },
        },
        _invalid: {
          borderColor: "{error-border-color}",
          borderWidth: "1px",
        },
      },
    },
    outline: {
      root: {
        _checked: {
          layerStyle: "solid",
          borderColor: "colorScheme.solid",
          borderWidth: "1px",
          _invalid: {
            borderColor: "{error-border-color}",
          },
        },
        _notChecked: {
          layerStyle: "outline",
          _hover: {
            layerStyle: "outline.hover",
          },
          _invalid: {
            borderColor: "{error-border-color}",
          },
        },
      },
    },
    solid: {
      root: {
        _checked: {
          layerStyle: "subtle",
        },
        _notChecked: {
          layerStyle: "solid",
          _hover: {
            layerStyle: "solid.hover",
          },
        },
        _invalid: {
          borderColor: "{error-border-color}",
          borderWidth: "1px",
        },
      },
    },
    subtle: {
      root: {
        _checked: {
          layerStyle: "solid",
        },
        _notChecked: {
          layerStyle: "subtle",
          _hover: {
            layerStyle: "subtle.hover",
          },
        },
        _invalid: {
          borderColor: "{error-border-color}",
          borderWidth: "1px",
        },
      },
    },
    surface: {
      root: {
        _checked: {
          layerStyle: "solid",
          _invalid: {
            borderColor: "{error-border-color}",
            borderWidth: "1px",
          },
        },
        _notChecked: {
          layerStyle: "surface",
          _hover: {
            layerStyle: "surface.hover",
          },
          _invalid: {
            borderColor: "{error-border-color}",
          },
        },
      },
    },
  },

  sizes: {
    xs: {
      root: {
        ...iconButtonStyle.sizes?.xs,
        gap: "1",
      },
    },
    sm: {
      root: {
        ...iconButtonStyle.sizes?.sm,
        gap: "2",
      },
    },
    md: {
      root: {
        ...iconButtonStyle.sizes?.md,
        gap: "2",
      },
    },
    lg: {
      root: {
        ...iconButtonStyle.sizes?.lg,
        gap: "2.5",
      },
    },
    xl: {
      root: {
        ...iconButtonStyle.sizes?.xl,
        gap: "3",
      },
    },
    "2xl": {
      root: {
        ...iconButtonStyle.sizes?.["2xl"],
        gap: "3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "ghost",
  },
})

export type ToggleStyle = typeof toggleStyle
