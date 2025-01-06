import type { ComponentMultiStyle } from "../../core"

export const Reorder: ComponentMultiStyle<"Reorder"> = {
  baseStyle: {
    container: {
      display: "flex",
      w: "100%",
    },
    item: {
      h: "100%",
      w: "100%",
      _selected: {
        boxShadow: ["md", "dark-md"],
        cursor: "grabbing",
      },
    },
    trigger: {
      alignItems: "center",
      color: ["blackAlpha.300", "whiteAlpha.300"],
      cursor: "grab",
      display: "flex",
      justifyContent: "center",
      _selected: {
        cursor: "grabbing",
      },
    },
  },

  sizes: {
    sm: {
      item: { p: "sm", rounded: "base" },
    },
    md: {
      item: { p: "md", rounded: "md" },
    },
    normal: {
      item: { p: "normal", rounded: "lg" },
    },
    lg: {
      item: { p: "lg", rounded: "xl" },
    },
  },

  variants: {
    elevated: {
      item: {
        bg: ["white", "black"],
        boxShadow: ["base", "dark-md"],
      },
    },
    outline: {
      item: {
        bg: ["white", "black"],
        borderWidth: "1px",
      },
    },
    unstyled: {
      item: { p: 0, rounded: 0, _selected: { boxShadow: "unset" } },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
}
