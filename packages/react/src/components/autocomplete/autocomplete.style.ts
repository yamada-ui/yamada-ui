import { defineComponentSlotStyle } from "../../core"
import { selectStyle } from "../select"

export const autocompleteStyle = defineComponentSlotStyle({
  base: {
    ...selectStyle.base,
    empty: selectStyle.base?.option,
    field: {
      ...selectStyle.base?.field,
      cursor: "text",
      flexWrap: "wrap",
      gapY: "{gap}",
      py: "{gap}",
    },
    input: {
      "&[data-max]": { caretColor: "transparent" },
      flex: "1",
      focusVisibleRing: "none",
      _disabled: { cursor: "not-allowed" },
    },
  },

  variants: {
    filled: {
      ...selectStyle.variants?.filled,
      field: {
        ":has(input:focus)": selectStyle.variants?.filled.field._focus,
        ...selectStyle.variants?.filled.field,
      },
    },
    flushed: {
      ...selectStyle.variants?.flushed,
      field: {
        ":has(input:focus)": selectStyle.variants?.flushed.field._focus,
        ...selectStyle.variants?.flushed.field,
      },
    },
    outline: {
      ...selectStyle.variants?.outline,
      field: {
        ":has(input:focus)": selectStyle.variants?.outline.field._focus,
        ...selectStyle.variants?.outline.field,
      },
    },
    plain: {
      ...selectStyle.variants?.plain,
      field: {
        ":has(input:focus)": selectStyle.variants?.plain.field._focus,
        ...selectStyle.variants?.plain.field,
      },
    },
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
