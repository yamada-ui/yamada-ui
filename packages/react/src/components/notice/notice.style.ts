import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      position: "absolute",
      right: 2,
      top: 2,
    },
    description: {
      lineClamp: 3,
    },
    icon: {},
    list: {
      display: "flex",
      flexDirection: "column",
      pointerEvents: "none",
      position: "fixed",
      zIndex: "160",
    },
    listItem: {
      display: "flex",
    },
    loading: {},
    noticeWrapper: {
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      pointerEvents: "auto",
    },
    root: {
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    title: {
      lineClamp: 1,
    },
  },
})

export type NoticeStyle = typeof noticeStyle
