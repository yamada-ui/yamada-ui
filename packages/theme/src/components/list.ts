import type { ComponentMultiStyle } from "@yamada-ui/core"

export const List: ComponentMultiStyle = {
  baseStyle: {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    item: {},
    icon: {
      me: "2",
      display: "inline-block",
      verticalAlign: "middle",
    },
  },
}
