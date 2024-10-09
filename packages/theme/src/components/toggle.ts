import type { ComponentStyle } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  isAccessible,
  isGray,
  shadeColor,
  transparentizeColor,
} from "@yamada-ui/utils"

export const Toggle: ComponentStyle<"Toggle"> = {
  baseStyle: {
    cursor: "pointer",
    rounded: "md",
    transitionDuration: "slower",
    transitionProperty: "common",
    _disabled: {
      boxShadow: "none",
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
  },

  sizes: {
    xs: ({ theme: t }) => ({
      fontSize: "xs",
      lineHeight: get(t, "sizes.6"),
      minBoxSize: 6,
    }),
    sm: ({ theme: t }) => ({
      fontSize: "sm",
      lineHeight: get(t, "sizes.8"),
      minBoxSize: 8,
    }),
    md: ({ theme: t }) => ({
      fontSize: "md",
      lineHeight: get(t, "sizes.10"),
      minBoxSize: 10,
    }),
    lg: ({ theme: t }) => ({
      fontSize: "lg",
      lineHeight: get(t, "sizes.12"),
      minBoxSize: 12,
    }),
  },

  variants: {
    outline: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => {
      return {
        border: "1px solid",
        borderColor: "border",
        _focusVisible: {
          boxShadow: "outline",
          _invalid: {
            borderColor: "transparent",
          },
        },
        _hover: {
          bg: [
            isGray(c) ? `blackAlpha.200` : `${c}.50`,
            transparentizeColor(`${c}.500`, 0.12)(t, m),
          ],
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
          borderColor: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
        },
      }
    },
    solid: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => {
      return {
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
        _hover: {
          bg: [
            isGray(c) ? `blackAlpha.200` : `${c}.100`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.100`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      }
    },
    subtle: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => {
      return {
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
        _hover: {
          bg: [
            isGray(c) ? `blackAlpha.200` : `${c}.50`,
            transparentizeColor(`${c}.500`, 0.12)(t, m),
          ],
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
        },
      }
    },
    unstyled: {
      bg: "none",
      color: "inherit",
      display: "inline",
      lineHeight: "inherit",
      m: 0,
      p: 0,
      _ripple: {
        display: "none",
      },
    },
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "subtle",
  },
}
