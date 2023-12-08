import type { ComponentStyle } from "@yamada-ui/core"

export const Kbd: ComponentStyle = {
  baseStyle: {
    fontFamily: "mono",
    bg: ["blackAlpha.50", "whiteAlpha.50"],
    rounded: "md",
    borderWidth: "1px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "shorter",
    py: "0.2em",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
}
