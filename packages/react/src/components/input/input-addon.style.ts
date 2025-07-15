import { defineComponentStyle } from "../../core"
import { inputStyle } from "./input.style"

export const inputAddonStyle = defineComponentStyle({
  base: {
    "--error-border-color": "colors.border.error",
    "--focus-border-color": "colorScheme.outline",
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    rounded: "l2",
    transitionDuration: "moderate",
    transitionProperty: "common",
    w: "auto",
    whiteSpace: "nowrap",
    _disabled: {
      layerStyle: "disabled",
    },
  },

  variants: {
    filled: {
      layerStyle: "surface",
      border: "1px solid transparent",
    },
    flushed: {
      bg: "transparent",
      borderBottomColor: "colorScheme.muted",
      borderBottomWidth: "1px",
      color: "colorScheme.fg",
      rounded: "0px",
      _peerFocusVisible: {
        borderColor: "{focus-border-color}",
        boxShadow: "0px 1px 0px 0px {focus-border-color}",
      },
      _peerInvalid: {
        borderColor: "{error-border-color}",
        _peerFocusVisible: {
          boxShadow: "0px 1px 0px 0px {error-border-color}",
        },
      },
    },
    outline: {
      layerStyle: "surface",
    },
    plain: {},
  },

  sizes: inputStyle.sizes,

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type InputAddonStyle = typeof inputAddonStyle
