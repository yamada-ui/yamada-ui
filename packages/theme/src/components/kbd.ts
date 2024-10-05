import type { ComponentStyle } from "@yamada-ui/core"

export const Kbd: ComponentStyle<"Kbd"> = {
  baseStyle: {
    bg: ["blackAlpha.50", "whiteAlpha.50"],
    borderWidth: "1px",
    fontFamily: "mono",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "shorter",
    px: "0.4em",
    py: "0.2em",
    rounded: "md",
    whiteSpace: "nowrap",
  },
}
