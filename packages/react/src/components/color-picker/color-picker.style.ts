import { defineComponentSlotStyle } from "../../core"
import { datePickerStyle } from "../date-picker"
import { nativeSelectStyle } from "../native-select"

export const colorPickerStyle = defineComponentSlotStyle({
  base: {
    ...nativeSelectStyle.base,
    colorSwatch: { w: "1.5em" },
    content: { maxW: "sm", p: "1" },
    eyeDropper: datePickerStyle.base?.icon,
    field: datePickerStyle.base?.field,
    input: datePickerStyle.base?.input,
  },

  variants: {
    filled: datePickerStyle.variants?.filled,
    flushed: { ...datePickerStyle.variants?.flushed, root: {} },
    outline: datePickerStyle.variants?.outline,
    plain: datePickerStyle.variants?.plain,
  },

  sizes: {
    xs: datePickerStyle.sizes?.xs,
    sm: datePickerStyle.sizes?.sm,
    md: datePickerStyle.sizes?.md,
    lg: datePickerStyle.sizes?.lg,
    xl: datePickerStyle.sizes?.xl,
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type ColorPickerStyle = typeof colorPickerStyle
