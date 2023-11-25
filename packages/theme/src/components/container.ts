import type { ComponentStyle } from "@yamada-ui/core"

export const Container: ComponentStyle = {
  baseStyle: {
    w: "100%",
    display: "flex",
    flexDirection: "column",
    gap: { base: "lg", sm: "md" },
    p: { base: "lg", sm: "md" },
  },
}
