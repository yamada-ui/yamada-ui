import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isAccessible, isGray } from "@yamada-ui/utils"

export const SegmentedControl: ComponentMultiStyle<"SegmentedControl"> = {
  baseStyle: {
    button: {
      color: ["blackAlpha.800", "whiteAlpha.800"],
      fontWeight: "medium",
      transitionDuration: "ultra-slow",
      transitionProperty: "common",
      whiteSpace: "nowrap",
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        opacity: 0.7,
        _checked: {
          opacity: 1,
        },
      },
      _readOnly: { cursor: "default" },
    },
    container: {
      bg: ["blackAlpha.100", "whiteAlpha.50"],
      p: "1",
      _disabled: { cursor: "not-allowed" },
      _readOnly: { cursor: "default" },
    },
    cursor: {
      boxShadow: ["md", "dark-md"],
    },
  },

  sizes: {
    sm: {
      button: { fontSize: "sm", px: "2", py: "1" },
      container: { minW: "xs" },
    },
    md: {
      button: { fontSize: "md", px: "3", py: "1.5" },
      container: { minW: "sm" },
    },
    lg: {
      button: { px: "4", py: "2" },
      container: { minW: "md" },
    },
  },

  variants: {
    basic: ({ colorScheme: c = "gray" }) => ({
      button: {
        rounded: "md",
        _checked: {
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
      container: {
        rounded: "lg",
      },
      cursor: {
        bg: isGray(c)
          ? [`whiteAlpha.800`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        rounded: "md",
      },
    }),
    rounded: ({ colorScheme: c = "gray" }) => ({
      button: {
        rounded: "full",
        _checked: {
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
      container: {
        rounded: "full",
      },
      cursor: {
        bg: isGray(c)
          ? [`whiteAlpha.800`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        rounded: "full",
      },
    }),
  },

  defaultProps: {
    size: "md",
    variant: "basic",
  },
}
