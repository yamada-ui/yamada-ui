import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { toCamelCase } from "@yamada-ui/utils"
import { Modal } from "./modal"

export const Drawer: ComponentMultiStyle = mergeMultiStyle(Modal, {
  baseStyle: {
    container: ({ isFullHeight, placement }) => ({
      ...(isFullHeight ? { height: "100dvh", rounded: "0" } : {}),
      w: "auto",
      [`rounded${toCamelCase(placement)}`]: 0,
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
