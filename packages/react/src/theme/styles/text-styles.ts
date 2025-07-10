import { defineStyles } from "../../core"

export const textStyles = defineStyles.textStyle({
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
