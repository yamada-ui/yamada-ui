import type { ComponentMultiStyle } from "../../core"

export const List: ComponentMultiStyle<"List"> = {
  baseStyle: {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    icon: {
      display: "inline-block",
      me: "2",
      verticalAlign: "middle",
    },
    item: {},
  },
}
