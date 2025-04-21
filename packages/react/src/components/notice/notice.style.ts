import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
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
      zIndex: "calc(var(--length) - var(--index))",
      _groupHover: {
        _first: {
          "& > *:first-of-type": {
            '&[data-placement-bottom="true"]': {
              paddingBottom: "xs",
            },
            '&[data-placement-top="true"]': {
              paddingTop: "xs",
            },
          },
        },
        _notFirst: {
          "& > *:first-of-type": {
            '&[data-placement-bottom="true"]': {
              paddingBottom: "66px",
            },
            '&[data-placement-top="true"]': {
              paddingTop: "66px",
            },
            transform: "scaleX(1)",
          },
        },
      },
      _notFirst: {
        "& > *:first-of-type": {
          '&[data-placement-bottom="true"]': {
            marginBottom: "-46px",
          },
          '&[data-placement-top="true"]': {
            marginTop: "-46px",
          },
          transform: "scaleX(max(calc(1 - var(--index) * 0.1), 0))",
        },
      },
    },
    loading: {},
    noticeWrapper: {
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      pointerEvents: "auto",
      transformOrigin: "top",
      transition: "all 0.3s ease-in-out",
    },
    root: {
      "&>*": {
        opacity: "calc(1 - var(--index) * 1)",
        transition: "opacity 0.3s ease-in-out",
        _groupHover: {
          opacity: 1,
        },
      },
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    title: {
      lineClamp: 1,
    },
  },
})

export type NoticeStyle = typeof noticeStyle
