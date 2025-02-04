import { defineComponentStyle } from "../../core"

export const groupStyle = defineComponentStyle({
  base: {
    display: "inline-flex",
    gap: "2",
    isolation: "isolate",
    position: "relative",
  },

  props: {
    /**
     * If `true`, the borderRadius of button that are direct children will be altered to look flushed together.
     *
     * @default false
     */
    attached: {
      true: {
        gap: "0 !important",
      },
    },
    /**
     * If `true`, the children will grow to fill the available space.
     *
     * @default false
     */
    grow: {
      true: {
        "& > *": {
          flex: 1,
        },
        display: "flex",
      },
    },
    /**
     * The orientation of the group.
     *
     * @default "horizontal"
     */
    orientation: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  },

  compounds: [
    {
      css: {
        "& > *:first-of-type:not(:last-of-type)": {
          borderRightRadius: 0,
          borderRightWidth: "0px",
        },
        "& > *:not(:first-of-type):last-of-type": { borderLeftRadius: 0 },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          borderRightWidth: "0px",
        },
      },
      attached: true,
      orientation: "horizontal",
    },
    {
      css: {
        "& > *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
        "& > *:not(:first-of-type):last-of-type": {
          borderTopRadius: 0,
          borderTopWidth: "0px",
        },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          borderTopWidth: "0px",
        },
      },
      attached: true,
      orientation: "vertical",
    },
  ],

  defaultProps: {
    orientation: "horizontal",
  },
})

export type GroupStyle = typeof groupStyle
