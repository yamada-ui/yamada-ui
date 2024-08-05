import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { antonym, toCamelCase } from "@yamada-ui/utils"
import { Modal } from "./modal"

export const Drawer: ComponentMultiStyle<"Drawer"> = mergeMultiStyle(Modal, {
  baseStyle: {
    container: ({ isFullHeight, placement }) => ({
      ...(isFullHeight ? { height: "100dvh", rounded: 0 } : {}),
      [`rounded${toCamelCase(placement)}`]: 0,
    }),
    inner: {},
    body: {
      overflow: "auto",
    },
    dragBar: ({ placement }) => ({
      [`margin${toCamelCase(antonym(placement))}`]: "md",
      ...(placement === "top" || placement === "bottom"
        ? { mx: "auto", w: "3xs", minH: "2" }
        : { my: "auto", minW: "2", h: "3xs" }),
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      rounded: "full",
    }),
  },

  sizes: {
    xs: { container: { maxW: "xs" } },
    sm: { container: { maxW: "md" } },
    md: { container: { maxW: "lg" } },
    lg: { container: { maxW: "2xl" } },
    xl: { container: { maxW: "4xl" } },
    full: {
      container: { minW: "100vw", minH: "100dvh", rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
  },
})({ omit: ["sizes"] })
