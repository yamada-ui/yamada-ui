import { defineComponentSlotStyle } from "../../core"

export const listStyle = defineComponentSlotStyle({
  base: {
    icon: {
      display: "inline-block",
      fontSize: "lg",
      me: "sm",
      verticalAlign: "middle",
    },
    item: {
      "&:has([data-list-icon])": {
        alignItems: "center",
        display: "inline-flex",
      },
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "sm",
    },
  },

  props: {
    styleType: {
      circle: { root: { ms: "1.4em" } },
      decimal: {
        item: { ps: "0.3em" },
        root: { ms: "1.2em" },
      },
      disc: { root: { ms: "1.4em" } },
      "lower-alpha": { item: { ps: "0.2em" }, root: { ms: "1.2em" } },
      square: { root: { ms: "1.4em" } },
    },
  },
})

export type ListStyle = typeof listStyle
