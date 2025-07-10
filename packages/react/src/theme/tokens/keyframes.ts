import { defineTokens } from "../../core"

export const keyframes = defineTokens.keyframes({
  bounce: {
    "0%, 100%": {
      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
      transform: "translateY(-25%)",
    },
    "50%": {
      animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      transform: "none",
    },
  },
  ping: {
    "75%, 100%": {
      opacity: "0",
      transform: "scale({animation-scale, 2})",
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

  "bg-position": {
    from: {
      bgPosition: "var(--animation-from, 1rem) 0",
    },
    to: {
      bgPosition: "var(--animation-to, 0) 0",
    },
  },
  position: {
    from: {
      insetBlockStart: "{animation-from-y}",
      insetInlineStart: "{animation-from-x}",
    },
    to: {
      insetBlockStart: "{animation-to-y}",
      insetInlineStart: "{animation-to-x}",
    },
  },

  translate: {
    from: {
      translate: "{animation-from-x, 0} {animation-from-y, 0}",
    },
    to: {
      translate: "{animation-to-x, 0} {animation-to-y, 0}",
    },
  },

  "fade-in": {
    from: { opacity: "{animation-from-opacity, 0}" },
    to: { opacity: "{animation-to-opacity, 1}" },
  },
  "fade-out": {
    from: { opacity: "{animation-from-opacity, 1}" },
    to: { opacity: "{animation-to-opacity, 0}" },
  },

  "scale-in": {
    from: { scale: "{animation-from-scale, 0.95}" },
    to: { scale: "{animation-to-scale, 1}" },
  },
  "scale-out": {
    from: { scale: "{animation-from-scale, 1}" },
    to: { scale: "{animation-to-scale, 0.95}" },
  },

  "collapse-height": {
    from: { height: "{animation-height}" },
    to: { height: "0" },
  },
  "collapse-width": {
    from: { width: "{animation-width}" },
    to: { width: "0" },
  },
  "expand-height": {
    from: { height: "0" },
    to: { height: "{animation-height}" },
  },
  "expand-width": {
    from: { width: "0" },
    to: { width: "{animation-width}" },
  },

  "slide-from-bottom-full": {
    from: { translate: "0 {animation-from, 100%}" },
    to: { translate: "0 {animation-to, 0}" },
  },
  "slide-from-left-full": {
    from: { translate: "{animation-from, -100%} 0" },
    to: { translate: "{animation-to, 0} 0" },
  },
  "slide-from-right-full": {
    from: { translate: "{animation-from, 100%} 0" },
    to: { translate: "{animation-to, 0} 0" },
  },
  "slide-from-top-full": {
    from: { translate: "0 {animation-from, -100%}" },
    to: { translate: "0 {animation-to, 0}" },
  },
  "slide-to-bottom-full": {
    from: { translate: "0 {animation-from, 0}" },
    to: { translate: "0 {animation-to, 100%}" },
  },
  "slide-to-left-full": {
    from: { translate: "{animation-from, 0} 0" },
    to: { translate: "{animation-to, -100%} 0" },
  },
  "slide-to-right-full": {
    from: { translate: "{animation-from, 0} 0" },
    to: { translate: "{animation-to, 100%} 0" },
  },
  "slide-to-top-full": {
    from: { translate: "0 {animation-from, 0}" },
    to: { translate: "0 {animation-to, -100%}" },
  },

  "slide-from-bottom": {
    from: { translate: "0 {animation-from, 0.5rem}" },
    to: { translate: "0 {animation-to, 0}" },
  },
  "slide-from-left": {
    from: { translate: "{animation-from, -0.5rem} 0" },
    to: { translate: "{animation-to, 0} 0" },
  },
  "slide-from-right": {
    from: { translate: "{animation-from, 0.5rem} 0" },
    to: { translate: "{animation-to, 0} 0" },
  },
  "slide-from-top": {
    from: { translate: "0 {animation-from, -0.5rem}" },
    to: { translate: "0 {animation-to, 0}" },
  },
  "slide-to-bottom": {
    from: { translate: "0 {animation-from, 0}" },
    to: { translate: "0 {animation-to, 0.5rem}" },
  },
  "slide-to-left": {
    from: { translate: "{animation-from, 0} 0" },
    to: { translate: "{animation-to, -0.5rem} 0" },
  },
  "slide-to-right": {
    from: { translate: "{animation-from, 0} 0" },
    to: { translate: "{animation-to, 0.5rem} 0" },
  },
  "slide-to-top": {
    from: { translate: "0 {animation-from, 0}" },
    to: { translate: "0 {animation-to, -0.5rem}" },
  },
})
