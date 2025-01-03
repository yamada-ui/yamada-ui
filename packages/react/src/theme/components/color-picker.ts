import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"
import { Menu } from "./menu"

export const ColorPicker: ComponentMultiStyle<"ColorPicker"> = mergeMultiStyle(
  Input,
  Menu,
  {
    baseStyle: {
      body: {
        display: "flex",
        w: "100%",
      },
      container: {
        h: "fit-content",
        position: "relative",
        w: "100%",
      },
      content: {
        minW: "auto",
        p: "2",
        w: "auto",
      },
      eyeDropper: {
        alignItems: "center",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        display: "inline-flex",
        fontSize: "lg",
        justifyContent: "center",
        outline: 0,
        pointerEvents: "auto",
        position: "absolute",
        py: "1",
        rounded: "md",
        top: "50%",
        transform: "translateY(-50%)",
        transitionDuration: "normal",
        transitionProperty: "common",
        w: "6",
        zIndex: 1,
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
        alignItems: "center",
        display: "flex",
        pb: "px",
        pe: "2rem",
        pr: "8",
        ps: "2rem",
        _focus: {
          zIndex: "unset",
        },
        _notAllowed: {
          cursor: "pointer",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      inner: {
        position: "relative",
      },
      overlay: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
      },
      swatch: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      },
      track: {
        h: "100%",
        position: "relative",
        w: "100%",
      },
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
    "separator",
    "group",
    "groupLabel",
  ],
})
