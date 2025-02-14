import type { ComponentMultiStyle } from "../../core"

export const Rating: ComponentMultiStyle<"Rating"> = {
  baseStyle: ({ colorScheme: c = "yellow" }) => ({
    container: {
      display: "flex",
      w: "max-content",
    },
    group: {
      position: "relative",
    },
    icon: {
      alignItems: "center",
      display: "inline-flex",
      fill: "currentColor",
      justifyContent: "center",
    },
    item: {
      color: ["blackAlpha.300", "whiteAlpha.300"],
      cursor: "pointer",
      display: "block",
      lineHeight: "0",
      outline: "none",
      rounded: "sm",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _filled: {
        color: [`${c}.500`, `${c}.600`],
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _notLast: {
        left: 0,
        position: "absolute",
        top: 0,
      },
      _readOnly: {
        cursor: "default",
      },
    },
  }),

  sizes: {
    xs: {
      icon: {
        fontSize: "md",
      },
    },
    sm: {
      icon: {
        fontSize: "lg",
      },
    },
    md: {
      icon: {
        fontSize: "xl",
      },
    },
    lg: {
      icon: {
        fontSize: "2xl",
      },
    },
    xl: {
      icon: {
        fontSize: "3xl",
      },
    },
  },

  defaultProps: {
    colorScheme: "yellow",
    size: "md",
  },
}
