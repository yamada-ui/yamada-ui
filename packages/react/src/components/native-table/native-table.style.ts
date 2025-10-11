import { defineComponentSlotStyle } from "../../core"

export const nativeTableStyle = defineComponentSlotStyle({
  base: {
    caption: {
      "&[data-placement='end']": {
        mt: "sm",
      },
      "&[data-placement='start']": {
        mb: "sm",
      },
      color: "fg.muted",
      fontSize: "xs",
      fontWeight: "medium",
      textAlign: "center",
    },
    col: {},
    colgroup: {},
    root: {
      borderCollapse: "collapse",
      fontVariantNumeric: "lining-nums tabular-nums",
      h: "full",
      w: "full",
    },
    scrollArea: {
      display: "block",
      maxW: "full",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      whiteSpace: "nowrap",
    },
    tbody: {},
    td: {
      px: "{space-x}",
      py: "{space-y}",
      verticalAlign: "top",
      _numeric: {
        textAlign: "end",
      },
    },
    tfoot: {
      "& td": {
        fontWeight: "medium",
        textAlign: "start",
        verticalAlign: "middle",
      },
    },
    th: {
      fontWeight: "medium",
      px: "{space-x}",
      py: "{space-y}",
      textAlign: "start",
      verticalAlign: "middle",
      _numeric: {
        textAlign: "end",
      },
    },
    thead: {},
    tr: {
      _disabled: {
        layerStyle: "disabled",
      },
    },
  },

  props: {
    /**
     * If `true`, highlight the row when the table row is hovered.
     *
     * @default false
     */
    highlightOnHover: {
      true: {
        tbody: {
          "& tr": {
            transitionDuration: "moderate",
            transitionProperty: "common",
            _hover: {
              bg: "colorScheme.bg",
            },
          },
        },
      },
    },
    /**
     * If `true`, highlight the row when the table row is selected.
     *
     * @default false
     */
    highlightOnSelected: {
      true: {
        tbody: {
          "& tr": {
            transitionDuration: "moderate",
            transitionProperty: "common",
            _selected: {
              bg: "colorScheme.bg",
            },
          },
        },
      },
    },
    /**
     * If `true`, display the sticky footer.
     *
     * @default false
     */
    stickyFooter: {
      true: {
        tfoot: {
          "& tr": {
            bottom: "0",
            position: "sticky",
            zIndex: "yamcha",
          },
        },
      },
    },
    /**
     * If `true`, display the sticky header.
     *
     * @default false
     */
    stickyHeader: {
      true: {
        thead: {
          "& tr": {
            position: "sticky",
            top: "0",
            zIndex: "yamcha",
          },
        },
      },
    },
    /**
     * If `true`, display striped rows.
     *
     * @default false
     */
    striped: {
      true: {},
    },
    /**
     * If `true`, display the outer border of the table.
     *
     * @default false
     */
    withBorder: {
      true: {
        root: { borderWidth: "1px" },
      },
    },
    /**
     * If `true`, display line on the columns of the table.
     *
     * @default false
     */
    withColumnBorders: {
      true: {
        tr: { "& th, td": { borderRightWidth: "1px" } },
      },
    },
  },

  variants: {
    line: {
      tbody: {
        "& tr:not(:first-of-type)": { "& th, td": { borderTopWidth: "1px" } },
        "& tr:only-child": { "& th, td": { borderTopWidth: "1px" } },
      },
      tfoot: {
        "& tr": { "& th, td": { borderTopWidth: "1px" } },
      },
      thead: {
        "& tr": { "& th, td": { borderBottomWidth: "1px" } },
      },
    },
    outline: {
      root: {
        borderWidth: "1px",
      },
      scrollArea: {
        borderWidth: "1px",
      },
      tbody: {
        "& tr:not(:first-of-type)": { "& th, td": { borderTopWidth: "1px" } },
        "& tr:only-child": { "& th, td": { borderTopWidth: "1px" } },
      },
      tfoot: {
        "& tr": {
          "&:first-of-type": { "& th, td": { borderTopWidth: "1px" } },
          bg: "colorScheme.bg",
        },
      },
      thead: {
        "& tr": {
          "&:last-of-type": { "& th, td": { borderBottomWidth: "1px" } },
          bg: "colorScheme.bg",
        },
      },
    },
  },

  sizes: {
    sm: {
      root: { fontSize: "xs" },
      td: { "--space-x": "spaces.2", "--space-y": "spaces.1" },
      th: { "--space-x": "spaces.2", "--space-y": "spaces.1" },
    },
    md: {
      root: { fontSize: "sm" },
      td: { "--space-x": "spaces.3", "--space-y": "spaces.2" },
      th: { "--space-x": "spaces.3", "--space-y": "spaces.2" },
    },
    lg: {
      root: { fontSize: "md" },
      td: { "--space-x": "spaces.4", "--space-y": "spaces.3" },
      th: { "--space-x": "spaces.4", "--space-y": "spaces.3" },
    },
  },

  compounds: [
    {
      css: {
        tbody: {
          "& tr": {
            _odd: {
              bg: "colorScheme.bg",
            },
          },
        },
      },
      variant: "line",
      layer: "props",
      striped: true,
    },
    {
      css: {
        tbody: {
          "& tr": {
            _even: {
              bg: "colorScheme.bg",
            },
          },
        },
      },
      variant: "outline",
      layer: "props",
      striped: true,
    },
    {
      css: {
        root: {
          borderWidth: "0",
        },
      },
      variant: "outline",
      withScrollArea: true,
    },
  ],

  defaultProps: {
    size: "md",
    variant: "line",
  },
})

export type NativeTableStyle = typeof nativeTableStyle
