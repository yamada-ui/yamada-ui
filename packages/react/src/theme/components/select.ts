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
        display: "flex",
        pe: "2rem",
      },
      footer: {},
      header: {},
      icon: {
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        pointerEvents: "none",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      inner: {},
      item: {
        alignItems: "center",
        color: "inherit",
        display: "flex",
        flex: "0 0 auto",
        gap: "0.75rem",
        outline: 0,
        textAlign: "start",
        textDecoration: "none",
        userSelect: "none",
        width: "100%",
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
          _focus: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
          },
          _disabled: {
            bg: ["white", "black"],
          },
        },
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
      },
      itemIcon: {
        alignItems: "center",
        display: "inline-flex",
        flexShrink: 0,
        fontSize: "0.85em",
        justifyContent: "center",
      },
      list: {
        maxH: "xs",
        overflowY: "auto",
      },
    },
  },
)({ omit: ["button", "command"] })
