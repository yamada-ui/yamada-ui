import { defineTokens } from "../../core"

export const keyframes = defineTokens.keyframes({
  bounce: {
    "0%, 100%": {
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
      transform: "translateY(-25%)",
    },
    "50%": {
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
      transform: "none",
    },
  },
  ping: {
    "75%, 100%": {
      opacity: "0",
      transform: "scale(2)",
    },
  },
  pulse: {
    "50%": { opacity: "0.5" },
  },
  spin: {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },

  position: {
    from: {
      insetBlockStart: "var(--animation-from-y)",
      insetInlineStart: "var(--animation-from-x)",
    },
    to: {
      insetBlockStart: "var(--animation-to-y)",
      insetInlineStart: "var(--animation-to-x)",
    },
  },

  translate: {
    from: {
      translate: "var(--animation-from-x, 0) var(--animation-from-y, 0)",
    },
    to: {
      translate: "var(--animation-to-x, 0) var(--animation-to-y, 0)",
    },
  },

  "fade-in": {
    from: { opacity: "var(--animation-from-opacity, 0)" },
    to: { opacity: "var(--animation-to-opacity, 1)" },
  },
  "fade-out": {
    from: { opacity: "var(--animation-from-opacity, 1)" },
    to: { opacity: "var(--animation-to-opacity, 0)" },
  },

  "scale-in": {
    from: { scale: "var(--animation-from-scale, 0.95)" },
    to: { scale: "var(--animation-to-scale, 1)" },
  },
  "scale-out": {
    from: { scale: "var(--animation-from-scale, 1)" },
    to: { scale: "var(--animation-to-scale, 0.95)" },
  },

  "collapse-height": {
    from: { height: "var(--animation-height)" },
    to: { height: "0" },
  },
  "collapse-width": {
    from: { width: "var(--animation-width)" },
    to: { width: "0" },
  },
  "expand-height": {
    from: { height: "0" },
    to: { height: "var(--animation-height)" },
  },
  "expand-width": {
    from: { width: "0" },
    to: { width: "var(--animation-width)" },
  },

  "slide-from-bottom-full": {
    from: { translate: "0 var(--animation-from, 100%)" },
    to: { translate: "0 var(--animation-to, 0)" },
  },
  "slide-from-left-full": {
    from: { translate: "var(--animation-from, -100%) 0" },
    to: { translate: "var(--animation-to, 0) 0" },
  },
  "slide-from-right-full": {
    from: { translate: "var(--animation-from, 100%) 0" },
    to: { translate: "var(--animation-to, 0) 0" },
  },
  "slide-from-top-full": {
    from: { translate: "0 var(--animation-from, -100%)" },
    to: { translate: "0 var(--animation-to, 0)" },
  },
  "slide-to-bottom-full": {
    from: { translate: "0 var(--animation-from, 0)" },
    to: { translate: "0 var(--animation-to, 100%)" },
  },
  "slide-to-left-full": {
    from: { translate: "var(--animation-from, 0) 0" },
    to: { translate: "var(--animation-to, -100%) 0" },
  },
  "slide-to-right-full": {
    from: { translate: "var(--animation-from, 0) 0" },
    to: { translate: "var(--animation-to, 100%) 0" },
  },
  "slide-to-top-full": {
    from: { translate: "0 var(--animation-from, 0)" },
    to: { translate: "0 var(--animation-to, -100%)" },
  },

  "slide-from-bottom": {
    from: { translate: "0 var(--animation-from, 0.5rem)" },
    to: { translate: "0 var(--animation-to, 0)" },
  },
  "slide-from-left": {
    from: { translate: "var(--animation-from, -0.5rem) 0" },
    to: { translate: "var(--animation-to, 0) 0" },
  },
  "slide-from-right": {
    from: { translate: "var(--animation-from, 0.5rem) 0" },
    to: { translate: "var(--animation-to, 0) 0" },
  },
  "slide-from-top": {
    from: { translate: "0 var(--animation-from, -0.5rem)" },
    to: { translate: "0 var(--animation-to, 0)" },
  },
  "slide-to-bottom": {
    from: { translate: "0 var(--animation-from, 0)" },
    to: { translate: "0 var(--animation-to, 0.5rem)" },
  },
  "slide-to-left": {
    from: { translate: "var(--animation-from, 0) 0" },
    to: { translate: "var(--animation-to, -0.5rem) 0" },
  },
  "slide-to-right": {
    from: { translate: "var(--animation-from, 0) 0" },
    to: { translate: "var(--animation-to, 0.5rem) 0" },
  },
  "slide-to-top": {
    from: { translate: "0 var(--animation-from, 0)" },
    to: { translate: "0 var(--animation-to, -0.5rem)" },
  },
})
