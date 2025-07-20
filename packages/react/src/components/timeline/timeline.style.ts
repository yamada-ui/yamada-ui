import { defineComponentSlotStyle } from "../../core"

export const timelineStyle = defineComponentSlotStyle({
  base: {
    connector: {
      alignSelf: "stretch",
      position: "relative",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _after: {
        borderInlineStart:
          "{separator-width} {separator-style, solid} {separator-color}",
        display: "block",
        h: "full",
        insetBlockStart: "calc({indicator-size} + {separator-gap})",
        insetInlineStart:
          "calc(({indicator-size} / 2) - ({separator-width} / 2))",
        maxH: `calc(full - {indicator-size} - ({separator-gap} * 2))`,
        position: "absolute",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    description: {
      color: "fg.muted",
    },
    indicator: {
      alignItems: "center",
      boxSize: "{indicator-size}",
      color: "{indicator-stroke}",
      display: "flex",
      fontWeight: "medium",
      justifyContent: "center",
      lineHeight: "{indicator-size}",
      overflow: "hidden",
      rounded: "{indicator-rounded}",
    },
    item: {
      alignItems: "flex-start",
      display: "flex",
      flexShrink: "0",
      _last: {
        "& [data-connector]": {
          _after: { display: "none" },
        },
      },
    },
    root: {
      "--indicator-fill": "transparent",
      "--indicator-stroke": "colorScheme.solid",
      "--separator-color": "colors.border",
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    title: {
      alignItems: "center",
      display: "flex",
      fontWeight: "medium",
      gap: "1",
      lineHeight: "{indicator-size}",
    },
  },

  props: {
    /**
     * The alignment of the timeline.
     *
     * @default 'start'
     */
    align: {
      center: {
        content: {
          "&:first-of-type": { alignItems: "flex-end" },
          flex: "1",
        },
        item: {
          "&:has(> [data-content]:first-of-type)": {
            "&:not(:has(> [data-content]:last-of-type))": {
              _after: { display: "block", flex: "1" },
            },
          },
          "&:not(:has(> [data-content]:first-of-type))": {
            _before: { display: "block", flex: "1" },
          },
        },
      },
      end: {
        content: { alignItems: "flex-end" },
      },
      start: {
        content: { alignItems: "flex-start" },
      },
    },
    /**
     * If `true`, the timeline will be attached.
     *
     * @default false
     */
    attached: {
      true: {
        item: {
          "--separator-gap": "0px",
        },
      },
    },
    /**
     * The shape of the timeline.
     *
     * @default 'circle'
     */
    shape: {
      circle: {
        item: { "--indicator-rounded": "radii.full" },
      },
      rounded: {
        item: { "--indicator-rounded": "radii.l2" },
      },
      square: {
        item: { "--indicator-rounded": "radii.0" },
      },
    },
  },

  sizes: {
    base: {
      item: {
        _last: {
          "& [data-content]": { pb: 0 },
        },
      },
    },
    sm: {
      content: { gap: "1", pb: "8" },
      description: { fontSize: "xs" },
      item: { gap: "3" },
      root: {
        "--indicator-size": "sizes.3",
        "--separator-gap": "spaces.2",
        "--separator-width": "sizes.0.5",
      },
      title: { fontSize: "sm" },
    },
    md: {
      content: { gap: "2", pb: "10" },
      description: { fontSize: "sm" },
      item: { gap: "4" },
      root: {
        "--indicator-size": "sizes.5",
        "--separator-gap": "spaces.2",
        "--separator-width": "sizes.1",
      },
      title: { fontSize: "md" },
    },
    lg: {
      content: { gap: "2", pb: "10" },
      description: { fontSize: "sm" },
      item: { gap: "4" },
      root: {
        "--indicator-size": "sizes.7",
        "--separator-gap": "spaces.2.5",
        "--separator-width": "sizes.1",
      },
      title: { fontSize: "md" },
    },
    xl: {
      content: { gap: "2", pb: "12" },
      description: { fontSize: "md" },
      item: { gap: "5" },
      root: {
        "--indicator-size": "sizes.8",
        "--separator-gap": "spaces.3",
        "--separator-width": "sizes.1.5",
      },
      title: { fontSize: "lg" },
    },
  },

  defaultProps: {
    size: "md",
    align: "start",
    shape: "circle",
  },
})

export type TimelineStyle = typeof timelineStyle
