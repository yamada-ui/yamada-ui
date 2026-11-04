import { defineComponentSlotStyle } from "../../core"

export const marqueeStyle = defineComponentSlotStyle({
  base: {
    content: {
      "&:not([data-ready])": { animationName: "none" },
      alignItems: "center",
      animationDelay: "{delay}",
      animationDirection: "{direction}",
      animationDuration: "{duration}",
      animationFillMode: "both",
      animationIterationCount: "{loop-count}",
      animationPlayState: "{play-state}",
      animationTimingFunction: "linear",
      display: "flex",
      flex: "0 0 auto",
      minW: "0",
      position: "relative",
      _horizontal: { w: "max-content" },
      _keyframes: {
        to: {
          transform: "translate({translate-x}, {translate-y})",
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
        w: "{edge-size}",
        _end: {
          bgGradient: "linear(to-l, {edge-color}, transparent)",
          insetInlineEnd: "0",
          _rtl: {
            bgGradient: "linear(to-r, {edge-color}, transparent)",
          },
        },
        _start: {
          bgGradient: "linear(to-r, {edge-color}, transparent)",
          insetInlineStart: "0",
          _rtl: {
            bgGradient: "linear(to-l, {edge-color}, transparent)",
          },
        },
      },
      _vertical: {
        h: "{edge-size}",
        insetInline: "0",
        _end: {
          bgGradient: "linear(to-t, {edge-color}, transparent)",
          bottom: "0",
        },
        _start: {
          bgGradient: "linear(to-b, {edge-color}, transparent)",
          top: "0",
        },
      },
    },
    group: {
      "&[data-clone]": {
        display: "{clone-display, flex}",
        position: "absolute",
        _horizontal: {
          transform: "translateX(calc({copy-offset-x} * {index}))",
          w: "max-content",
        },
        _vertical: {
          transform: "translateY(calc({distance} * {index}))",
          w: "full",
        },
      },
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      gap: "{gap}",
      _horizontal: { pe: "{gap}" },
      _mediaReduceMotion: { "&[data-clone]": { display: "none" } },
      _vertical: { flexDirection: "column", pb: "{gap}" },
    },
    item: { flexShrink: 0 },
    root: {
      "&[data-pause-on-focus]": {
        _nativeFocusWithin: {
          "& > [data-marquee-content]": { transform: "none !important" },
          "--clone-display": "none",
          "--play-state": "paused",
          overflow: "auto",
        },
      },
      "&[data-pause-on-hover]": {
        _hover: { "--play-state": "paused" },
      },
      "--copy-offset-x": "{distance}",
      "--edge-color": "colors.bg",
      "--edge-size": "20%",
      "--gap": "spaces.4",
      "--play-state": "running",
      "--translate-x": "calc({distance} * -1)",
      "--translate-y": "0px",
      overflow: "hidden",
      position: "relative",
      rounded: "l2",
      w: "full",
      _complete: {
        "& > [data-marquee-content]": { transform: "none !important" },
        "--clone-display": "none",
        overflow: "auto",
      },
      _horizontal: {
        "&[dir=rtl]": {
          "--copy-offset-x": "calc({distance} * -1)",
          "--translate-x": "{distance}",
        },
      },
      _mediaReduceMotion: { overflow: "auto" },
      _paused: { "--play-state": "paused" },
      _vertical: {
        "--translate-x": "0px",
        "--translate-y": "calc({distance} * -1)",
      },
    },
  },
})

export type MarqueeStyle = typeof marqueeStyle
