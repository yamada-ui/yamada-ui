import { defineComponentSlotStyle } from "../../core"

export const listStyle = defineComponentSlotStyle({
  base: {
    icon: {
      display: "inline-block",
      me: "2",
      verticalAlign: "middle",
    },
    item: {},
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
    },
  },

  props: {
    /**
     * The CSS `list-style-type` property.
     *
     * @default 'none'
     */
    styleType: {
      circle: { root: { ms: "1.4em" } },
      decimal: {
        item: { ps: "0.3em" },
        root: { ms: "1.2em" },
      },
      disc: { root: { ms: "1.4em" } },
      square: { root: { ms: "1.4em" } },
    },
  },
})

export type ListStyle = typeof listStyle
