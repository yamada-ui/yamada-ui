import type { ComponentStyle } from "../../core"
import {
  isAccessible,
  isGray,
  shadeColor,
  transparentizeColor,
} from "../../utils"

export const Toggle: ComponentStyle<"Toggle"> = {
  baseStyle: {
    cursor: "pointer",
    rounded: "md",
    transitionDuration: "slower",
    transitionProperty: "common",
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
    _disabled: {
      boxShadow: "none",
      cursor: "not-allowed",
      opacity: 0.4,
    },
  },

  variants: {
    outline: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => ({
      border: "1px solid",
      borderColor: isGray(c)
        ? [`${c}.50`, `${c}.700`]
        : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
      color: isGray(c)
        ? ["blackAlpha.800", "whiteAlpha.700"]
        : [`${c}.600`, `${c}.500`],
      _selected: {
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
      },
      _hover: {
        bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
      },
      _focusVisible: {
        boxShadow: "outline",
        _invalid: {
          borderColor: "transparent",
        },
      },
    }),
    solid: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => ({
      _selected: {
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
      },
      _hover: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
      },
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
    }),
    subtle: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => ({
      _selected: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
      },
      _hover: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
      },
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
    }),
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

  sizes: {
    xs: {
      fontSize: "xs",
      lineHeight: "$sizes.6",
      minBoxSize: 6,
    },
    sm: {
      fontSize: "sm",
      lineHeight: "$sizes.8",
      minBoxSize: 8,
    },
    md: {
      fontSize: "md",
      lineHeight: "$sizes.10",
      minBoxSize: 10,
    },
    lg: {
      fontSize: "lg",
      lineHeight: "$sizes.12",
      minBoxSize: 12,
    },
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "subtle",
  },
}
