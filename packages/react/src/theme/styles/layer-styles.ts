import type { CSSModifierObject } from "../../core"

export const layerStyles: CSSModifierObject = {
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
    base: {
      bg: "transparent",
      color: "colorScheme.fg",
    },
    hover: {
      bg: "colorScheme.ghost",
    },
  },
  hover: {
    opacity: 0.8,
  },
  outline: {
    base: {
      bg: "transparent",
      border: "1px solid {colorScheme.outline}",
      color: "colorScheme.outline",
    },
    hover: {
      bg: "colorScheme.ghost",
    },
  },
  readOnly: {
    cursor: "default",
    _ripple: {
      display: "none",
    },
  },
  solid: {
    base: {
      bg: "colorScheme.solid",
      color: "colorScheme.contrast",
    },
    hover: {
      bg: "colorScheme.solid/80",
    },
  },
  subtle: {
    base: {
      bg: "colorScheme.subtle",
      color: "colorScheme.fg",
    },
    hover: {
      bg: "colorScheme.muted",
    },
  },
  surface: {
    base: {
      bg: "colorScheme.subtle",
      border: "1px solid {colorScheme.muted}",
      color: "colorScheme.fg",
    },
    hover: {
      bg: "colorScheme.muted",
    },
  },
}
