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
     * The orientation of the infinite scroll.
     *
     * @default 'vertical'
     */
    orientation: {
      horizontal: {
        root: { flexDirection: "row", gap: "md", overflowX: "auto" },
      },
      vertical: {
        root: {
          flexDirection: "column",
          gap: "lg",
          h: "full",
          overflowY: "auto",
        },
      },
    },
  },

  defaultProps: {
    orientation: "vertical",
  },
})

export type InfiniteScrollAreaStyle = typeof infiniteScrollAreaStyle
