import { defineStyles } from "../../core"
import { visuallyHiddenAttributes } from "../../utils"

export const layerStyles = defineStyles.layerStyle({
  active: { opacity: 1 },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.4,
    _ripple: { display: "none" },
  },
  ghost: {
    bg: "transparent",
    border: "1px solid transparent",
    color: "colorScheme.outline",
  },
  "ghost.hover": {
    bg: "colorScheme.ghost",
  },
  hover: { opacity: 0.8 },
  outline: {
    bg: "transparent",
    border: "1px solid {colorScheme.muted}",
    color: "colorScheme.outline",
  },
  "outline.hover": {
    bg: "colorScheme.ghost",
  },
  panel: {
    bg: "bg.panel",
    borderColor: "border",
    borderWidth: "1px",
  },
  readOnly: {
    cursor: "default",
    _ripple: { display: "none" },
  },
  solid: {
    bg: "colorScheme.solid",
    border: "1px solid transparent",
    color: "colorScheme.contrast",
  },
  "solid.hover": {
    bg: "colorScheme.solid/80",
  },
  subtle: {
    bg: "colorScheme.subtle",
    border: "1px solid transparent",
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
  visuallyHidden: visuallyHiddenAttributes.style,
})
