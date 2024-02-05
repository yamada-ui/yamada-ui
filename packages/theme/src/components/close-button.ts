import { mergeStyle, type ComponentStyle } from "@yamada-ui/core"
import { Button } from "./button"

export const CloseButton: ComponentStyle = mergeStyle(Button, {
  baseStyle: {
    _hover: {
      bg: ["blackAlpha.100", "whiteAlpha.100"],
    },
    _active: {
      bg: ["blackAlpha.200", "whiteAlpha.200"],
    },
    _focusVisible: {
      boxShadow: "outline",
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
