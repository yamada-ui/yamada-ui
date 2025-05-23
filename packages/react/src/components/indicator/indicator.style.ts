import { defineComponentSlotStyle } from "../../core"

export const indicatorStyle = defineComponentSlotStyle({
  base: {
    icon: {
      alignItems: "center",
      display: "flex",
      h: "fit-content",
      justifyContent: "center",
      outline: 0,
      position: "absolute",
      rounded: "full",
      w: "fit-content",
      whiteSpace: "nowrap",
      zIndex: "kurillin",
      _numeric: {
        fontWeight: "medium",
      },
    },
    ping: {
      bg: "{pingColor}",
      boxSize: "100%",
      opacity: 0.75,
      position: "absolute",
      rounded: "{full, 9999px}",
      zIndex: -1,
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
     * The placement of the indicator.
     *
     * @default 'top-right'
     */
    placement: {
      bottom: {},
      "bottom-left": {},
      "bottom-right": {},
      left: {},
      right: {},
      top: {},
      "top-left": {},
      "top-right": {},
    },
    /**
     * If `true`, display the border of the indicator.
     *
     * @default false
     */
    withBorder: {
      true: {
        icon: {
          borderColor: ["white", "black"],
          borderWidth: "0.2em",
        },
      },
    },
  },

  variants: {
    solid: {
      icon: {
        layerStyle: "solid",
        vars: [
          {
            name: "ping",
            token: "colors",
            value: "colorScheme.emphasized",
          },
        ],
      },
    },
    subtle: {
      icon: {
        layerStyle: "subtle",
        vars: [
          {
            name: "ping",
            token: "colors",
            value: "colorScheme.emphasized",
          },
        ],
      },
    },
  },

  compounds: [
    {
      css: {
        icon: {
          top: "{offset}",
          translateY: "-50%",
        },
      },
      placement: /^top/,
    },
    {
      css: {
        icon: {
          bottom: "{offset}",
          translateY: "50%",
        },
      },
      placement: /^bottom/,
    },
    {
      css: {
        icon: {
          top: "50%",
          translateY: "-50%",
        },
      },
      placement: /^(?:left|right)$/,
    },
    {
      css: {
        icon: {
          left: "{offset}",
          translateX: "-50%",
        },
      },
      placement: /left$/,
    },
    {
      css: {
        icon: {
          right: "{offset}",
          translateX: "50%",
        },
      },
      placement: /right$/,
    },
    {
      css: {
        icon: {
          left: "50%",
          translateX: "-50%",
        },
      },
      placement: /^(?:top|bottom)$/,
    },
  ],

  sizes: {
    sm: {
      icon: {
        fontSize: "xs",
        lineHeight: 1.6,
        minH: 2,
        minW: 2,
        px: 1,
      },
    },
    md: {
      icon: {
        fontSize: "sm",
        lineHeight: 1.5,
        minH: 3,
        minW: 3,
        px: 1.5,
      },
    },
    lg: {
      icon: {
        fontSize: "md",
        lineHeight: 1.4,
        minH: 4,
        minW: 4,
        px: 2,
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "solid",
    placement: "top-right",
  },
})

export type IndicatorStyle = typeof indicatorStyle
