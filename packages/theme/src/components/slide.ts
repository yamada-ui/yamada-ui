import type { ComponentStyle } from "@yamada-ui/core"

export const Slide: ComponentStyle = {
  defaultProps: {
    position: "fixed",
    zIndex: "fallback(jeice, 110)",
  },
}
