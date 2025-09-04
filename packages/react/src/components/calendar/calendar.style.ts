import { defineComponentSlotStyle } from "../../core"
import { buttonStyle } from "../button"

export const calendarStyle = defineComponentSlotStyle({
  base: {
    button: {
      ...buttonStyle.base,
      boxSize: "{cell-size}",
      color: "colorScheme.outline",
      _hover: { layerStyle: "ghost.hover" },
    },
    cell: {
      alignItems: "center",
      boxSize: "{cell-size}",
      display: "inline-flex",
      justifyContent: "center",
    },
    control: {
      alignItems: "center",
      display: "flex",
      gap: "{cell-gap}",
      gridColumn: "span 5",
      justifyContent: "center",
    },
    day: {
      ...buttonStyle.base,
      "&[data-between]": {
        _first: { _before: { roundedLeft: "{cell-rounded}" } },
        _last: { _before: { roundedRight: "{cell-rounded}" } },
        _notLast: {
          _before: {
            me: "calc({cell-gap} * -1)",
            w: "calc({cell-size} + {cell-gap})",
          },
        },
      },
      "&[data-between], &[data-end]:not(:first-of-type), &[data-start]:not(:last-of-type)":
        {
          _before: {
            layerStyle: "ghost.hover",
            boxSize: "{cell-size}",
            position: "absolute",
            zIndex: "-1",
          },
        },
      "&[data-end]:not(:first-of-type)::before": {
        roundedRight: "{cell-rounded}",
      },
      "&[data-holiday]:not([data-selected])": { color: "{holiday-color}" },
      "&[data-outside]:not([data-selected])": { "& > span": { opacity: 0.4 } },
      "&[data-start]:not(:last-of-type)::before": {
        me: "calc({cell-gap} * -1)",
        roundedLeft: "{cell-rounded}",
        w: "calc({cell-size} + {cell-gap})",
      },
      "&[data-today]:not([data-outside], [data-selected], [data-between])": {
        layerStyle: "ghost.hover",
      },
      "&[data-weekend]:not([data-selected])": {
        color: "{weekend-color}",
      },
      borderColor: "transparent",
      fontWeight: "normal",
      overflow: "inherit",
      rounded: "{cell-rounded}",
      _hover: {
        "&:not([data-selected], [data-today], [data-between])": {
          layerStyle: "ghost.hover",
        },
      },
      _selected: { layerStyle: "solid" },
    },
    month: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      gap: "{cell-gap}",
      outline: "none",
    },
    months: {},
    navigation: {},
    next: {},
    prev: {},
    root: {
      "--cell-gap": "spaces.1",
      "--holiday-color": ["colors.red.500", "colors.red.400"],
      "--select-content-size": "auto",
      "--select-font-size": "{font-size}",
      "--select-root-size": "fit-content",
      "--weekend-color": "{holiday-color}",
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      fontSize: "{font-size}",
      w: "calc({cell-size} * 7 + {cell-gap} * 6)",
    },
    row: {
      display: "grid",
      gap: "{cell-gap}",
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    select: { minH: "{cell-size}!" },
    separator: { color: "fg.muted" },
    week: {},
    weekday: { color: "fg.muted", fontWeight: "normal" },
    weeks: {
      display: "grid",
      gap: "{cell-gap}",
    },
    years: {},
  },

  props: {
    /**
     * If `true`, the calendar will be fixed rows.
     *
     * @default true
     */
    fixed: {
      true: {
        weeks: {
          gridTemplateRows: "repeat(6, 1fr)",
        },
      },
    },
    /**
     * The shape of the cell
     *
     * @default 'circle'
     */
    shape: {
      circle: {
        root: { "--cell-rounded": "radii.full" },
      },
      rounded: {
        root: { "--cell-rounded": "radii.l2" },
      },
      square: {
        root: { "--cell-rounded": "0" },
      },
    },
  },

  sizes: {
    xs: {
      root: { "--cell-size": "sizes.8", "--font-size": "fontSizes.xs" },
    },
    sm: {
      root: { "--cell-size": "sizes.9", "--font-size": "fontSizes.sm" },
    },
    md: {
      root: { "--cell-size": "sizes.10", "--font-size": "fontSizes.md" },
    },
    lg: {
      root: { "--cell-size": "sizes.11", "--font-size": "fontSizes.lg" },
    },
    xl: {
      root: { "--cell-size": "sizes.12", "--font-size": "fontSizes.xl" },
    },
    "2xl": {
      root: { "--cell-size": "sizes.14", "--font-size": "fontSizes.xl" },
    },
  },

  defaultProps: {
    size: "md",
    fixed: true,
    shape: "rounded",
  },
})

export type CalendarStyle = typeof calendarStyle
