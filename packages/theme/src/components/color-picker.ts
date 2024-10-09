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
      content: {
        minW: "auto",
        p: "2",
        w: "auto",
      },
      eyeDropper: {
        color: ["blackAlpha.600", "whiteAlpha.700"],
        fontSize: "lg",
        outline: 0,
        pointerEvents: "auto",
        py: "1",
        rounded: "md",
        transitionDuration: "normal",
        transitionProperty: "common",
        w: "6",
        _disabled: {
          opacity: 0.4,
          pointerEvents: "none",
        },
        _focusVisible: {
          boxShadow: "outline",
        },
        _hover: {
          color: ["blackAlpha.500", "whiteAlpha.600"],
        },
      },
      field: {
        pb: "px",
        pr: "8",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      inner: {},
      swatch: {},
    },

    sizes: {
      xs: ({ withSwatch }) => ({
        eyeDropper: {
          fontSize: "sm",
          insetEnd: "1",
        },
        field: {
          pl: withSwatch ? "6" : "2",
        },
        swatch: {
          boxSize: "4",
          insetStart: "1",
        },
      }),
      sm: ({ withSwatch }) => ({
        eyeDropper: {
          insetEnd: "2",
        },
        field: {
          pl: withSwatch ? "9" : "2",
        },
        swatch: {
          boxSize: "5",
          insetStart: "2",
        },
      }),
      md: ({ withSwatch }) => ({
        eyeDropper: {
          insetEnd: "2",
        },
        field: {
          pl: withSwatch ? "10" : "3",
        },
        swatch: {
          boxSize: "6",
          insetStart: "2",
        },
      }),
      lg: ({ withSwatch }) => ({
        eyeDropper: {
          insetEnd: "2",
        },
        field: {
          pl: withSwatch ? "12" : "4",
        },
        swatch: {
          insetStart: "2",
        },
      }),
    },
  },
)({
  omit: [
    "addon",
    "element",
    "button",
    "list",
    "item",
    "command",
    "icon",
    "divider",
    "group",
    "groupLabel",
  ],
})
