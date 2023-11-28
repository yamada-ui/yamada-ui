import type { ComponentStyle, MarkProps } from "@yamada-ui/react"

export const Mark: ComponentStyle<MarkProps> = {
  variants: {
    "text-accent": ({ colorScheme: c = "gray" }) => ({
      color: [`${c}.500`, `${c}.400`],
      p: 0,
    }),
  },
  defaultProps: {
    colorScheme: "primary",
  },
}
