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
        borderWidth: "0 0 1px 0",
        w: "full",
      },
      vertical: {
        borderWidth: "0 0 0 1px",
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

  defaultProps: { variant: "solid", props: { orientation: "horizontal" } },
})

export type SeparatorStyle = typeof separatorStyle
