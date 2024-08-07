import type { ComponentStyle, ButtonProps } from "@yamada-ui/react"

export const Button: ComponentStyle<"Button", ButtonProps> = {
  sizes: {
    xl: {
      h: 16,
      minW: 16,
      fontSize: "xl",
      px: 10,
    },
  },
}
