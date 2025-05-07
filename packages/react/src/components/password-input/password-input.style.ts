import { defineComponentSlotStyle } from "../../core"
import { buttonStyle } from "../button"
import {
  getInputHeightStyle,
  getInputPaddingResetStyle,
  inputStyle,
} from "../input"

export const passwordInputStyle = defineComponentSlotStyle({
  base: {
    button: {
      ...buttonStyle.base,
      rounded: "l1",
      _readOnly: { cursor: "pointer" },
    },
    field: inputStyle.base,
    root: {},
  },

  variants: {
    filled: {
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
      field: inputStyle.variants?.filled,
    },
    flushed: {
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
      field: inputStyle.variants?.flushed,
      root: getInputPaddingResetStyle("& > input"),
    },
    outline: {
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
      field: inputStyle.variants?.outline,
    },
  },

  sizes: {
    xs: {
      button: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.xs.fontSize,
      },
      field: inputStyle.sizes?.xs,
      root: getInputHeightStyle(inputStyle.sizes?.xs.minH, "& > input"),
    },
    sm: {
      button: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.sm.fontSize,
      },
      field: inputStyle.sizes?.sm,
      root: getInputHeightStyle(inputStyle.sizes?.sm.minH, "& > input"),
    },
    md: {
      button: {
        boxSize: `calc({--input-height} - {spaces.2})`,
        fontSize: inputStyle.sizes?.md.fontSize,
      },
      field: inputStyle.sizes?.md,
      root: getInputHeightStyle(inputStyle.sizes?.md.minH, "& > input"),
    },
    lg: {
      button: {
        boxSize: `calc({--input-height} - {spaces.2.5})`,
        fontSize: inputStyle.sizes?.lg.fontSize,
      },
      field: inputStyle.sizes?.lg,
      root: getInputHeightStyle(inputStyle.sizes?.lg.minH, "& > input"),
    },
    xl: {
      button: {
        boxSize: `calc({--input-height} - {spaces.3})`,
        fontSize: inputStyle.sizes?.xl.fontSize,
      },
      field: inputStyle.sizes?.xl,
      root: getInputHeightStyle(inputStyle.sizes?.xl.minH, "& > input"),
    },
    "2xl": {
      button: {
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

export type PasswordInputStyle = typeof passwordInputStyle
