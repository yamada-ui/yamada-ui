import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Modal: ComponentMultiStyle<"Modal"> = {
  baseStyle: {
    container: {
      position: "relative",
      maxH: "100%",
      display: "flex",
      flexDirection: "column",
      outline: 0,
      w: "100%",
      rounded: "md",
      bg: ["white", "black"],
      color: "inherit",
      boxShadow: ["lg", "dark-lg"],
      zIndex: "recoome",
    },
    closeButton: {
      position: "absolute",
      top: "3",
      right: "3",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      w: "100vw",
      h: "100dvh",
      bg: "blackAlpha.600",
      zIndex: "burter",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      pt: "md",
      px: "md",
      gap: "md",
      fontSize: "xl",
      fontWeight: "semibold",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      my: "md",
      px: "md",
      gap: "md",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: "md",
      pb: "md",
      gap: "md",
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
      container: { minW: "100vw", minH: "100dvh", rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
  },
}
