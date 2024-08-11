import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"
import { Menu } from "./menu"

export const ColorPicker: ComponentMultiStyle<"ColorPicker"> = mergeMultiStyle(
  Input,
  Menu,
  {
    baseStyle: {
      container: {},
      inner: {},
      field: {
        pr: "8",
        pb: "px",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      swatch: {},
      eyeDropper: {
        w: "6",
        py: "1",
        fontSize: "lg",
        outline: 0,
        rounded: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        pointerEvents: "auto",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        _hover: {
          color: ["blackAlpha.500", "whiteAlpha.600"],
        },
        _disabled: {
          pointerEvents: "none",
          opacity: 0.4,
        },
        _focusVisible: {
          boxShadow: "outline",
        },
      },
      list: {
        w: "auto",
        minW: "auto",
        maxH: "inherit",
        overflowY: "inherit",
        p: "2",
      },
    },

    sizes: {
      xs: ({ withSwatch }) => ({
        field: {
          pl: withSwatch ? "6" : "2",
        },
        swatch: {
          insetStart: "1",
          boxSize: "4",
        },
        eyeDropper: {
          insetEnd: "1",
          fontSize: "sm",
        },
      }),
      sm: ({ withSwatch }) => ({
        field: {
          pl: withSwatch ? "9" : "2",
        },
        swatch: {
          insetStart: "2",
          boxSize: "5",
        },
        eyeDropper: {
          insetEnd: "2",
        },
      }),
      md: ({ withSwatch }) => ({
        field: {
          pl: withSwatch ? "10" : "3",
        },
        swatch: {
          insetStart: "2",
          boxSize: "6",
        },
        eyeDropper: {
          insetEnd: "2",
        },
      }),
      lg: ({ withSwatch }) => ({
        field: {
          pl: withSwatch ? "12" : "4",
        },
        swatch: {
          insetStart: "2",
        },
        eyeDropper: {
          insetEnd: "2",
        },
      }),
    },
  },
)({
  omit: [
    "addon",
    "element",
    "button",
    "item",
    "command",
    "icon",
    "divider",
    "group",
    "groupLabel",
  ],
})
