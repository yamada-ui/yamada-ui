import type { ComponentStyle } from "@yamada-ui/core"

export const Loading: ComponentStyle<"Loading"> = {
  baseStyle: ({ colorScheme: c }) => ({
    color: `${c}.500`,
  }),

  defaultProps: {
    variant: "oval",
    colorScheme: "primary",
    fontSize: "1em",
  },
}
