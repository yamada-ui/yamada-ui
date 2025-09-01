import { defineComponentSlotStyle } from "../../core"

export const circleProgressStyle = defineComponentSlotStyle({
  base: {
    circle: {
      "--c": "calc(2 * 3.14159 * {r})",
      "--cx": "calc({size} / 2)",
      "--cy": "calc({size} / 2)",
      "--r": "calc({size} / 2 - {thickness} / 2)",
      boxSize: "{size}",
      _indeterminate: {
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationName: "spin",
        animationTimingFunction: "linear",
      },
    },
    label: {
      fontWeight: "medium",
      left: "50%",
      letterSpacing: "tight",
      lineHeight: "1",
      position: "absolute",
      textAlign: "center",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    range: {
      cx: "{cx}",
      cy: "{cy}",
      fill: "transparent",
      r: "{r}",
      strokeDasharray: "{c}",
      strokeDashoffset: "calc({c} * ((100 - {percent}) / 100))",
      strokeWidth: "{thickness}",
      transform: "rotate(-90deg)",
      transformOrigin: "center center",
      transitionDuration: "slow",
      transitionProperty: "stroke-dashoffset, stroke-dasharray",
      _indeterminate: {
        animationDuration: "{duration, 1.5s}",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        _keyframes: {
          "0%": {
            strokeDasharray: "1, 400",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-100%",
          },
          "100%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-260%",
          },
        },
      },
    },
    root: {
      display: "inline-flex",
      position: "relative",
    },
    track: {
      cx: "{cx}",
      cy: "{cy}",
      fill: "transparent",
      r: "{r}",
      strokeWidth: "{thickness}",
    },
  },

  props: {
    /**
     * The shape of the progress bar.
     *
     * @default 'rounded'
     */
    shape: {
      rounded: {
        range: {
          strokeLinecap: "round",
          _indeterminate: { strokeLinecap: "butt" },
        },
      },
      square: {
        range: { strokeLinecap: "butt" },
      },
    },
  },

  variants: {
    outline: {
      range: {
        stroke: "colorScheme.solid",
      },
      track: {
        stroke: "bg.subtle",
      },
    },
    subtle: {
      range: {
        stroke: "colorScheme.solid/80",
      },
      track: {
        stroke: ["colorScheme.muted", "colorScheme.subtle"],
      },
    },
  },

  sizes: {
    xs: {
      label: { fontSize: "2xs" },
      root: {
        "--size": "{sizes.6}",
        "--thickness": "{sizes.1}",
      },
    },
    sm: {
      label: { fontSize: "2xs" },
      root: {
        "--size": "{sizes.8}",
        "--thickness": "{sizes.1.5}",
      },
    },
    md: {
      label: { fontSize: "2xs" },
      root: {
        "--size": "{sizes.10}",
        "--thickness": "{sizes.1.5}",
      },
    },
    lg: {
      label: { fontSize: "xs" },
      root: {
        "--size": "{sizes.12}",
        "--thickness": "{sizes.2}",
      },
    },
    xl: {
      label: { fontSize: "sm" },
      root: {
        "--size": "{sizes.14}",
        "--thickness": "{sizes.2}",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
    shape: "rounded",
  },
})

export type CircleProgressStyle = typeof circleProgressStyle
