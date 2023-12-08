import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { Modal } from "./modal"

export const Drawer: ComponentMultiStyle = mergeMultiStyle(Modal, {
  baseStyle: {
    container: ({ isFullHeight }) => ({
      ...(isFullHeight ? { height: "100dvh" } : {}),
      w: "auto",
    }),
    body: {
      overflow: "auto",
    },
  },

  sizes: {
    xs: { container: { maxW: "xs" } },
    sm: { container: { maxW: "md" } },
    md: { container: { maxW: "lg" } },
    lg: { container: { maxW: "2xl" } },
    xl: { container: { maxW: "4xl" } },
    full: {
      container: { minW: "100vw", minH: "100dvh" },
    },
  },

  defaultProps: {
    size: "md",
  },
})({ omit: ["sizes"] })
