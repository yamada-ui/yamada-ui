import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle<"Select"> = mergeMultiStyle(
  NativeSelect,
  Menu,
  {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
      content: {
        w: "100%",
      },
      field: {
        alignItems: "center",
        cursor: "text",
        display: "flex",
        pe: "2rem",
      },
      footer: {},
      header: {},
      inner: {
        position: "relative",
      },
      item: {
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
          _disabled: {
            bg: ["white", "black"],
          },
          _focus: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
          },
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
