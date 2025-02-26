import type { ComponentMultiStyle } from "../../core"
import { isAccessible, isGray } from "../../utils"

export const SegmentedControl: ComponentMultiStyle<"SegmentedControl"> = {
  baseStyle: {
    button: {
      alignItems: "center",
      color: ["blackAlpha.800", "whiteAlpha.800"],
      cursor: "pointer",
      display: "inline-flex",
      flex: "1 1 0%",
      fontWeight: "medium",
      justifyContent: "center",
      position: "relative",
      transitionDuration: "ultra-slow",
      transitionProperty: "common",
      whiteSpace: "nowrap",
      _hover: {
        opacity: 0.7,
        _checked: {
          opacity: 1,
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _readOnly: { cursor: "default" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    },
    container: {
      alignItems: "center",
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      display: "inline-flex",
      p: "1",
      _readOnly: { cursor: "default" },
      _disabled: { cursor: "not-allowed" },
    },
    cursor: {
      boxShadow: ["md", "dark-md"],
      h: "100%",
      position: "absolute",
      w: "100%",
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
          ? [`white`, `black`]
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
          ? [`white`, `black`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        rounded: "full",
      },
    }),
  },

  sizes: {
    sm: {
      button: { fontSize: "sm", px: "2", py: "0.5" },
      container: { minW: "xs" },
    },
    md: {
      button: { fontSize: "md", px: "3", py: "1" },
      container: { minW: "sm" },
    },
    lg: {
      button: { fontSize: "md", px: "4", py: "1.5" },
      container: { minW: "md" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "basic",
  },
}
