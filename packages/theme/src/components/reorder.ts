import { ComponentMultiStyle } from "@yamada-ui/core"

export const Reorder: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "100%",
    },
    item: {
      w: "100%",
      h: "100%",
      _selected: {
        boxShadow: ["md", "dark-md"],
      },
    },
    trigger: {
      color: ["blackAlpha.300", "whiteAlpha.300"],
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
      item: { rounded: 0, p: 0, _selected: { boxShadow: "unset" } },
    },
  },

  sizes: {
    sm: {
      item: { rounded: "base", p: "sm" },
    },
    md: {
      item: { rounded: "md", p: "md" },
    },
    normal: {
      item: { rounded: "lg", p: "normal" },
    },
    lg: {
      item: { rounded: "xl", p: "lg" },
    },
  },

  defaultProps: {
    variant: "outline",
    size: "md",
  },
}
