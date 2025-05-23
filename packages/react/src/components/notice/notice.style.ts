import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    actionButton: {},
    closeButton: {
      size: "sm",
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
      zIndex: "calc(var(--length) - var(--index))",
      // overflow: "hidden",
      // transition: "height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      _groupHover: {
        _first: {
          "& > *:first-of-type": {
            '&[data-placement-bottom="true"]': {
              // height: "auto",
              paddingBottom: "md",
            },
            '&[data-placement-top="true"]': {
              // height: "auto",
              paddingTop: "md",
            },
          },
          _notFirst: {
            paddingTop: "md",
          },
        },
        _notFirst: {
          "& > *:first-of-type": {
            '&[data-placement-bottom="true"]': {
              // height: "66px",
              paddingBottom: "md",
            },
            '&[data-placement-top="true"]': {
              // height: "66px",
              paddingTop: "md",
            },
            transform: "scale(1) translateY(0)",
          },
          paddingTop: "0",
        },
      },
      _notFirst: {
        "& > *:first-of-type": {
          '&[data-placement-bottom="true"]': {
            // height: "20px",
            paddingBottom: "md",
            transform:
              "translateY(calc((var(--index) * 100%) - (var(--index) * 20px))) scale(max(calc(1 - var(--index) * 0.1), 0))",
          },
          '&[data-placement-top="true"]': {
            paddingTop: "md",
            transform:
              "translateY(calc((var(--index) * -100%) + (var(--index) * 20px))) scale(max(calc(1 - var(--index) * 0.1), 0))",
            // height: "20px",
          },
          // transform: "scaleX(max(calc(1 - var(--index) * 0.1), 0))",
          // transition: "padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
      transition: "padding 400ms ease, transform 400ms ease",
    },
    root: {
      "&>*": {
        opacity: "calc(1 - var(--index) * 1)",
        transition: "opacity 300ms ease",
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
