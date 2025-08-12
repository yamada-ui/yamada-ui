import { defineComponentSlotStyle } from "../../core"

export const snacksStyle = defineComponentSlotStyle({
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
      insetX: "0",
      maxW: "full",
      position: "absolute",
      top: "calc({gap} * {index})",
      w: "100%",
      zIndex: "{z-index}",
    },
    list: { position: "relative", w: "full" },
    root: {
      "&[data-negative]": { m: "calc({top} * -1) 0 calc({bottom} * -1)" },
      "--gap": "spaces.md",
      w: "full",
    },
  },
})

export type SnacksStyle = typeof snacksStyle
