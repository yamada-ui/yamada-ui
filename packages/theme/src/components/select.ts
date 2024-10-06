import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle<"Select"> = mergeMultiStyle(
  NativeSelect,
  Menu,
  {
    baseStyle: {
      content: {
        w: "100%",
      },
      footer: {},
      header: {},
      inner: {},
      item: {
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
        _hover: {
          _disabled: {
            bg: ["white", "black"],
          },
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
      },
      itemIcon: {},
      list: {
        maxH: "xs",
        overflowY: "auto",
      },
    },
  },
)({ omit: ["button", "command"] })
