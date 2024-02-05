import type { ComponentStyle } from "@yamada-ui/core"

export const Skeleton: ComponentStyle = {
  baseStyle: {
    background: ["blackAlpha.300", "whiteAlpha.300"],
    borderColor: ["blackAlpha.400", "whiteAlpha.400"],
    opacity: 0.7,
    borderRadius: "sm",
  },
  defaultProps: {
    startColor: ["blackAlpha.300", "whiteAlpha.300"],
    endColor: ["blackAlpha.400", "whiteAlpha.400"],
  },
}
