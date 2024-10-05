import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isAccessible, isGray, transparentizeColor } from "@yamada-ui/utils"

export const Pagination: ComponentMultiStyle<"Pagination"> = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
      },
    },
    dots: { pointerEvents: "none" },
    first: {},
    inner: {
      flex: 1,
    },
    item: {
      _disabled: {
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _focus: {
        outline: "none",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        _disabled: {
          bg: ["initial", "initial"],
        },
      },
      _selected: { cursor: "default", pointerEvents: "none" },
      color: ["blackAlpha.600", "whiteAlpha.700"],
      px: 1,
      rounded: "md",
      transitionDuration: "slower",
      transitionProperty: "common",
    },
    last: {},
    next: {},
    prev: {},
  },

  sizes: {
    xs: {
      container: {
        gap: "xs",
      },
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "xs",
        minH: 6,
        minW: 6,
      },
    },
    sm: {
      container: {
        gap: "xs",
      },
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "sm",
        minH: 7,
        minW: 7,
      },
    },
    md: {
      container: {
        gap: "sm",
      },
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "md",
        minH: 8,
        minW: 8,
      },
    },
    lg: {
      container: {
        gap: "sm",
      },
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "lg",
        minH: 10,
        minW: 10,
      },
    },
    xl: {
      container: {
        gap: "md",
      },
      inner: {
        gap: "md",
      },
      item: {
        fontSize: "xl",
        minH: 12,
        minW: 12,
      },
    },
  },

  variants: {
    ghost: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => {
      return {
        item: {
          _active: {
            bg: isGray(c)
              ? [`${c}.300`, `whiteAlpha.300`]
              : [`${c}.200`, transparentizeColor(`${c}.200`, 0.24)(t, m)],
          },
          _hover: {
            bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
          },
          _selected: {
            bg: isGray(c) ? undefined : "transparent",
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
            fontWeight: "semibold",
          },
        },
      }
    },
    outline: ({ colorScheme: c = "primary" }) => {
      return {
        dots: {
          border: "0",
        },
        item: {
          _active: {
            bg: ["blackAlpha.100", "whiteAlpha.100"],
          },
          _hover: {
            _disabled: {
              bg: ["initial", "initial"],
            },
            bg: ["blackAlpha.50", "whiteAlpha.50"],
          },
          _selected: {
            _hover: {
              bg: ["transparent", "transparent"],
            },
            bg: "transparent",
            borderColor: [`${c}.600`, `${c}.500`],
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
          },
          border: "1px solid",
          borderColor: "border",
        },
      }
    },
    solid: ({ colorScheme: c = "primary" }) => ({
      dots: {
        border: "0",
      },
      item: {
        _active: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
        _hover: {
          _disabled: {
            bg: ["initial", "initial"],
          },
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
        _selected: {
          _hover: {
            bg: isGray(c)
              ? [`${c}.100`, `${c}.800`]
              : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
          },
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          borderColor: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
        border: "1px solid",
        borderColor: "border",
      },
    }),
    unstyled: {
      _ripple: { display: "none" },
      container: { gap: 0 },
      inner: { gap: 0 },
      item: { bg: "none", color: "inherit", minH: "auto", minW: "auto" },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "solid",
  },
}
