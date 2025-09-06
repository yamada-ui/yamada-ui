import { defineComponentSlotStyle } from "../../core"

export const noticeStyle = defineComponentSlotStyle({
  base: {
    closeButton: {
      "&:is([data-variant='plain'], [data-variant='island'])": {
        colorScheme: "mono",
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
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "1",
      pe: "6",
    },
    item: {
      alignItems: "center",
      display: "flex",
      maxW: "36rem",
      minW: "20rem",
      position: "relative",
    },
  },
})

export type NoticeStyle = typeof noticeStyle
