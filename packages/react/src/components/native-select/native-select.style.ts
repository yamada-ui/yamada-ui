import { defineComponentSlotStyle } from "../../core"
import {
  getInputHeightStyle,
  getInputPaddingStartResetStyle,
  inputStyle,
} from "../input"

export const nativeSelectStyle = defineComponentSlotStyle({
  base: {
    field: {
      ...inputStyle.base,
      "& > option, optgroup": { bg: "bg.float" },
      _readOnly: { pointerEvents: "none" },
    },
    icon: {
      alignItems: "center",
      color: "colorScheme.outline",
      display: "inline-flex",
      fontSize: "1em",
      justifyContent: "center",
      rounded: "l1",
      _disabled: { layerStyle: "disabled" },
    },
    root: {},
  },

  variants: {
    filled: {
      field: inputStyle.variants?.filled,
    },
    flushed: {
      field: inputStyle.variants?.flushed,
      root: getInputPaddingStartResetStyle(
        "& > :is(select, [role='combobox'])",
      ),
    },
    outline: {
      field: inputStyle.variants?.outline,
    },
    plain: {
      field: inputStyle.variants?.plain,
    },
  },

  sizes: {
    xs: {
      field: { ...inputStyle.sizes?.xs, fontSize: "1em" },
      root: {
        ...getInputHeightStyle(
          inputStyle.sizes?.xs.minH,
          "& > :is(select, [role='combobox'])",
        ),
        fontSize: inputStyle.sizes?.xs.fontSize,
      },
    },
    sm: {
      field: { ...inputStyle.sizes?.sm, fontSize: "1em" },
      root: {
        ...getInputHeightStyle(
          inputStyle.sizes?.sm.minH,
          "& > :is(select, [role='combobox'])",
        ),
        fontSize: inputStyle.sizes?.sm.fontSize,
      },
    },
    md: {
      field: { ...inputStyle.sizes?.md, fontSize: "1em" },
      root: {
        ...getInputHeightStyle(
          inputStyle.sizes?.md.minH,
          "& > :is(select, [role='combobox'])",
        ),
        fontSize: inputStyle.sizes?.md.fontSize,
      },
    },
    lg: {
      field: { ...inputStyle.sizes?.lg, fontSize: "1em" },
      root: {
        ...getInputHeightStyle(
          inputStyle.sizes?.lg.minH,
          "& > :is(select, [role='combobox'])",
        ),
        fontSize: inputStyle.sizes?.lg.fontSize,
      },
    },
    xl: {
      field: { ...inputStyle.sizes?.xl, fontSize: "1em" },
      root: {
        ...getInputHeightStyle(
          inputStyle.sizes?.xl.minH,
          "& > :is(select, [role='combobox'])",
        ),
        fontSize: inputStyle.sizes?.xl.fontSize,
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type NativeSelectStyle = typeof nativeSelectStyle
