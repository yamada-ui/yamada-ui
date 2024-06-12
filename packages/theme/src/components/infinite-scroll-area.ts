import type { ComponentMultiStyle } from "@yamada-ui/core"

export const InfiniteScrollArea: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "100%",
      display: "flex",
      gap: "1rem",
    },
    trigger: {
      w: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  defaultProps: {},
}
