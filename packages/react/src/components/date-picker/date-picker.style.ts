import { defineComponentSlotStyle } from "../../core"
import { autocompleteStyle } from "../autocomplete"
import { nativeSelectStyle } from "../native-select"

export const datePickerStyle = defineComponentSlotStyle({
  base: {
    ...nativeSelectStyle.base,
    adjust: { fieldSizing: "content", flex: "inherit", w: "fit-content" },
    content: { p: "1" },
    field: autocompleteStyle.base?.field,
    input: autocompleteStyle.base?.input,
    separator: { color: "fg.subtle", mx: "{gap}" },
  },

  variants: {
    filled: autocompleteStyle.variants?.filled,
    flushed: autocompleteStyle.variants?.flushed,
    outline: autocompleteStyle.variants?.outline,
    plain: autocompleteStyle.variants?.plain,
  },

  sizes: {
    xs: nativeSelectStyle.sizes?.xs,
    sm: nativeSelectStyle.sizes?.sm,
    md: nativeSelectStyle.sizes?.md,
    lg: nativeSelectStyle.sizes?.lg,
    xl: nativeSelectStyle.sizes?.xl,
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type DatePickerStyle = typeof datePickerStyle
