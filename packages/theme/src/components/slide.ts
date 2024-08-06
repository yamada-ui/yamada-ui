import type { ComponentStyle } from "@yamada-ui/core"

export const Slide: ComponentStyle<"Slide"> = {
  baseStyle: {
    position: "fixed",
    zIndex: "fallback(jeice, 110)",
  },
  defaultProps: {
    placement: "right",
  },
}
