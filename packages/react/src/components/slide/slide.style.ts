import { defineComponentStyle } from "../../core"

export const slideStyle = defineComponentStyle({
  base: {
    position: "fixed",
    zIndex: "jeice",
  },

  props: {
    /**
     * The placement of the slide.
     *
     * @default 'right'
     */
    placement: {
      bottom: { bottom: "0", left: "0", right: "0", w: "vw" },
      left: { bottom: "0", h: "dvh", left: "0", top: "0" },
      right: { bottom: "0", h: "dvh", right: "0", top: "0" },
      top: { left: "0", right: "0", top: "0", w: "vw" },
    },
  },
})

export type SlideStyle = typeof slideStyle
