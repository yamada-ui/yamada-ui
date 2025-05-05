import type { CSSObject } from "../../core"
import { defineComponentStyle } from "../../core"
import { wrapWithKey } from "../../utils"

export const getInputHeightStyle = (height?: string, key?: string) =>
  ({
    "&:has(+ [data-input-element])": wrapWithKey({ pe: height }, key),
    "& ~ [data-input-element]": { minW: height },
    "--input-height": height,
    "[data-input-element] + &": wrapWithKey({ ps: height }, key),
    "[data-input-element]:has(~ &)": { minW: height },
    minH: height,
  }) satisfies CSSObject

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
      _focusVisible: {
        borderColor: "{focusBorderColor}",
        boxShadow: "0px 1px 0px 0px {focusBorderColor}",
        outline: "none",
      },
      _invalid: {
        borderColor: "{errorBorderColor}",
        _focusVisible: {
          boxShadow: "0px 1px 0px 0px {errorBorderColor}",
        },
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
      "--input-space-x": "{spaces.2}",
      "--input-space-y": "{spaces.1.5}",
      fontSize: "xs",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.8}"),
    },
    sm: {
      "--input-space-x": "{spaces.2.5}",
      "--input-space-y": "{spaces.2}",
      fontSize: "sm",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.9}"),
    },
    md: {
      "--input-space-x": "{spaces.3}",
      "--input-space-y": "{spaces.2}",
      fontSize: "md",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.10}"),
    },
    lg: {
      "--input-space-x": "{spaces.3.5}",
      "--input-space-y": "{spaces.2.5}",
      fontSize: "lg",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.11}"),
    },
    xl: {
      "--input-space-x": "{spaces.4}",
      "--input-space-y": "{spaces.3}",
      fontSize: "xl",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.12}"),
    },
    "2xl": {
      "--input-space-x": "{spaces.4}",
      "--input-space-y": "{spaces.3}",
      fontSize: "xl",
      px: "{--input-space-x}",
      ...getInputHeightStyle("{sizes.14}"),
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type InputStyle = typeof inputStyle
