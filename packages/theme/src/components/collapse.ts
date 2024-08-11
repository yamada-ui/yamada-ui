import type { ComponentStyle } from "@yamada-ui/core"

export const Collapse: ComponentStyle<"Collapse"> = {
  baseStyle: {
    w: "100%",
  },
  defaultProps: {
    animationOpacity: true,
    startingHeight: 0,
    endingHeight: "auto",
  },
}
