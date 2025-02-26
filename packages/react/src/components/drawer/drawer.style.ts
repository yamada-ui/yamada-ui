import { defineComponentSlotStyle } from "../../core"
import { modalStyle } from "../modal"

export const drawerStyle = defineComponentSlotStyle({
  base: {
    ...modalStyle.base,
    body: {
      ...modalStyle.base?.body,
      overflow: "auto",
    },
    content: {
      ...modalStyle.base?.content,
      position: "fixed",
      rounded: "l5",
    },
    dragBar: {
      bg: "bg.subtle",
      position: "absolute",
      rounded: "full",
    },
  },

  props: {
    /**
     * The placement of the drawer.
     *
     * @default 'right'
     */
    placement: {
      bottom: {
        content: { maxW: "full", roundedBottom: "0" },
        dragBar: {
          left: "50%",
          minH: "2",
          top: "md",
          transform: "translateX(-50%)",
          w: "3xs",
        },
      },
      left: {
        content: { roundedLeft: "0" },
        dragBar: {
          h: "3xs",
          minW: "2",
          right: "md",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      right: {
        content: { roundedRight: "0" },
        dragBar: {
          h: "3xs",
          left: "md",
          minW: "2",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      top: {
        content: { maxW: "full", roundedTop: "0" },
        dragBar: {
          bottom: "md",
          left: "50%",
          minH: "2",
          transform: "translateX(-50%)",
          w: "3xs",
        },
      },
    },
  },

  sizes: {
    xs: { content: { maxW: "xs" } },
    sm: { content: { maxW: "sm" } },
    md: { content: { maxW: "md" } },
    lg: { content: { maxW: "lg" } },
    xl: { content: { maxW: "xl" } },
    "2xl": { content: { maxW: "2xl" } },
    "3xl": { content: { maxW: "3xl" } },
    "4xl": { content: { maxW: "4xl" } },
    "5xl": { content: { maxW: "5xl" } },
    "6xl": { content: { maxW: "6xl" } },
    full: { content: { minH: "dvh", minW: "vw", rounded: "0" } },
  },

  compounds: [
    {
      css: {
        content: {
          pb: "md",
          _after: {
            bg: "bg.panel",
            display: "block",
            h: "dvh",
            left: "0",
            position: "absolute",
            right: "0",
            top: "calc(-100dvh + 1px)",
            w: "full",
          },
        },
      },
      closeOnDrag: true,
      placement: "top",
      withDragBar: true,
    },
    {
      css: {
        content: {
          pt: "md",
          _after: {
            bg: "bg.panel",
            bottom: "calc(-100dvh + 1px)",
            display: "block",
            h: "dvh",
            left: "0",
            position: "absolute",
            right: "0",
            w: "full",
          },
        },
      },
      closeOnDrag: true,
      placement: "bottom",
      withDragBar: true,
    },
    {
      css: {
        content: {
          ps: "md",
          _after: {
            bg: "bg.panel",
            bottom: "0",
            display: "block",
            h: "dvh",
            position: "absolute",
            right: "calc(-100% + 1px)",
            top: "0",
            w: "full",
          },
        },
      },
      closeOnDrag: true,
      placement: "right",
      withDragBar: true,
    },
    {
      css: {
        content: {
          pe: "md",
          _after: {
            bg: "bg.panel",
            bottom: "0",
            display: "block",
            h: "dvh",
            left: "calc(-100% + 1px)",
            position: "absolute",
            top: "0",
            w: "full",
          },
        },
      },
      closeOnDrag: true,
      placement: "left",
      withDragBar: true,
    },
  ],

  defaultProps: {
    size: "lg",
    placement: "right",
  },
})

export type DrawerStyle = typeof drawerStyle
