import { defineComponentSlotStyle } from "../../core"

export const nativeTableStyle = defineComponentSlotStyle({
  base: {
    caption: {
      color: "fg.muted",
      fontFamily: "heading",
      fontWeight: "medium",
      textAlign: "center",
    },
    container: {
      display: "block",
      maxW: "100%",
      overflowY: "hidden",
      w: "100%",
      WebkitOverflowScrolling: "touch",
      whiteSpace: "nowrap",
    },
    root: {
      borderCollapse: "collapse",
      fontVariantNumeric: "lining-nums tabular-nums",
      h: "100%",
      w: "100%",
    },
    tbody: {},
    td: {
      verticalAlign: "top",
    },
    tfoot: {},
    th: {
      color: "fg.muted",
      fontFamily: "heading",
      fontWeight: "semibold",
      letterSpacing: "wider",
      textTransform: "uppercase",
      verticalAlign: "middle",
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
          tr: {
            cursor: "pointer",
            transitionDuration: "slow",
            transitionProperty: "common",
            _hover: {
              layerStyle: "ghost.hover",
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
          tr: {
            _selected: {
              bg: "colorScheme.ghost",
            },
          },
        },
      },
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
        td: {
          _notLast: { borderRightWidth: "1px" },
        },
        th: {
          _notLast: { borderRightWidth: "1px" },
        },
      },
    },
  },

  sizes: {
    sm: {
      caption: {
        fontSize: "xs",
        mt: 1,
        px: 2,
        py: 1,
      },
      root: {
        gap: 2,
      },
      td: {
        fontSize: "xs",
        lineHeight: "short",
        px: 2,
        py: 1,
      },
      th: {
        fontSize: "xs",
        lineHeight: "short",
        px: 2,
        py: 1,
      },
    },
    md: {
      caption: {
        fontSize: "sm",
        mt: 2,
        px: 3,
        py: 2,
      },
      root: {
        gap: 4,
      },
      td: {
        fontSize: "sm",
        lineHeight: "short",
        px: 3,
        py: 2,
      },
      th: {
        fontSize: "sm",
        lineHeight: "short",
        px: 3,
        py: 2,
      },
    },
    lg: {
      caption: {
        mt: 3,
        px: 4,
        py: 3,
      },
      root: {
        gap: 6,
      },
      td: {
        lineHeight: "tall",
        px: 4,
        py: 3,
      },
      th: {
        lineHeight: "tall",
        px: 4,
        py: 3,
      },
    },
    xl: {
      caption: {
        fontSize: "lg",
        mt: 4,
        px: 6,
        py: 4,
      },
      root: {
        gap: 8,
      },
      td: {
        fontSize: "lg",
        lineHeight: "tall",
        px: 6,
        py: 4,
      },
      th: {
        fontSize: "lg",
        lineHeight: "tall",
        px: 6,
        py: 4,
      },
    },
  },

  variants: {
    simple: {
      td: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
      },
      tfoot: {
        tr: {
          _last: {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      th: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
      },
    },
    striped: {
      tbody: {
        tr: {
          _odd: {
            layerStyle: "ghost.hover",
          },
        },
      },
      td: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
      },
      tfoot: {
        tr: {
          _last: {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      th: {
        "&[data-is-numeric=true]": {
          textAlign: "end",
        },
        borderBottomWidth: "1px",
      },
    },
    unstyled: {},
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "simple",
  },
})

export type NativeTableStyle = typeof nativeTableStyle
