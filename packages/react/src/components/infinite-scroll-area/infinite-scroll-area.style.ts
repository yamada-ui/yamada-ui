import { defineComponentSlotStyle } from "../../core"

export const infiniteScrollAreaStyle = defineComponentSlotStyle({
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      w: "full",
    },
    trigger: {
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      w: "full",
    },
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default 'vertical'
     */
    orientation: {
      horizontal: {
        root: { flexDirection: "row", gap: "md" },
      },
      vertical: {
        root: { flexDirection: "column", gap: "lg" },
      },
    },
  },

  defaultProps: {
    orientation: "vertical",
  },
})

export type InfiniteScrollAreaStyle = typeof infiniteScrollAreaStyle
