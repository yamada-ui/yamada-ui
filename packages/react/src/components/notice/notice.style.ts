import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    actionButton: {},
    closeButton: {
      bg: "red",
      position: "absolute",
      right: 2,
      top: 2,
    },
    content: {
      flex: 1,
    },
    description: {
      lineClamp: 3,
    },
    icon: {},
    list: {
      '&[data-placement-bottom="true"]': {
        bottom: "max(env(safe-area-inset-bottom, 16px), 16px)",
        flexDirection: "column-reverse",
      },
      '&[data-placement-center="true"]': {
        left: "max(env(safe-area-inset-left, 16px), 16px)",
        right: "max(env(safe-area-inset-right, 16px), 16px)",
      },
      '&[data-placement-left="true"]': {
        left: "max(env(safe-area-inset-left, 16px), 16px)",
      },
      '&[data-placement-right="true"]': {
        right: "max(env(safe-area-inset-right, 16px), 16px)",
      },
      '&[data-placement-top="true"]': {
        top: "max(env(safe-area-inset-top, 16px), 16px)",
      },
      display: "flex",
      flexDirection: "column",
      pointerEvents: "none",
      position: "fixed",
      zIndex: "160",
    },
    listItem: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    loading: {},
    noticeWrapper: {
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      pointerEvents: "auto",
      transformOrigin: "top",
      transition: "padding 400ms ease",
      _expanded: {
        "&[data-placement-bottom='true']": {
          paddingBottom: "md",
        },
        "&[data-placement-top='true']": {
          paddingTop: "md",
        },
      },
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
