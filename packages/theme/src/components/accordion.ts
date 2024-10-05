import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Accordion: ComponentMultiStyle<"Accordion"> = {
  baseStyle: {
    button: {
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _nativeDisabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      px: "4",
      py: "3",
      transitionDuration: "normal",
      transitionProperty: "common",
    },
    container: {},
    icon: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
      fontSize: "1.25em",
      ml: "auto",
    },
    item: {},
    panel: {
      pb: "3",
      px: "4",
    },
  },

  variants: {
    basic: {
      button: {
        "&:hover:not(:disabled):not([aria-disabled=true])": {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
      item: {
        _last: {
          borderBottomWidth: "1px",
        },
        borderColor: "inherit",
        borderTopWidth: "1px",
      },
    },
    card: {
      button: {
        _hover: {
          "&:hover:not(:disabled):not([aria-disabled=true])": {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
          },
          _expanded: {
            bg: "none",
          },
        },
      },
      item: {
        _expanded: {
          bg: ["white", "black"],
        },
        _notFirst: {
          mt: "md",
        },
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        borderWidth: "1px",
        rounded: "md",
      },
    },
    unstyled: {},
  },

  defaultProps: {
    variant: "basic",
  },
}
