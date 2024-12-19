import type { ComponentStyle } from "../../core"

export const ScaleFade: ComponentStyle<"ScaleFade"> = {
  baseStyle: {
    w: "100%",
  },
  defaultProps: {
    reverse: true,
    scale: 0.95,
  },
}
