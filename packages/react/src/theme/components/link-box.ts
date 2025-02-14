import type { ComponentMultiStyle } from "../../core"

export const LinkBox: ComponentMultiStyle<"LinkBox"> = {
  baseStyle: {
    container: {},
    overlay: {
      outline: 0,
      _focusVisible: {
        _before: {
          boxShadow: "outline",
        },
      },
    },
  },
}
