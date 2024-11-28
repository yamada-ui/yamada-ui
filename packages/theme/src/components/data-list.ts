import type { ComponentMultiStyle } from "@yamada-ui/core"

export const DataList: ComponentMultiStyle<"DataList"> = {
  baseStyle: {
    container: {
      display: "grid",
      w: "fit-content",
      _horizontal: {
        gridTemplateColumns: "repeat($col, auto)",
      },
      _vertical: {
        gridTemplateColumns: "auto",
      },
    },
    description: {},
    item: {
      _horizontal: {
        display: "contents",
      },
      _vertical: {
        display: "flex",
        flexDirection: "column",
        gap: "xs",
      },
    },
    term: {},
  },

  variants: {
    bold: {
      description: {
        color: "muted",
      },
      term: {
        fontWeight: "semibold",
      },
    },
    grid: {
      container: {
        borderWidth: "1px",
        gap: "0",
        _notFirstChild: {
          _child: {
            borderTopWidth: "1px",
          },
        },
      },
      item: {
        _notFirstChild: {
          borderLeftWidth: "1px",
        },
      },
      term: { color: "muted", fontWeight: "semibold" },
    },
    subtle: {
      term: { color: "muted" },
    },
  },

  sizes: {
    sm: {
      container: {
        fontSize: "xs",
        gap: "2",
        _grid: {
          rounded: "md",
        },
      },
      description: {
        _grid: {
          lineHeight: 5,
          px: 2,
          py: 1,
        },
      },
      term: {
        _grid: {
          lineHeight: 5,
          px: 2,
          py: 1,
        },
      },
    },
    md: {
      container: {
        fontSize: "sm",
        gap: "4",
        _grid: {
          rounded: "lg",
        },
      },
      description: {
        _grid: {
          lineHeight: 5,
          px: 3,
          py: 2,
        },
      },
      term: {
        _grid: {
          lineHeight: 5,
          px: 3,
          py: 2,
        },
      },
    },
    lg: {
      container: {
        fontSize: "md",
        gap: "6",
        _grid: {
          rounded: "xl",
        },
      },
      description: {
        _grid: {
          lineHeight: 6,
          px: 4,
          py: 3,
        },
      },
      term: {
        _grid: {
          lineHeight: 6,
          px: 4,
          py: 3,
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "subtle",
  },
}
