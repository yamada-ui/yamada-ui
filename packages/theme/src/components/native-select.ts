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
        fontSize: "xl",
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
          pt: "3",
        },
      },
      sm: {
        icon: {
          insetEnd: "2",
        },
      },
      md: {
        icon: {
          insetEnd: "2",
        },
      },
      lg: {
        icon: {
          insetEnd: "2",
        },
      },
    },
  })({ omit: ["addon", "element"] })
