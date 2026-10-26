import { defineComponentSlotStyle } from "../../core"

export const marqueeStyle = defineComponentSlotStyle({
  base: {
    content: {
      "&:not([data-ready])": { animationName: "none" },
      alignItems: "center",
      animationDelay: "{marquee-delay}",
      animationDirection: "{marquee-direction}",
      animationDuration: "{marquee-duration}",
      animationFillMode: "both",
      animationIterationCount: "{marquee-loop-count}",
      animationPlayState: "{marquee-play-state}",
      animationTimingFunction: "linear",
      display: "flex",
      flex: "0 0 auto",
      minW: "0",
      position: "relative",
      _horizontal: { w: "max-content" },
      _keyframes: {
        to: {
          transform: "translate({marquee-translate-x}, {marquee-translate-y})",
        },
      },
      _mediaReduceMotion: { animationName: "none" },
      _vertical: { flexDirection: "column", h: "max-content" },
    },
    edge: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: "1",
      _horizontal: {
        bottom: "0",
        top: "0",
        w: "{marquee-edge-size}",
        _end: {
          bgGradient: "linear(to-l, {marquee-edge-color}, transparent)",
          insetInlineEnd: "0",
          _rtl: {
            bgGradient: "linear(to-r, {marquee-edge-color}, transparent)",
          },
        },
        _start: {
          bgGradient: "linear(to-r, {marquee-edge-color}, transparent)",
          insetInlineStart: "0",
          _rtl: {
            bgGradient: "linear(to-l, {marquee-edge-color}, transparent)",
          },
        },
      },
      _vertical: {
        h: "{marquee-edge-size}",
        insetInline: "0",
        _end: {
          bgGradient: "linear(to-t, {marquee-edge-color}, transparent)",
          bottom: "0",
        },
        _start: {
          bgGradient: "linear(to-b, {marquee-edge-color}, transparent)",
          top: "0",
        },
      },
    },
    group: {
      "&[data-clone]": {
        display: "{marquee-clone-display, flex}",
        position: "absolute",
        _horizontal: {
          transform:
            "translateX(calc({marquee-copy-offset-x} * {marquee-index}))",
          w: "max-content",
        },
        _vertical: {
          transform: "translateY(calc({marquee-distance} * {marquee-index}))",
          w: "full",
        },
      },
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      gap: "{marquee-gap}",
      _horizontal: { pe: "{marquee-gap}" },
      _mediaReduceMotion: { "&[data-clone]": { display: "none" } },
      _vertical: { flexDirection: "column", pb: "{marquee-gap}" },
    },
    item: { flexShrink: 0 },
    root: {
      "&[data-pause-on-focus]": {
        _nativeFocusWithin: {
          "& > [data-marquee-content]": { transform: "none !important" },
          "--marquee-clone-display": "none",
          "--marquee-play-state": "paused",
          overflow: "auto",
        },
      },
      "&[data-pause-on-hover]": {
        _hover: { "--marquee-play-state": "paused" },
      },
      "--marquee-copy-offset-x": "{marquee-distance}",
      "--marquee-edge-color": "colors.bg",
      "--marquee-edge-size": "20%",
      "--marquee-gap": "spaces.4",
      "--marquee-play-state": "running",
      "--marquee-translate-x": "calc({marquee-distance} * -1)",
      "--marquee-translate-y": "0px",
      overflow: "hidden",
      position: "relative",
      rounded: "l2",
      w: "full",
      _complete: {
        "& > [data-marquee-content]": { transform: "none !important" },
        "--marquee-clone-display": "none",
        overflow: "auto",
      },
      _horizontal: {
        "&[dir=rtl]": {
          "--marquee-copy-offset-x": "calc({marquee-distance} * -1)",
          "--marquee-translate-x": "{marquee-distance}",
        },
      },
      _mediaReduceMotion: { overflow: "auto" },
      _paused: { "--marquee-play-state": "paused" },
      _vertical: {
        "--marquee-translate-x": "0px",
        "--marquee-translate-y": "calc({marquee-distance} * -1)",
      },
    },
  },
})

export type MarqueeStyle = typeof marqueeStyle
