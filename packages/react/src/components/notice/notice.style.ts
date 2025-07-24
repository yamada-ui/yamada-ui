import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    "close-button": {
      position: "absolute",
      right: 2,
      top: 2,
    },
    description: {
      lineClamp: 3,
    },
    icon: {},
    loading: {},
    root: {
      boxShadow:
        "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
      minW: "20rem",
    },
    title: {
      lineClamp: 1,
    },
    content: {
      flex: 1,
    },
  },
})

export type NoticeStyle = typeof noticeStyle
