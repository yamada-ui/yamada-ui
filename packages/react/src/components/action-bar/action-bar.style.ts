import { defineComponentSlotStyle } from "../../core"

export const actionBarStyle = defineComponentSlotStyle({
  base: {
    content: {
      alignItems: "center",
      bg: "bg.float",
      borderColor: "border",
      borderWidth: "1px",
      boxShadow: "lg",
      display: "flex",
      gap: "2",
      px: "2",
      py: "2",
      rounded: "l4",
    },
    root: {
      position: "fixed",
      zIndex: "burter",
    },
    separator: { bg: "border.emphasized", h: "8", w: "px" },
  },

  props: {
    /**
     * The placement of the action bar.
     *
     * @default 'end-center'
     */
    placement: {
      "end-center": {
        root: { bottom: "lg", left: "50%", transform: "translateX(-50%)" },
      },
      "end-end": {
        root: { bottom: "lg", right: "lg" },
      },
      "end-start": {
        root: { bottom: "lg", left: "lg" },
      },
      "start-center": {
        root: { left: "50%", top: "lg", transform: "translateX(-50%)" },
      },
      "start-end": {
        root: { right: "lg", top: "lg" },
      },
      "start-start": {
        root: { left: "lg", top: "lg" },
      },
    },
  },

  defaultProps: {
    placement: "end-center",
  },
})

export type ActionBarStyle = typeof actionBarStyle
