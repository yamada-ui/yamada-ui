import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Breadcrumb: ComponentMultiStyle<"Breadcrumb"> = {
  baseStyle: {
    container: {},
    ellipsis: {},
    item: {},
    link: {
      "&:not([aria-current=page])": {
        _focusVisible: {
          boxShadow: "outline",
        },
        _hover: {
          textDecoration: "underline",
        },
        cursor: "pointer",
      },
      color: "inherit",
      outline: "none",
      textDecoration: "none",
      transitionDuration: "fast",
      transitionProperty: "common",
      transitionTimingFunction: "ease-out",
    },
    separator: {},
  },
}
