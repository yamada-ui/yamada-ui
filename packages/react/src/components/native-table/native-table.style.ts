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
      verticalAlign: "top",
      _numeric: {
        textAlign: "end",
      },
    },
    tfoot: {},
    th: {
      fontWeight: "medium",
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
            cursor: "pointer",
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
        tr: {
          _notLastChild: { borderRightWidth: "1px" },
        },
      },
    },
  },

  variants: {
    line: {
      tbody: {
        "& tr": {
          _last: {
            "& th, td": {
              borderBottomWidth: 0,
            },
          },
        },
      },
      td: {
        borderBottomWidth: "1px",
      },
      tfoot: {
        "& tr": {
          "& th": {
            borderBottomWidth: 0,
            borderTopWidth: "1px",
          },
        },
      },
      th: {
        borderBottomWidth: "1px",
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
        "& tr": {
          _last: {
            "& th, td": {
              borderBottomWidth: 0,
            },
          },
        },
      },
      td: {
        borderBottomWidth: "1px",
      },
      tfoot: {
        "& tr": {
          "& th": {
            borderBottomWidth: 0,
            borderTopWidth: "1px",
          },
          bg: "colorScheme.bg",
        },
      },
      th: {
        borderBottomWidth: "1px",
      },
      thead: {
        "& tr": {
          bg: "colorScheme.bg",
        },
      },
    },
  },

  sizes: {
    sm: {
      root: {
        fontSize: "xs",
      },
      td: {
        px: "2",
        py: "1",
      },
      th: {
        px: "2",
        py: "1",
      },
    },
    md: {
      root: {
        fontSize: "sm",
      },
      td: {
        px: "3",
        py: "2",
      },
      th: {
        px: "3",
        py: "2",
      },
    },
    lg: {
      root: {
        fontSize: "md",
      },
      td: {
        px: "4",
        py: "3",
      },
      th: {
        px: "4",
        py: "3",
      },
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
