import { defineComponentStyle } from "../../core"

export const skeletonStyle = defineComponentStyle({
  base: {},

  props: {
    /**
     * If `false`, it'll render its children with a nice fade transition.
     *
     * @default true
     */
    loading: {
      false: {
        animationDuration: "{fade-duration, 0.1s}",
        animationIterationCount: "1",
        animationName: "fade-in",
        animationTimingFunction: "ease-out",
        bg: "unset",
      },
      true: {
        "&::before, &::after, *": {
          visibility: "hidden",
        },
        "--height": "sizes.6",
        "--width": "sizes.full",
        bgClip: "padding-box",
        boxShadow: "none",
        color: "transparent",
        cursor: "default",
        flexShrink: "0",
        h: "{height}",
        maxW: "full",
        pointerEvents: "none",
        rounded: "l1",
        userSelect: "none",
        w: "{width}",
      },
    },
  },

  variants: {
    none: {
      animation: "none",
    },
    pulse: {
      animationDuration: "{duration, 1.2s}",
      animationIterationCount: "infinite",
      animationName: "pulse",
      bg: "bg.muted",
    },
    shine: {
      "--animate-from": "200%",
      "--animate-to": "-200%",
      "--end-color": "colors.bg.muted",
      "--start-color": "colors.bg.subtle",
      animationDuration: "{duration, 5s}",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
      bgImage:
        "linear-gradient(270deg, {start-color}, {end-color}, {end-color}, {start-color})",
      bgSize: "400% 100%",
      keyframes: {
        from: {
          bgPosition: "var(--animate-from, 1rem) 0",
        },
        to: {
          bgPosition: "var(--animate-to, 0) 0",
        },
      },
    },
  },

  defaultProps: {
    variant: "pulse",
    loading: true,
  },
})

export type SkeletonStyle = typeof skeletonStyle
