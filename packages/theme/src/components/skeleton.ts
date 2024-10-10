import type { ComponentStyle } from "@yamada-ui/core"

export const Skeleton: ComponentStyle<"Skeleton"> = {
  baseStyle: {
    background: ["blackAlpha.300", "whiteAlpha.300"],
    borderColor: ["blackAlpha.400", "whiteAlpha.400"],
    borderRadius: "sm",
    opacity: 0.7,
  },
  defaultProps: {
    endColor: ["blackAlpha.400", "whiteAlpha.400"],
    startColor: ["blackAlpha.300", "whiteAlpha.300"],
  },
}
