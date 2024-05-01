import {
  isGray,
  type ComponentMultiStyle,
  isAccessible,
} from "@yamada-ui/react"

export const SegmentedControl: ComponentMultiStyle = {
  variants: {
    simple: ({ colorScheme: c = "gray" }) => ({
      container: {
        p: "0",
        bg: "inherit",
      },
      cursor: {
        boxShadow: "inherit",
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        rounded: "full",
      },
      button: {
        rounded: "full",
        color: "muted",
        fontWeight: "semibold",
        px: "6",
        outline: 0,
        _focusVisible: {
          boxShadow: "inline",
        },
        _hover: {
          opacity: 1,
          color: [`black`, `white`],
        },
        _checked: {
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
    }),
  },
}
