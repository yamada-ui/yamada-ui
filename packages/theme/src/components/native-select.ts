import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const NativeSelect: ComponentMultiStyle<"NativeSelect"> =
  mergeMultiStyle(Input, {
    baseStyle: {
      container: {},
      field: {
        "& > option, optgroup": {
          bg: ["white", "black"],
        },
        cursor: "pointer",
        pb: "px",
        pr: "8",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      icon: {
        color: ["blackAlpha.600", "whiteAlpha.700"],
        outline: 0,
        py: "2",
        rounded: "md",
        w: "6",
        _disabled: {
          opacity: 0.4,
        },
      },
    },

    sizes: {
      xs: {
        icon: {
          fontSize: "lg",
          insetEnd: "1",
          pt: "2",
        },
      },
      sm: {
        icon: {
          fontSize: "xl",
          insetEnd: "1.5",
        },
      },
      md: {
        icon: {
          fontSize: "xl",
          insetEnd: "2",
        },
      },
      lg: {
        icon: {
          fontSize: "2xl",
          insetEnd: "2",
        },
      },
      xl: {
        icon: {
          fontSize: "3xl",
          insetEnd: "3",
        },
      },
    },
  })({ omit: ["addon", "element"] })
