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
     * @default 'inline-end'
     */
    placement: {
      "block-end": { bottom: "0", left: "0", right: "0", w: "vw" },
      "block-start": { left: "0", right: "0", top: "0", w: "vw" },
      "inline-end": { bottom: "0", h: "dvh", right: "0", top: "0" },
      "inline-start": { bottom: "0", h: "dvh", left: "0", top: "0" },
    },
  },

  defaultProps: {
    placement: "inline-end",
  },
})

export type SlideStyle = typeof slideStyle
