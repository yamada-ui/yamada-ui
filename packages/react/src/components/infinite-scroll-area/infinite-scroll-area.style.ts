import { defineComponentSlotStyle } from "../../core"

export const infiniteScrollAreaStyle = defineComponentSlotStyle({
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      w: "100%",
    },
    trigger: {
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      w: "100%",
    },
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default 'vertical'
     */
    orientation: {
      vertical: {
        root: { flexDirection: "column" },
      },
    },
  },
  defaultProps: {
    orientation: "vertical",
  },
})

export type InfiniteScrollAreaStyle = typeof infiniteScrollAreaStyle
