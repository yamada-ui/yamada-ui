import type { ThemeTransitionTokens } from "@yamada-ui/core"

export const transitions: ThemeTransitionTokens = {
  duration: {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },

  easing: {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  },

  property: {
    background: "background-color, background-image, background-position",
    colors: "background-color, border-color, color, fill, stroke",
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    dimensions: "width, height",
    position: "left, right, top, bottom",
  },
}
