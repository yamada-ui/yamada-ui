import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isAccessible, isGray, transparentizeColor } from "@yamada-ui/utils"

export const Pagination: ComponentMultiStyle<"Pagination"> = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
      },
    },
    ellipsis: { pointerEvents: "none" },
    first: {},
    inner: {},
    item: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
      px: 1,
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
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        _disabled: {
          bg: ["initial", "initial"],
        },
      },
      _selected: { cursor: "default", pointerEvents: "none" },
    },
    last: {},
    next: {},
    prev: {},
  },

  variants: {
    ghost: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => {
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
        ellipsis: {
          border: "0",
        },
        item: {
          border: "1px solid",
          borderColor: "border",
          _active: {
            bg: ["blackAlpha.100", "whiteAlpha.100"],
          },
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: {
              bg: ["initial", "initial"],
            },
          },
          _selected: {
            bg: "transparent",
            borderColor: [`${c}.600`, `${c}.500`],
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
            _hover: {
              bg: ["transparent", "transparent"],
            },
          },
        },
      }
    },
    solid: ({ colorScheme: c = "primary" }) => ({
      ellipsis: {
        border: "0",
      },
      item: {
        border: "1px solid",
        borderColor: "border",
        _active: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          borderColor: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
          _hover: {
            bg: isGray(c)
              ? [`${c}.100`, `${c}.800`]
              : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
          },
        },
      },
    }),
    unstyled: {
      inner: { gap: 0 },
      item: { bg: "none", color: "inherit", minH: "auto", minW: "auto" },
      _ripple: { display: "none" },
    },
  },

  sizes: {
    xs: {
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "xs",
        minH: 6,
        minW: 6,
        rounded: "sm",
      },
    },
    sm: {
      inner: {
        gap: "xs",
      },
      item: {
        fontSize: "sm",
        minH: 8,
        minW: 8,
        rounded: "md",
      },
    },
    md: {
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "md",
        minH: 10,
        minW: 10,
        rounded: "md",
      },
    },
    lg: {
      inner: {
        gap: "sm",
      },
      item: {
        fontSize: "lg",
        minH: 12,
        minW: 12,
        rounded: "md",
      },
    },
    xl: {
      inner: {
        gap: "md",
      },
      item: {
        fontSize: "xl",
        minH: 14,
        minW: 14,
        rounded: "lg",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "sm",
    variant: "solid",
  },
}
