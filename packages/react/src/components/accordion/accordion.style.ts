import { defineComponentSlotStyle } from "../../core"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    button: {
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      alignItems: "center",
      display: "inline-flex",
      outline: "none",
      px: "4",
      py: "3",
      transitionDuration: "normal",
      transitionProperty: "common",
      w: "100%",
      _nativeDisabled: {
        layerStyle: "disabled",
      },
    },
    icon: {
      color: "fg.subtle",
      fontSize: "xl",
      ml: "auto",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      _disabled: {
        layerStyle: "disabled",
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
      item: {
        borderTopWidth: "1px",
        _last: {
          borderBottomWidth: "1px",
        },
      },
    },
    panel: {
      button: {
        rounded: "md",
      },
      item: {
        bg: "bg.panel",
        borderWidth: "1px",
        rounded: "md",
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
