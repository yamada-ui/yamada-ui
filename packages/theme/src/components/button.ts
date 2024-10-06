import type { ComponentStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  getColor,
  isAccessible,
  isArray,
  isGray,
  transparentizeColor,
} from "@yamada-ui/utils"

export const Button: ComponentStyle<"Button"> = {
  baseStyle: {
    cursor: "pointer",
    fontWeight: "semibold",
    rounded: "md",
    transitionDuration: "slower",
    transitionProperty: "common",
    _disabled: {
      boxShadow: "none",
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _focus: {
      outline: "none",
    },
    _hover: {
      _disabled: {
        bg: ["initial", "initial"],
      },
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
      h: 6,
      lineHeight: get(t, "sizes.6"),
      minW: 6,
      px: 2,
    }),
    sm: ({ theme: t }) => ({
      fontSize: "sm",
      h: 8,
      lineHeight: get(t, "sizes.8"),
      minW: 8,
      px: 3,
    }),
    md: ({ theme: t }) => ({
      fontSize: "md",
      h: 10,
      lineHeight: get(t, "sizes.10"),
      minW: 10,
      px: 4,
    }),
    lg: ({ theme: t }) => ({
      fontSize: "lg",
      h: 12,
      lineHeight: get(t, "sizes.12"),
      minW: 12,
      px: 6,
    }),
  },

  variants: {
    ghost: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor: ec = ["danger.500", "danger.400"],
      theme: t,
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: "transparent",
        color: isGray(c)
          ? ["blackAlpha.800", "whiteAlpha.700"]
          : [`${c}.600`, `${c}.500`],
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
        _hover: {
          bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
        },
        _invalid: {
          border: "1px solid",
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
      }
    },
    link: ({ colorScheme: c = "gray" }) => ({
      color: [`${c}.600`, `${c}.500`],
      height: "auto",
      lineHeight: "normal",
      padding: 0,
      verticalAlign: "baseline",
      _active: {
        color: [`${c}.700`, `${c}.600`],
        _disabled: {
          color: [`${c}.600`, `${c}.500`],
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        textDecoration: "underline",
        _disabled: {
          textDecoration: "none",
        },
      },
      _ripple: {
        display: "none",
      },
    }),
    outline: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor: ec = ["danger.500", "danger.400"],
      theme: t,
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: "transparent",
        border: "1px solid",
        borderColor: [`${c}.600`, `${c}.500`],
        color: isGray(c)
          ? ["blackAlpha.800", "whiteAlpha.700"]
          : [`${c}.600`, `${c}.500`],
        _focusVisible: {
          boxShadow: "outline",
          _invalid: {
            borderColor: "transparent",
          },
        },
        _hover: {
          bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
        },
        _invalid: {
          borderColor: [errorBorderColor, errorBorderColor],
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
      }
    },
    solid: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor: ec = ["danger.500", "danger.400"],
      theme: t,
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
        _hover: {
          bg: isGray(c)
            ? [`${c}.100`, `${c}.800`]
            : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
          _disabled: {
            bg: isGray(c)
              ? [`${c}.50`, `${c}.700`]
              : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          },
        },
        _invalid: {
          border: "1px solid",
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
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
    variant: "solid",
  },
}
