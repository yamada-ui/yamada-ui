import { defineStyles } from "../../core"

export const layerStyles = defineStyles.layerStyle({
  active: {
    opacity: 1,
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.4,
    _ripple: {
      display: "none",
    },
  },
  ghost: {
    bg: "transparent",
    color: "colorScheme.fg",
  },
  "ghost.hover": {
    bg: "colorScheme.ghost",
  },
  hover: {
    opacity: 0.8,
  },
  outline: {
    bg: "transparent",
    border: "1px solid {colorScheme.outline}",
    color: "colorScheme.outline",
  },
  "outline.hover": {
    bg: "colorScheme.ghost",
  },
  readOnly: {
    cursor: "default",
    _ripple: {
      display: "none",
    },
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
    border: "1px solid {colorScheme.muted}",
    color: "colorScheme.fg",
  },
  "surface.hover": {
    bg: "colorScheme.muted",
  },
})
