import type { ComponentStyle } from "../../core"

export const SlideFade: ComponentStyle<"SlideFade"> = {
  baseStyle: {
    w: "100%",
  },
  defaultProps: {
    offsetX: 0,
    offsetY: 8,
    reverse: true,
  },
}
