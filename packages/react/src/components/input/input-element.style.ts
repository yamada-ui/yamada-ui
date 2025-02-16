import { defineComponentStyle } from "../../core"

export const inputElementStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    color: "fg.subtle",
    display: "flex",
    fontSize: "md",
    height: "full",
    justifyContent: "center",
    position: "absolute",
    px: "3",
    zIndex: 1,
  },

  props: {
    /**
     * If `true`, the element clickable.
     *
     * @default false
     */
    clickable: {
      false: {
        pointerEvents: "none",
      },
      true: {
        pointerEvents: "auto",
      },
    },
    /**
     * The placement of the element.
     *
     * @default 'start'
     */
    placement: {
      end: {
        insetInlineEnd: "0",
      },
      start: {
        insetInlineStart: "0",
      },
    },
  },
})

export type InputElementStyle = typeof inputElementStyle
