import { defineComponentSlotStyle } from "../../core"
import { buttonStyle } from "../button"
import {
  getInputHeightStyle,
  getInputPaddingResetStyle,
  inputStyle,
} from "../input"

export const numberInputStyle = defineComponentSlotStyle({
  base: {
    button: {
      ...buttonStyle.base,
      flex: "1",
      lineHeight: "1",
      rounded: "l1",
    },
    control: {
      display: "flex",
      flexDirection: "column",
    },
    decrement: {},
    field: inputStyle.base,
    increment: {},
    root: {},
  },

  variants: {
    base: {
      button: {
        layerStyle: "ghost",
        focusVisibleRing: "none",
        _hover: {
          layerStyle: "ghost.hover",
        },
        _focusVisible: {
          layerStyle: "ghost.hover",
        },
      },
    },

    filled: {
      field: inputStyle.variants?.filled,
    },
    flushed: {
      field: inputStyle.variants?.flushed,
      root: getInputPaddingResetStyle("& > input"),
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
      control: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.xs.fontSize,
      },
      field: inputStyle.sizes?.xs,
      root: getInputHeightStyle(inputStyle.sizes?.xs.minH, "& > input"),
    },
    sm: {
      control: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.sm.fontSize,
      },
      field: inputStyle.sizes?.sm,
      root: getInputHeightStyle(inputStyle.sizes?.sm.minH, "& > input"),
    },
    md: {
      control: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.md.fontSize,
      },
      field: inputStyle.sizes?.md,
      root: getInputHeightStyle(inputStyle.sizes?.md.minH, "& > input"),
    },
    lg: {
      control: {
        boxSize: `calc({--input-height} - {spaces.2.5})`,
        fontSize: inputStyle.sizes?.lg.fontSize,
      },
      field: inputStyle.sizes?.lg,
      root: getInputHeightStyle(inputStyle.sizes?.lg.minH, "& > input"),
    },
    xl: {
      control: {
        boxSize: `calc({--input-height} - {spaces.3})`,
        fontSize: inputStyle.sizes?.xl.fontSize,
      },
      field: inputStyle.sizes?.xl,
      root: getInputHeightStyle(inputStyle.sizes?.xl.minH, "& > input"),
    },
    "2xl": {
      control: {
        boxSize: `calc({--input-height} - {spaces.3})`,
        fontSize: inputStyle.sizes?.["2xl"].fontSize,
      },
      field: inputStyle.sizes?.["2xl"],
      root: getInputHeightStyle(inputStyle.sizes?.["2xl"]?.minH, "& > input"),
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type NumberInputStyle = typeof numberInputStyle
