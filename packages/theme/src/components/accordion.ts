import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Accordion: ComponentMultiStyle<"Accordion"> = {
  baseStyle: {
    container: {},
    item: {},
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: {
        boxShadow: "outline",
      },
      _nativeDisabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      py: "3",
      px: "4",
    },
    panel: {
      px: "4",
      pb: "3",
    },
    icon: {
      ml: "auto",
      fontSize: "1.25em",
      color: ["blackAlpha.600", "whiteAlpha.700"],
    },
  },

  variants: {
    basic: {
      item: {
        borderTopWidth: "1px",
        borderColor: "inherit",
        _last: {
          borderBottomWidth: "1px",
        },
      },
      button: {
        "&:hover:not(:disabled):not([aria-disabled=true])": {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
    },
    card: {
      item: {
        borderWidth: "1px",
        rounded: "md",
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        _expanded: {
          bg: ["white", "black"],
        },
        _notFirst: {
          mt: "md",
        },
      },
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
    },
    unstyled: {},
  },

  defaultProps: {
    variant: "basic",
  },
}
