import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle<"Select"> = mergeMultiStyle(
  NativeSelect,
  Menu,
  {
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
      icon: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        cursor: "pointer",
      },
      item: {
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        gap: "0.75rem",
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
          _disabled: {
            bg: ["white", "black"],
          },
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
      },
      itemIcon: {
        flexShrink: 0,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.85em",
      },
      field: {
        pe: "2rem",
        display: "flex",
        alignItems: "center",
      },
    },
  },
)({ omit: ["button", "command"] })
