import type { ComponentStyle } from "@yamada-ui/core"

export const Loading: ComponentStyle<"Loading"> = {
  baseStyle: ({ colorScheme: c }) => ({
    color: [`${c}.500`, `${c}.600`],
  }),

  defaultProps: {
    colorScheme: "primary",
    size: "1em",
    variant: "oval",
  },
}
