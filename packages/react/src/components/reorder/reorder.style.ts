import { defineComponentSlotStyle } from "../../core"

export const reorderStyle = defineComponentSlotStyle({
  base: {
    item: {
      "&[data-has-trigger]": {
        cursor: "default",
        userSelect: "none",
      },
      cursor: "grab",
      flex: "1",
      rounded: "l2",
      _selected: {
        boxShadow: "md",
        cursor: "grabbing",
      },
    },
    root: {
      display: "flex",
      w: "full",
    },
    trigger: {
      alignItems: "center",
      color: "fg.subtle",
      cursor: "grab",
      display: "flex",
      fontSize: "2xl",
      justifyContent: "center",
      _selected: {
        cursor: "grabbing",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
  },

  sizes: {
    sm: {
      item: { p: "3" },
      root: { gap: "3" },
    },
    md: {
      item: { p: "4" },
      root: { gap: "4" },
    },
    lg: {
      item: { p: "6" },
      root: { gap: "6" },
    },
    xl: {
      item: { p: "8" },
      root: { gap: "8" },
    },
  },

  variants: {
    elevated: {
      item: {
        bg: "bg.panel",
        boxShadow: "md",
        _selected: {
          boxShadow: "lg",
        },
      },
    },
    outline: {
      item: {
        layerStyle: "outline",
        bg: "bg",
      },
    },
    panel: {
      item: {
        layerStyle: "panel",
      },
    },
    plain: {
      item: {
        flex: "inherit",
        p: "0px",
        rounded: "0px",
        _selected: { boxShadow: "unset" },
      },
      root: { gap: "0px" },
    },
    solid: {
      item: {
        layerStyle: "solid",
      },
    },
    subtle: {
      item: {
        layerStyle: "subtle",
      },
    },
    surface: {
      item: {
        layerStyle: "surface",
      },
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
          alignItems: "stretch",
          flexDirection: "column",
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "panel",
    orientation: "vertical",
  },
})

export type ReorderStyle = typeof reorderStyle
