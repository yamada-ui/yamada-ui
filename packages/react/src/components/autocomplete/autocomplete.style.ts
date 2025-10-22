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
        ...selectStyle.variants?.filled.field,
        "&:focus:not([data-disabled])":
          selectStyle.variants?.filled.field._focus,
        ":has(input:focus)": selectStyle.variants?.filled.field._focus,
      },
    },
    flushed: {
      ...selectStyle.variants?.flushed,
      field: {
        ...selectStyle.variants?.flushed.field,
        "&:focus:not([data-disabled])":
          selectStyle.variants?.flushed.field._focus,
        ":has(input:focus)": selectStyle.variants?.flushed.field._focus,
      },
    },
    outline: {
      ...selectStyle.variants?.outline,
      field: {
        ...selectStyle.variants?.outline.field,
        "&:focus:not([data-disabled])":
          selectStyle.variants?.outline.field._focus,
        ":has(input:focus)": selectStyle.variants?.outline.field._focus,
      },
    },
    plain: {
      ...selectStyle.variants?.plain,
      field: {
        ...selectStyle.variants?.plain.field,
        "&:focus:not([data-disabled])":
          selectStyle.variants?.plain.field._focus,
        ":has(input:focus)": selectStyle.variants?.plain.field._focus,
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
