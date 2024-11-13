import type { ComponentStyle } from "@yamada-ui/core"
import { mergeStyle } from "@yamada-ui/core"
import { Button } from "./button"

export const CloseButton: ComponentStyle<"CloseButton"> = mergeStyle(Button, {
  baseStyle: {
    rounded: "md",
    _active: {
      bg: ["blackAlpha.200", "whiteAlpha.200"],
    },
    _focusVisible: {
      boxShadow: "outline",
    },
    _hover: {
      bg: ["blackAlpha.100", "whiteAlpha.100"],
    },
  },

  sizes: {
    sm: {
      boxSize: 6,
      fontSize: "2xs",
    },
    md: {
      boxSize: 8,
      fontSize: "xs",
    },
    lg: {
      boxSize: 10,
      fontSize: "md",
    },
  },

  defaultProps: {
    size: "md",
  },
})({ omit: ["variants", "sizes", "defaultProps"] })
