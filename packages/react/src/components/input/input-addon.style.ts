import { defineComponentStyle } from "../../core"
import { inputStyle } from "./input.style"

export const inputAddonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    rounded: "l2",
    transitionDuration: "moderate",
    transitionProperty: "common",
    vars: [
      {
        name: "focusBorderColor",
        token: "colors",
        value: "colorScheme.outline",
      },
      {
        name: "errorBorderColor",
        token: "colors",
        value: "border.error",
      },
    ],
    w: "auto",
    whiteSpace: "nowrap",
    _disabled: {
      layerStyle: "disabled",
    },
  },

  variants: {
    filled: {
      bg: "colorScheme.muted",
      borderColor: "transparent",
      borderWidth: "1px",
    },
    flushed: {
      bg: "transparent",
      borderBottomColor: "colorScheme.muted",
      borderBottomWidth: "1px",
      borderRadius: "0",
      _peerFocusVisible: {
        borderColor: "{focusBorderColor}",
        boxShadow: "0px 1px 0px 0px {focusBorderColor}",
      },
      _peerInvalid: {
        borderColor: "{errorBorderColor}",
        _peerFocusVisible: {
          boxShadow: "0px 1px 0px 0px {errorBorderColor}",
        },
      },
    },
    outline: {
      layerStyle: "surface",
    },
  },

  sizes: {
    ...inputStyle.sizes,
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type InputAddonStyle = typeof inputAddonStyle
