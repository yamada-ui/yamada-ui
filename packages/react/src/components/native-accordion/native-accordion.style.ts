import { defineComponentSlotStyle } from "../../core"

export const nativeAccordionStyle = defineComponentSlotStyle({
  base: {
    button: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      focusVisibleRing: "inside",
      listStyle: "none",
      px: "4",
      py: "3",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
      _disabled: { layerStyle: "disabled" },
    },
    icon: {
      color: "fg.subtle",
      fontSize: "xl",
      ml: "auto",
      transformOrigin: "center",
      transitionDuration: "moderate",
      transitionProperty: "transform",
      _groupOpen: { transform: "rotate(180deg)" },
    },
    item: { overflowAnchor: "none" },
    panel: { px: "4", _groupOpen: { pb: "3" } },
    root: { w: "full" },
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
          _detailsContent: {
            transition: "content-visibility 0.4s allow-discrete",
          },
        },
        panel: {
          "& > div": { overflow: "hidden" },
          display: "grid",
          gridTemplateRows: "0fr",
          transitionDuration: "slow",
          transitionProperty: "grid-template-rows",
          _groupOpen: { gridTemplateRows: "1fr" },
        },
      },
    },
  },

  variants: {
    panel: {
      button: { rounded: "l2" },
      item: { layerStyle: "panel", rounded: "l2", _notFirst: { mt: "md" } },
    },
    plain: {
      item: { borderTopWidth: "1px", _last: { borderBottomWidth: "1px" } },
    },
  },

  defaultProps: {
    variant: "plain",
    animate: true,
  },
})

export type NativeAccordionStyle = typeof nativeAccordionStyle
