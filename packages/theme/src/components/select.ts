import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle = mergeMultiStyle(NativeSelect, Menu, {
  baseStyle: {
    container: {
      w: "100%",
      h: "fit-content",
    },
    inner: {
      position: "relative",
    },
    list: {
      w: "100%",
      maxH: "xs",
      overflowY: "auto",
    },
    item: {
      _hover: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        _disabled: {
          bg: ["white", "black"],
        },
      },
      _active: {
        bg: ["blackAlpha.200", "whiteAlpha.200"],
      },
    },
    itemIcon: {},
    field: {
      pe: "2rem",
      display: "flex",
      alignItems: "center",
    },
  },
})({ omit: ["button", "command"] })
