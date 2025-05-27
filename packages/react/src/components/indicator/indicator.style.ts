import { defineComponentSlotStyle } from "../../core"

export const indicatorStyle = defineComponentSlotStyle({
  base: {
    float: {
      zIndex: "yamcha",
    },
    label: {
      alignItems: "center",
      display: "inline-flex",
      rounded: "full",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      _numeric: {
        fontWeight: "medium",
      },
    },
    root: {
      position: "relative",
    },
  },

  props: {
    /**
     * If `true`, set the indicator as an inline element.
     *
     * @default false
     * */
    inline: {
      false: {
        root: {
          display: "block",
        },
      },
      true: {
        root: {
          display: "inline-block",
        },
      },
    },
    /**
     * If `true`, make an element scale and fade like a radar ping or ripple of water.
     *
     * @default false
     */
    ping: {
      true: {
        label: {
          _before: {
            animationDuration: "{duration, 1.4s}",
            animationFillMode: "forwards",
            animationIterationCount: "{iteration-count, infinite}",
            animationName: "ping",
            animationTimingFunction:
              "{timing-function, cubic-bezier(0, 0, 0.2, 1)}",
            bg: "{ping-color}",
            boxSize: "100%",
            inset: "0",
            opacity: 0.7,
            position: "absolute",
            rounded: "full",
            zIndex: -1,
          },
        },
        root: {
          "--animation-scale": "1.8",
        },
      },
    },
    /**
     * If `true`, display the border of the indicator.
     *
     * @default false
     */
    withBorder: {
      true: {
        label: {
          borderColor: ["white", "black"],
          borderWidth: "0.2em",
        },
      },
    },
  },

  variants: {
    solid: {
      label: {
        layerStyle: "solid",
        "--ping-color": "colorScheme.outline",
      },
    },
    subtle: {
      label: {
        layerStyle: "subtle",
        "--ping-color": "colorScheme.outline",
      },
    },
    surface: {
      label: {
        layerStyle: "surface",
        "--ping-color": "colorScheme.outline",
      },
    },
  },

  sizes: {
    sm: {
      label: {
        fontSize: "xs",
        minBoxSize: "3",
        px: "1.5",
      },
    },
    md: {
      label: {
        fontSize: "sm",
        minBoxSize: "4",
        px: "2",
      },
    },
    lg: {
      label: {
        fontSize: "md",
        minBoxSize: "5",
        px: "2.5",
      },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "solid",
    ping: false,
  },
})

export type IndicatorStyle = typeof indicatorStyle
