import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Rating: ComponentMultiStyle = {
  baseStyle: ({ colorScheme: c = "yellow" }) => ({
    container: {
      w: "max-content",
    },
    group: {
      position: "relative",
    },
    item: {
      cursor: "pointer",
      rounded: "sm",
      color: ["blackAlpha.400", "whiteAlpha.300"],
      outline: "none",
      transitionProperty: "color",
      transitionDuration: "normal",
      _notLast: {
        position: "absolute",
        top: 0,
        left: 0,
      },
      _readOnly: {
        cursor: "default",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _filled: {
        color: [`${c}.500`, `${c}.600`],
      },
      _active: {
        color: [`${c}.500`, `${c}.600`],
      },
    },
    icon: {
      fill: "currentColor",
    },
  }),

  sizes: {
    xs: {
      icon: {
        boxSize: "3.5",
      },
    },
    sm: {
      icon: {
        boxSize: "4",
      },
    },
    md: {
      icon: {
        boxSize: "5",
      },
    },
    lg: {
      icon: {
        boxSize: "6",
      },
    },
    xl: {
      icon: {
        boxSize: "7",
      },
    },
  },

  defaultProps: {
    size: "md",
    colorScheme: "yellow",
  },
}
