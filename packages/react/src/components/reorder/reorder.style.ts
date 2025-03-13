import { defineComponentSlotStyle } from "../../core"

export const reorderStyle = defineComponentSlotStyle({
  base: {
    item: {
      h: "100%",
      w: "100%",
      _selected: {
        boxShadow: ["md", "dark-md"],
        cursor: "grabbing",
      },
    },
    root: {
      display: "flex",
      w: "100%",
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
      item: { p: "lg", rounded: "lg" },
    },
    lg: {
      item: { p: "xl", rounded: "xl" },
    },
  },

  variants: {
    elevated: {
      item: {
        bg: "bg.panel",
        boxShadow: "md",
      },
    },
    outline: {
      item: {
        layerStyle: "panel",
      },
    },
    unstyled: {
      item: { p: 0, rounded: 0, _selected: { boxShadow: "unset" } },
    },
  },

  props: {
    /**
     * The orientation of the reorder.
     *
     * @default 'vertical'
     */
    orientation: {
      horizontal: {
        root: {
          flexDirection: "row",
        },
      },
      vertical: {
        root: {
          flexDirection: "column",
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
    orientation: "vertical",
  },
})

export type ReorderStyle = typeof reorderStyle
