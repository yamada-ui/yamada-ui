import { defineComponentSlotStyle } from "../../core"
import { selectStyle } from "../select/select.style"

export const autocompleteStyle = defineComponentSlotStyle({
  base: {
    ...selectStyle.base,
    empty: selectStyle.base?.option,
  },

  variants: {
    filled: selectStyle.variants?.filled,
    flushed: selectStyle.variants?.flushed,
    outline: selectStyle.variants?.outline,
    plain: selectStyle.variants?.plain,
  },

  sizes: {
    xs: { ...selectStyle.sizes?.xs, empty: selectStyle.sizes?.xs.option },
    sm: { ...selectStyle.sizes?.sm, empty: selectStyle.sizes?.sm.option },
    md: { ...selectStyle.sizes?.md, empty: selectStyle.sizes?.md.option },
    lg: { ...selectStyle.sizes?.lg, empty: selectStyle.sizes?.lg.option },
    xl: { ...selectStyle.sizes?.xl, empty: selectStyle.sizes?.xl.option },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type AutocompleteStyle = typeof autocompleteStyle
