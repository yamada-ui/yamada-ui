import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      "&:is([data-variant='plain'], [data-variant='island'])": {
        colorScheme: "mono!",
      },
      "&:is([data-variant='solid'])": {
        color: "colorScheme.contrast!",
        _hover: { bg: "colorScheme.solid!" },
      },
      fontSize: "md!",
      minBoxSize: "6!",
      position: "absolute",
      right: "3",
      top: "2.5",
    },
    content: {
      "&[data-close-button]": { pe: "6" },
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "1",
    },
    item: {
      minW: "sm",
      position: "relative",
    },
    root: {
      "--mobile-offset": "{spaces.md}",
      "--offset": "{spaces.lg}",
    },
  },
})

export type NoticeStyle = typeof noticeStyle
