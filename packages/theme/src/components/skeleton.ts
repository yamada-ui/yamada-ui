import type { ComponentStyle } from "@yamada-ui/core"

export const Skeleton: ComponentStyle<"Skeleton"> = {
  baseStyle: {
    background: ["blackAlpha.300", "whiteAlpha.300"],
    borderColor: ["blackAlpha.400", "whiteAlpha.400"],
    opacity: 0.7,
    borderRadius: "sm",
    maxW: "100%",
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden",
    },
  },
  defaultProps: {
    startColor: ["blackAlpha.300", "whiteAlpha.300"],
    endColor: ["blackAlpha.400", "whiteAlpha.400"],
  },
}
