import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Menu } from "./menu"

export const ContextMenu: ComponentMultiStyle<"ContextMenu"> = mergeMultiStyle(
  Menu,
  {
    baseStyle: {
      trigger: {},
    },
  },
)()
