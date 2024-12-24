import type { ComponentMultiStyle } from "../../core"

export const Breadcrumb: ComponentMultiStyle<"Breadcrumb"> = {
  baseStyle: {
    container: {
      alignItems: "center",
      display: "flex",
    },
    ellipsis: {},
    item: {
      alignItems: "center",
      display: "inline-flex",
    },
    link: {
      "&:not([aria-current=page])": {
        cursor: "pointer",
        _focusVisible: {
          boxShadow: "outline",
        },
        _hover: {
          textDecoration: "underline",
        },
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
