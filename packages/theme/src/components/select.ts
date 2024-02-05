import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle = mergeMultiStyle(NativeSelect, Menu, {
  baseStyle: {
    inner: {},
    list: {
      w: "100%",
      maxH: "xs",
      overflowY: "auto",
    },
    itemIcon: {},
  },
})({ omit: ["button", "command"] })
