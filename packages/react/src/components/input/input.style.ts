import type { CSSObject } from "../../core"
import { defineComponentStyle } from "../../core"
import { wrapWithKey } from "../../utils"

export const getInputPaddingResetStyle = (key?: string) =>
  ({
    "&:not(:has(+ [data-input-element]))": wrapWithKey({ pe: "0px" }, key),
    "&:not([data-input-element] + &)": wrapWithKey({ ps: "0px" }, key),
  }) satisfies CSSObject

export const getInputHeightStyle = (height?: string, key?: string) =>
  ({
    "&:has(+ [data-input-element])": wrapWithKey({ pe: height }, key),
    "& ~ [data-input-element]": { minW: height },
    "--height": height,
    "[data-input-element] + &": wrapWithKey({ ps: height }, key),
    "[data-input-element]:has(~ &)": { minW: height },
    minH: height,
  }) satisfies CSSObject

export const inputStyle = defineComponentStyle({
  base: {
    "--error-border-color": "colors.border.error",
    "--focus-border-color": "colorScheme.outline",
    appearance: "none",
    minW: "0",
    position: "relative",
    rounded: "l2",
    textAlign: "start",
    transitionDuration: "moderate",
    transitionProperty: "common",
    w: "full",
    _disabled: {
      layerStyle: "disabled",
    },
  },

  variants: {
    filled: {
      bg: "bg.panel",
      border: "1px solid transparent",
      focusRingColor: "{focus-border-color}",
      focusVisibleRing: "inside",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
    flushed: {
      bg: "transparent",
      borderBottomColor: "colorScheme.muted",
      borderBottomWidth: "1px",
      rounded: "0px",
      _focusVisible: {
        borderColor: "{focus-border-color}",
        boxShadow: "0px 1px 0px 0px {focus-border-color}",
        outline: "none",
      },
      _invalid: {
        borderColor: "{error-border-color}",
        _focusVisible: {
          boxShadow: "0px 1px 0px 0px {error-border-color}",
        },
      },
    },
    outline: {
      border: "1px solid {colorScheme.muted}",
      focusRingColor: "{focus-border-color}",
      focusVisibleRing: "inside",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
    plain: {
      focusRingColor: "{focus-border-color}",
      focusVisibleRing: "inside",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
  },

  sizes: {
    xs: {
      "--space-x": "spaces.2",
      "--space-y": "spaces.1.5",
      fontSize: "xs",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.8}"),
    },
    sm: {
      "--space-x": "spaces.2.5",
      "--space-y": "spaces.2",
      fontSize: "sm",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.9}"),
    },
    md: {
      "--space-x": "spaces.3",
      "--space-y": "spaces.2",
      fontSize: "md",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.10}"),
    },
    lg: {
      "--space-x": "spaces.3.5",
      "--space-y": "spaces.2.5",
      fontSize: "lg",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.11}"),
    },
    xl: {
      "--space-x": "spaces.4",
      "--space-y": "spaces.3",
      fontSize: "xl",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.12}"),
    },
    "2xl": {
      "--space-x": "spaces.4",
      "--space-y": "spaces.3",
      fontSize: "xl",
      px: "{space-x}",
      ...getInputHeightStyle("{sizes.14}"),
    },
  },

  compounds: [
    {
      css: getInputPaddingResetStyle(),
      variant: "flushed",
      layer: "variant",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type InputStyle = typeof inputStyle
