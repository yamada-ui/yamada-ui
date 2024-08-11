import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"

export const ContextMenu: ComponentMultiStyle<"ContextMenu"> = mergeMultiStyle(
  Menu,
  {
    baseStyle: {
      list: {
        position: "fixed",
      },
      trigger: {},
    },
  },
)()
