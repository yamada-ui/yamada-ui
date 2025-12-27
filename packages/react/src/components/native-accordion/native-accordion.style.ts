import { defineComponentSlotStyle } from "../../core"

export const nativeAccordionStyle = defineComponentSlotStyle({
  base: {
    button: {
      "&::-webkit-details-marker": {
        display: "none",
      },
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      listStyle: "none",
      px: "4",
      py: "3",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
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
      px: "4",
      _expanded: {
        pb: "3",
      },
    },
    root: {
      w: "full",
    },
  },

  props: {
    /**
     * If `true`, animate the accordion items when they are expanded or collapsed.
     *
     * @default true
     */
    animate: {
      true: {
        item: {
          "&::details-content": {
            opacity: 0,
            transition: "content-visibility 0.4s allow-discrete, opacity 0.4s",
          },
          "&[open]::details-content": {
            opacity: 1,
          },
        },
        panel: {
          "& > div": {
            overflow: "hidden",
          },
          display: "grid",
          gridTemplateRows: "0fr",
          opacity: 0,
          transitionDuration: "moderate",
          transitionProperty: "grid-template-rows, opacity",
          _expanded: {
            gridTemplateRows: "1fr",
            opacity: 1,
          },
        },
      },
    },
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
    animate: true,
  },
})

export type NativeAccordionStyle = typeof nativeAccordionStyle
