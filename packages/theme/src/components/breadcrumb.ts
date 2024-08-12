import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Breadcrumb: ComponentMultiStyle<"Breadcrumb"> = {
  baseStyle: {
    container: {
      display: "flex",
      alignItems: "center",
    },
    item: {
      display: "inline-flex",
      alignItems: "center",
    },
    link: {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      textDecoration: "none",
      outline: "none",
      color: "inherit",
      "&:not([aria-current=page])": {
        cursor: "pointer",
        _hover: {
          textDecoration: "underline",
        },
        _focusVisible: {
          boxShadow: "outline",
        },
      },
    },
    separator: {},
    ellipsis: {},
  },
}
