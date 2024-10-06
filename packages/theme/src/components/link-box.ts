import type { ComponentMultiStyle } from "@yamada-ui/core"

export const LinkBox: ComponentMultiStyle<"LinkBox"> = {
  baseStyle: {
    container: {},
    overlay: {
      _focusVisible: {
        _before: {
          boxShadow: "outline",
        },
      },
      outline: 0,
    },
  },
}
