import { defineComponentSlotStyle } from "../../core"

export const avatarStyle = defineComponentSlotStyle({
  base: {
    fallback: {
      alignItems: "center",
      boxSize: "100%",
      display: "inline-flex",
      fontWeight: "medium",
      justifyContent: "center",
      textTransform: "uppercase",
    },
    group: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      _notFirstChild: {
        me: "-2",
      },
    },
    image: {
      boxSize: "100%",
      objectFit: "cover",
    },
    root: {
      flexShrink: "0",
      overflow: "hidden",
      position: "relative",
      userSelect: "none",
      verticalAlign: "top",
    },
  },

  props: {
    /**
     * The shape of the component
     *
     * @default 'circle'
     */
    shape: {
      circle: {
        root: { rounded: "full" },
      },
      rounded: {
        root: { rounded: "l2" },
      },
      square: {
        root: { rounded: "0" },
      },
    },
  },

  variants: {
    outline: {
      group: {
        _child: {
          _loaded: {
            borderColor: "bg !important",
            borderWidth: "1px",
          },
        },
      },
      root: {
        bg: "transparent",
        borderColor: "transparent",
        _loaded: {
          layerStyle: "outline",
        },
      },
    },
    solid: {
      group: {
        _child: {
          borderColor: "bg",
          borderWidth: "1px",
        },
      },
      root: {
        bg: "transparent",
        _loaded: {
          layerStyle: "solid",
        },
      },
    },
    subtle: {
      group: {
        _child: {
          borderColor: "bg",
          borderWidth: "1px",
        },
      },
      root: {
        bg: "transparent",
        _loaded: {
          layerStyle: "subtle",
        },
      },
    },
    surface: {
      root: {
        bg: "transparent",
        borderColor: "transparent",
        _loaded: {
          layerStyle: "surface",
        },
      },
    },
  },

  sizes: {
    xs: {
      fallback: {
        fontSize: "xs",
        lineHeight: "{sizes.8}",
      },
      root: {
        boxSize: "8",
      },
    },
    sm: {
      fallback: {
        fontSize: "sm",
        lineHeight: "{sizes.9}",
      },
      root: {
        boxSize: "9",
      },
    },
    md: {
      fallback: {
        fontSize: "md",
        lineHeight: "{sizes.10}",
      },
      root: {
        boxSize: "10",
      },
    },
    lg: {
      fallback: {
        fontSize: "md",
        lineHeight: "{sizes.11}",
      },
      root: {
        boxSize: "11",
      },
    },
    xl: {
      fallback: {
        fontSize: "lg",
        lineHeight: "{sizes.12}",
      },
      root: {
        boxSize: "12",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    shape: "circle",
  },
})

export type AvatarStyle = typeof avatarStyle
