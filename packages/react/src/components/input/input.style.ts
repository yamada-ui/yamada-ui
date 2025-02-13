import { defineComponentStyle } from "../../core"

const getInputHeightStyle = (height: string) => ({
  "&:has(+ [data-input-element])": {
    pe: height,
  },
  "& ~ [data-input-element]": {
    minW: height,
  },
  "[data-input-element] + &": {
    ps: height,
  },
  "[data-input-element]:has(~ &)": {
    minW: height,
  },
  minH: height,
})

export const inputStyle = defineComponentStyle({
  base: {
    appearance: "none",
    minW: "0",
    position: "relative",
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
  },

  sizes: {
    xs: {
      fontSize: "xs",
      px: "2",
      ...getInputHeightStyle("{sizes.8}"),
    },
    sm: {
      fontSize: "sm",
      px: "2.5",
      ...getInputHeightStyle("{sizes.9}"),
    },
    md: {
      fontSize: "md",
      px: "3",
      ...getInputHeightStyle("{sizes.10}"),
    },
    lg: {
      fontSize: "lg",
      px: "3.5",
      ...getInputHeightStyle("{sizes.11}"),
    },
    xl: {
      fontSize: "xl",
      px: "4",
      ...getInputHeightStyle("{sizes.12}"),
    },
    "2xl": {
      fontSize: "xl",
      px: "4",
      ...getInputHeightStyle("{sizes.14}"),
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type InputStyle = typeof inputStyle
