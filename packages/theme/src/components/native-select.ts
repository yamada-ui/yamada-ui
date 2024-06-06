import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const NativeSelect: ComponentMultiStyle = mergeMultiStyle(Input, {
  baseStyle: {
    container: {},
    field: {
      cursor: "pointer",
      pr: "8",
      pb: "px",
      _focus: {
        zIndex: "unset",
      },
      _readOnly: {
        pointerEvents: "none",
      },
      "& > option, optgroup": {
        bg: ["white", "black"],
      },
    },
    icon: {
      w: "6",
      py: "2",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      fontSize: "xl",
      outline: 0,
      rounded: "md",
      _disabled: {
        opacity: 0.4,
      },
    },
  },

  sizes: {
    xs: {
      icon: {
        pt: "3",
        fontSize: "lg",
        insetEnd: "1",
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
