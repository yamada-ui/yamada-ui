import type { CSSModifierObject } from "../../core"

export const layerStyles: CSSModifierObject = {
  disabled: {
    cursor: "not-allowed",
    opacity: 0.4,
  },
  ghost: {
    bg: "transparent",
    color: "colorScheme.fg",
  },
  "ghost.hover": {
    bg: "colorScheme.subtle",
  },
  outline: {
    bg: "transparent",
    border: "1px solid $colorScheme.outline",
    color: "colorScheme.outline",
  },
  "outline.hover": {
    bg: "colorScheme.subtle",
  },
  solid: {
    bg: "colorScheme.solid",
    color: "colorScheme.contrast",
  },
  "solid.hover": {
    bg: "colorScheme.solid/80",
  },
  subtle: {
    bg: "colorScheme.subtle",
    color: "colorScheme.fg",
  },
  "subtle.hover": {
    bg: "colorScheme.muted",
  },
  surface: {
    bg: "colorScheme.subtle",
    border: "1px solid $colorScheme.muted",
    color: "colorScheme.fg",
  },
  "surface.hover": {
    bg: "colorScheme.muted",
  },
}
