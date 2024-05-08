import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Tree: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    item: {},
    content: {
      py: "3",
      px: "4",
    },
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      py: "3",
      px: "4",
    },
    panel: {},
    icon: {
      fontSize: "1.25em",
      color: ["blackAlpha.600", "whiteAlpha.700"],
    },
  },

  variants: {
    basic: {
      item: {},
      button: {},
    },
    outline: {
      container: {
        borderWidth: "1px",
      },
      item: {
        _notLast: { borderBottomWidth: "1px" },
      },
      button: {},
      panel: {
        borderTopWidth: "1px",
      },
    },
    unstyled: {},
  },

  defaultProps: {
    variant: "basic",
  },
}
