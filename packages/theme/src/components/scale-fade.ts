import type { ComponentStyle } from "@yamada-ui/core"

export const ScaleFade: ComponentStyle<"ScaleFade"> = {
  baseStyle: {
    w: "100%",
  },
  defaultProps: {
    scale: 0.95,
    reverse: true,
  },
}
