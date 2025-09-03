import { defineStyles } from "../../core"

export const textStyles = defineStyles.textStyle({
  ghost: {
    color: "colorScheme.outline",
  },
  mono: {
    fontFamily: "mono",
    fontWeight: "medium",
    letterSpacing: "widest",
    whiteSpace: "nowrap",
  },
  outline: {
    color: "colorScheme.outline",
  },
  solid: {
    color: "colorScheme.contrast",
  },
  subtle: {
    color: "colorScheme.fg",
  },
  surface: {
    color: "colorScheme.fg",
  },
})
