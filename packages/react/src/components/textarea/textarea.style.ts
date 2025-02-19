import { defineComponentStyle } from "../../core"

export const textareaStyle = defineComponentStyle({
  base: {
    appearance: "none",
    lineHeight: "short",
    minW: "0",
    position: "relative",
    py: "2",
    rounded: "l2",
    textAlign: "start",
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
    verticalAlign: "top",
    w: "full",
    _disabled: {
      layerStyle: "disabled",
    },
  },

  variants: {
    filled: {
      bg: "bg.panel",
      borderColor: "transparent",
      borderWidth: "1px",
      focusRingColor: "{focusBorderColor}",
      focusVisibleRing: "inside",
      _invalid: {
        borderColor: "{errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
    },
    flushed: {
      bg: "transparent",
      borderBottomColor: "colorScheme.muted",
      borderBottomWidth: "1px",
      borderRadius: "0",
      px: "0",
      _invalid: {
        borderColor: "{errorBorderColor}",
        _focusVisible: {
          boxShadow: "0px 1px 0px 0px {errorBorderColor}",
        },
      },
      _focusVisible: {
        borderColor: "{focusBorderColor}",
        boxShadow: "0px 1px 0px 0px {focusBorderColor}",
        outline: "none",
      },
    },
    outline: {
      borderColor: "colorScheme.muted",
      borderWidth: "1px",
      focusRingColor: "{focusBorderColor}",
      focusVisibleRing: "inside",
      _invalid: {
        borderColor: "{errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
    },
    unstyled: {
      h: "auto",
      px: "0",
      py: "0",
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      minH: "20",
      px: "2",
      py: "2",
    },
    sm: {
      fontSize: "sm",
      minH: "20",
      px: "2.5",
      py: "2",
    },
    md: {
      fontSize: "md",
      minH: "20",
      px: "3",
      py: "2",
    },
    lg: {
      fontSize: "lg",
      minH: "20",
      px: "3.5",
      py: "3",
    },
    xl: {
      fontSize: "xl",
      px: "4",
    },
    "2xl": {
      fontSize: "xl",
      px: "4",
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type TextareaStyle = typeof textareaStyle
