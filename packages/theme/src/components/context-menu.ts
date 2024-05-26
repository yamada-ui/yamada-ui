import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"

export const ContextMenu: ComponentMultiStyle = mergeMultiStyle(Menu, {
  baseStyle: {
    trigger: {},
  },
})()
