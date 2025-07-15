import { defineComponentSlotStyle } from "../../core"

export const progressStyle = defineComponentSlotStyle({
  base: {
    range: {
      bgColor: "{filledTrackColor}",
      h: "full",
      rounded: "inherit",
      transitionDuration: "slow",
      transitionProperty: "size",
      w: "{width}",
      _indeterminate: {
        "--animation-from-x": "-40%",
        "--animation-to-x": "100%",
        animationDuration: "{duration, 1s}",
        animationIterationCount: "infinite",
        animationName: "position",
        animationTimingFunction: "ease",
        minW: "50%",
        position: "absolute",
        willChange: "left",
      },
    },
    root: {
      overflow: "hidden",
      position: "relative",
      w: "full",
    },
  },

  props: {
    /**
     * If `true`, the progress bar will animate.
     *
     * @default false
     */
    animated: {
      true: {
        range: {
          "--animation-from": "{stripe-size}",
          animationDuration: "{duration, 1s}",
          animationIterationCount: "infinite",
          animationName: "bg-position",
          animationTimingFunction: "linear",
        },
      },
    },
    /**
     * The shape of the progress bar.
     *
     * @default rounded
     */
    shape: {
      circle: {
        root: { rounded: "full" },
      },
      rounded: {
        root: { rounded: "l1" },
      },
      square: {
        root: { rounded: "0" },
      },
    },
    /**
     * If `true`, the progress bar will show stripe.
     *
     * @default false
     */
    striped: {
      true: {
        range: {
          "--stripe-angle": "45deg",
          "--stripe-color": ["rgba(255, 255, 255, 0.3)", "rgba(0, 0, 0, 0.3)"],
          "--stripe-size": "1rem",
          bgImage: `linear-gradient(
            {stripe-angle},
            {stripe-color} 25%,
            transparent 25%,
            transparent 50%,
            {stripe-color} 50%,
            {stripe-color} 75%,
            transparent 75%,
            transparent
          )`,
          bgSize: "{stripe-size} {stripe-size}",
        },
      },
    },
  },

  variants: {
    outline: {
      range: {
        bg: "colorScheme.solid",
      },
      root: {
        bg: "bg.subtle",
      },
    },
    subtle: {
      range: {
        bg: "colorScheme.solid/80",
      },
      root: {
        bg: ["colorScheme.muted", "colorScheme.subtle"],
      },
    },
  },

  sizes: {
    xs: {
      root: { h: "1" },
    },
    sm: {
      root: { h: "2" },
    },
    md: {
      root: { h: "3" },
    },
    lg: {
      root: { h: "4" },
    },
    xl: {
      root: { h: "5" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
    shape: "rounded",
    striped: false,
  },
})

export type ProgressStyle = typeof progressStyle
