import { defineComponentStyle } from "../../core"

export const inputElementStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    color: "fg.subtle",
    display: "flex",
    fontSize: "md",
    height: "full",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    px: "3",
    zIndex: 1,
  },

  props: {
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
