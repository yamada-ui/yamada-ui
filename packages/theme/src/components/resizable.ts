import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Resizable: ComponentMultiStyle = {
  baseStyle: ({ direction: d }) => ({
    container: {
      rounded: "md",
      borderWidth: "1px",
    },
    item: {},
    trigger: {
      bg: "border",
      ...(d === "vertical" ? { h: "px" } : { w: "px" }),
      _after: {
        content: "''",
        position: "absolute",
        ...(d === "vertical"
          ? { left: "0", right: "0", transform: "translateY(-50%)" }
          : { top: "0", bottom: "0", transform: "translateX(-50%)" }),
        ...(d === "vertical" ? { h: "2" } : { w: "2" }),
      },
    },
    icon: {
      py: "2",
      px: "1",
      bg: "border",
      rotate: d === "vertical" ? "90deg" : "0deg",
      rounded: "md",
    },
  }),

  variants: {},

  sizes: {},

  defaultProps: {},
}
