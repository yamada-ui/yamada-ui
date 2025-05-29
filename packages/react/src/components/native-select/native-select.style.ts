import { defineComponentSlotStyle } from "../../core"
import {
  getInputHeightStyle,
  getInputPaddingResetStyle,
  inputStyle,
} from "../input"

export const nativeSelectStyle = defineComponentSlotStyle({
  base: {
    field: { ...inputStyle.base, _readOnly: { pointerEvents: "none" } },
    icon: {
      alignItems: "center",
      color: "colorScheme.outline",
      display: "inline-flex",
      justifyContent: "center",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    option: {},
    optionGroup: {},
    root: {},
  },

  variants: {
    filled: {
      field: inputStyle.variants?.filled,
    },
    flushed: {
      field: inputStyle.variants?.flushed,
      root: getInputPaddingResetStyle("& > select"),
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
      field: inputStyle.sizes?.xs,
      icon: {
        fontSize: inputStyle.sizes?.xs.fontSize,
      },
      root: getInputHeightStyle(inputStyle.sizes?.xs.minH, "& > select"),
    },
    sm: {
      field: inputStyle.sizes?.sm,
      icon: {
        fontSize: inputStyle.sizes?.sm.fontSize,
      },
      root: getInputHeightStyle(inputStyle.sizes?.sm.minH, "& > select"),
    },
    md: {
      field: inputStyle.sizes?.md,
      icon: {
        fontSize: inputStyle.sizes?.md.fontSize,
      },
      root: getInputHeightStyle(inputStyle.sizes?.md.minH, "& > select"),
    },
    lg: {
      field: inputStyle.sizes?.lg,
      icon: {
        fontSize: inputStyle.sizes?.lg.fontSize,
      },
      root: getInputHeightStyle(inputStyle.sizes?.lg.minH, "& > select"),
    },
    xl: {
      field: inputStyle.sizes?.xl,
      icon: {
        fontSize: inputStyle.sizes?.xl.fontSize,
      },
      root: getInputHeightStyle(inputStyle.sizes?.xl.minH, "& > select"),
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type NativeSelectStyle = typeof nativeSelectStyle
