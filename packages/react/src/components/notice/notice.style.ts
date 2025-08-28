import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      h: "6",
      position: "absolute",
      right: "2",
      top: "2",
      w: "6",
    },
    content: {
      flex: 1,
    },
    item: {
      alignItems: "center",
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      position: "relative",
    },
  },

  sizes: {
    sm: {
      item: {
        maxW: "24rem",
        minW: "16rem",
      },
    },
    md: {
      item: {
        maxW: "36rem",
        minW: "20rem",
      },
    },
    lg: {
      item: {
        maxW: "48rem",
        minW: "24rem",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type NoticeStyle = typeof noticeStyle
