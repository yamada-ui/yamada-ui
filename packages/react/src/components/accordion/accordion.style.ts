import { defineComponentSlotStyle } from "../../core"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    button: {
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      alignItems: "center",
      display: "inline-flex",
      outline: 0,
      px: "4",
      py: "3",
      transitionDuration: "normal",
      transitionProperty: "common",
      width: "100%",
      _focusVisible: {
        boxShadow: "outline",
      },
      _nativeDisabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    icon: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
      fontSize: "1.25em",
      ml: "auto",
      transformOrigin: "center",
      transition: "transform 0.2s",
      _disabled: {
        opacity: 0.4,
      },
      _expanded: {
        transform: "rotate(-180deg)",
      },
    },
    item: {
      overflowAnchor: "none",
    },
    panel: {
      pb: "3",
      px: "4",
    },
    root: {},
  },

  variants: {
    basic: {
      button: {
        "&:hover:not(:disabled):not([aria-disabled=true])": {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
      item: {
        borderColor: "inherit",
        borderTopWidth: "1px",
        _last: {
          borderBottomWidth: "1px",
        },
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
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        borderWidth: "1px",
        rounded: "md",
        _expanded: {
          bg: ["white", "black"],
        },
        _notFirst: {
          mt: "md",
        },
      },
    },
    unstyled: {},
  },

  defaultProps: {
    variant: "basic",
  },
})

export type AccordionStyle = typeof accordionStyle
