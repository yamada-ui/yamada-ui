import { defineComponentSlotStyle } from "../../core"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    button: {
      "&[aria-disabled=true]": {
        cursor: "default",
      },
      alignItems: "center",
      display: "inline-flex",
      focusVisibleRing: "inside",
      px: "4",
      py: "3",
      transitionDuration: "moderate",
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
      transitionDuration: "moderate",
      transitionProperty: "transform",
      _expanded: {
        transform: "rotate(180deg)",
      },
      _disabled: {
        layerStyle: "disabled",
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
    panel: {
      button: {
        rounded: "l2",
      },
      item: {
        layerStyle: "panel",
        rounded: "l2",
        _notFirst: {
          mt: "md",
        },
      },
    },
    plain: {
      item: {
        borderTopWidth: "1px",
        _last: {
          borderBottomWidth: "1px",
        },
      },
    },
  },

  defaultProps: {
    variant: "plain",
  },
})

export type AccordionStyle = typeof accordionStyle
