import type { ComponentMultiStyle } from "@yamada-ui/react"
import { isAccessible, isGray } from "@yamada-ui/react"

export const SegmentedControl: ComponentMultiStyle = {
  variants: {
    tabs: ({ colorScheme: c = "gray" }) => ({
      button: {
        color: "muted",
        fontWeight: "semibold",
        outline: 0,
        px: "6",
        rounded: "full",
        _checked: {
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
        _focusVisible: {
          boxShadow: "inline",
        },
        _hover: {
          color: [`black`, `white`],
          opacity: 1,
        },
      },
      container: {
        bg: "inherit",
        p: "0",
      },
      cursor: {
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        boxShadow: "inherit",
        rounded: "full",
      },
    }),
  },
}
