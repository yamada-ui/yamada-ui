import type { ComponentStyle } from "@yamada-ui/core"

export const Skeleton: ComponentStyle = {
  baseStyle: {
    background: ["gray.100", "gray.800"],
    borderColor: ["gray.400", "gray.600"],
    opacity: 0.7,
    borderRadius: "sm",
  },
  defaultProps: {
    startColor: ["gray.100", "gray.800"],
    endColor: ["gray.400", "gray.600"],
  },
}
