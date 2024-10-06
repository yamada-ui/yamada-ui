import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Modal: ComponentMultiStyle<"Modal"> = {
  baseStyle: {
    body: {
      flex: "1",
      gap: "md",
      my: "md",
      px: "md",
    },
    closeButton: {
      right: "3",
      top: "3",
    },
    container: {
      bg: ["white", "black"],
      boxShadow: ["lg", "dark-lg"],
      color: "inherit",
      rounded: "md",
      w: "100%",
      zIndex: "recoome",
    },
    footer: {
      gap: "md",
      pb: "md",
      px: "md",
    },
    header: {
      fontSize: "xl",
      fontWeight: "semibold",
      gap: "md",
      pt: "md",
      px: "md",
    },
    overlay: {
      bg: "blackAlpha.600",
      zIndex: "burter",
    },
  },

  sizes: {
    xs: { container: { maxW: "xs" } },
    sm: { container: { maxW: "sm" } },
    md: { container: { maxW: "md" } },
    lg: { container: { maxW: "lg" } },
    xl: { container: { maxW: "xl" } },
    "2xl": { container: { maxW: "2xl" } },
    "3xl": { container: { maxW: "3xl" } },
    "4xl": { container: { maxW: "4xl" } },
    "5xl": { container: { maxW: "5xl" } },
    "6xl": { container: { maxW: "6xl" } },
    full: {
      container: { minH: "100dvh", minW: "100vw", rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
  },
}
