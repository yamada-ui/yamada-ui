import { defineComponentStyle } from "../../core"

export const groupStyle = defineComponentStyle({
  base: {
    "& > *": {
      _focusVisible: {
        zIndex: 1,
      },
    },
    display: "inline-flex",
    gap: "2",
    isolation: "isolate",
    justifyContent: "start",
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
    /**
     * The stacking order of the group.
     */
    stacking: {
      "first-on-top": {
        "& > *": {
          zIndex: "calc({--group-count} - {--group-index})",
        },
      },
      "last-on-top": {
        "& > *": {
          zIndex: "{--group-index}",
        },
      },
    },
  },

  compounds: [
    {
      css: {
        "& > *[data-group-between]": {
          "& > *[data-group-propagate]": {
            borderRightWidth: "0px !important",
            roundedRight: "0 !important",
          },
          borderRightWidth: "0px !important",
          rounded: "0 !important",
        },
        "& > *[data-group-end]:not([data-group-start])": {
          "& > *[data-group-propagate]": {
            roundedLeft: "0 !important",
          },
          roundedLeft: "0 !important",
        },
        "& > *[data-group-start]:not([data-group-end])": {
          "& > *[data-group-propagate]": {
            borderRightWidth: "0px !important",
            roundedRight: "0 !important",
          },
          borderRightWidth: "0px !important",
          roundedRight: "0 !important",
        },
      },
      attached: true,
      orientation: "horizontal",
    },
    {
      css: {
        "& > *[data-group-between]": {
          borderTopWidth: "0px !important",
          rounded: "0 !important",
        },
        "& > *[data-group-end]:not([data-group-start])": {
          borderTopWidth: "0px !important",
          roundedTop: "0 !important",
        },
        "& > *[data-group-start]:not([data-group-end])": {
          roundedBottom: "0 !important",
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
