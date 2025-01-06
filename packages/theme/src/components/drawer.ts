import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { antonym, toPascalCase } from "@yamada-ui/utils"
import { Modal } from "./modal"

export const Drawer: ComponentMultiStyle<"Drawer"> = mergeMultiStyle(Modal, {
  baseStyle: {
    body: {
      overflow: "auto",
    },
    container: ({ fullHeight, placement }) => ({
      ...(fullHeight ? { height: "100dvh", rounded: 0 } : {}),
      [`rounded${toPascalCase(placement)}`]: 0,
    }),
    dragBar: ({ placement }) => ({
      [`margin${toPascalCase(antonym(placement))}`]: "md",
      ...(placement === "top" || placement === "bottom"
        ? { minH: "2", mx: "auto", w: "3xs" }
        : { h: "3xs", minW: "2", my: "auto" }),
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      rounded: "full",
    }),
    inner: {},
  },

  sizes: {
    xs: { container: { maxW: "xs" } },
    sm: { container: { maxW: "md" } },
    md: { container: { maxW: "lg" } },
    lg: { container: { maxW: "2xl" } },
    xl: { container: { maxW: "4xl" } },
    full: {
      container: { minH: "100dvh", minW: "100vw", rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
  },
})({ omit: ["sizes"] })
