import type { ComponentMultiStyle } from "../../core"

export const InfiniteScrollArea: ComponentMultiStyle<"InfiniteScrollArea"> = {
  baseStyle: {
    container: {
      display: "flex",
      gap: "1rem",
      w: "100%",
    },
    trigger: {
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      w: "100%",
    },
  },

  defaultProps: {},
}
