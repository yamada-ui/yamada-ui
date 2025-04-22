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
        placeContent: "end",
      },
      '&[data-placement-center="true"]': {
        justifyContent: "center",
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
      display: "grid",
      gridTemplateRows: "repeat(var(--length), 0%)",
      pointerEvents: "none",
      position: "fixed",
      transition: "all 0.5s ease",
      zIndex: "160",
      _hover: {
        gridTemplateRows: "repeat(var(--length), calc(100%/var(--length)))",
      },
    },
    listItem: {
      "&[data-placement-bottom='true']": {
        order: "calc(var(--length) - var(--index))",
        placeSelf: "end center",
      },
      alignItems: "center",
      display: "grid",
      justifyContent: "center",
      placeSelf: "start center",
      zIndex: "calc(var(--length) - var(--index))",
      _groupHover: {
        "& > *:first-of-type": {
          "&[data-placement-bottom='true']": {
            paddingBottom: "md",
          },
          "&[data-placement-top='true']": {
            paddingTop: "md",
          },
        },
        _notFirst: {
          "& > *:first-of-type": {
            transform: "scaleX(1)",
          },
        },
      },
      _notFirst: {
        "& > *:first-of-type": {
          '&[data-placement-bottom="true"]': {
            // paddingBottom: "sm",
            // paddingBottom: "min(calc(3px + (var(--index) * 12px)), 49px)",
            paddingBottom: "calc(3px + (var(--index) * 12px))",
          },
          '&[data-placement-top="true"]': {
            // paddingTop: "sm",
            // paddingTop: "min(calc(3px + (var(--index) * 12px)), 49px)",
            paddingTop: "calc(3px + (var(--index) * 12px))",
          },
          transform: "scaleX(max(calc(1 - var(--index) * 0.1), 0))",
        },
      },
    },
    loading: {},
    noticeWrapper: {
      "&[data-placement-bottom='true']": {
        transformOrigin: "bottom",
      },
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      pointerEvents: "auto",
      transformOrigin: "top",
      transition: "all 0.5s ease",
    },
    root: {
      "&>*": {
        opacity: "calc(1 - var(--index) * 1)",
        transition: "opacity 0.5s ease",
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
