import { defineComponentStyle } from "../../core"

export const separatorStyle = defineComponentStyle({
  base: {
    borderColor: "border",
  },

  props: {
    /**
     * The orientation of the divider.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        borderWidth: "0 0 {thickness} 0",
        w: "full",
      },
      vertical: {
        borderWidth: "0 0 0 {thickness}",
        h: "full",
      },
    },
  },

  variants: {
    dashed: {
      borderStyle: "dashed",
    },
    dotted: {
      borderStyle: "dotted",
    },
    solid: {
      borderStyle: "solid",
    },
  },

  sizes: {
    xs: {
      "--thickness": "0.5px",
    },
    sm: {
      "--thickness": "1px",
    },
    md: {
      "--thickness": "2px",
    },
    lg: {
      "--thickness": "3px",
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    orientation: "horizontal",
  },
})

export type SeparatorStyle = typeof separatorStyle
