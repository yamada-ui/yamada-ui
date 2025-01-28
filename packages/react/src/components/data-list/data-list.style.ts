import { defineComponentSlotStyle } from "../../core"

export const dataListStyle = defineComponentSlotStyle({
  base: {
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
    root: {
      display: "grid",
      w: "fit-content",
      _horizontal: {
        gridTemplateColumns: "repeat({col}, auto)",
      },
      _vertical: {
        gridTemplateColumns: "auto",
      },
    },
    term: {},
  },

  variants: {
    bold: {
      description: {
        color: "fg.muted",
      },
      term: {
        fontWeight: "semibold",
      },
    },
    grid: {
      item: {
        _notFirstChild: {
          borderLeftWidth: "1px",
        },
      },
      root: {
        borderWidth: "1px",
        gap: "0",
        _notFirstChild: {
          _child: {
            borderTopWidth: "1px",
          },
        },
      },
      term: { color: "fg.muted", fontWeight: "semibold" },
    },
    subtle: {
      term: { color: "fg.muted" },
    },
  },

  sizes: {
    sm: {
      description: {
        _grid: {
          lineHeight: "shorter",
          px: 2,
          py: 1,
        },
      },
      root: {
        fontSize: "xs",
        gap: "2",
        _grid: {
          rounded: "md",
        },
      },
      term: {
        _grid: {
          lineHeight: "shorter",
          px: 2,
          py: 1,
        },
      },
    },
    md: {
      description: {
        _grid: {
          lineHeight: "shorter",
          px: 3,
          py: 2,
        },
      },
      root: {
        fontSize: "sm",
        gap: "4",
        _grid: {
          rounded: "lg",
        },
      },
      term: {
        _grid: {
          lineHeight: "shorter",
          px: 3,
          py: 2,
        },
      },
    },
    lg: {
      description: {
        _grid: {
          lineHeight: "moderate",
          px: 4,
          py: 3,
        },
      },
      root: {
        fontSize: "md",
        gap: "6",
        _grid: {
          rounded: "xl",
        },
      },
      term: {
        _grid: {
          lineHeight: "moderate",
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
})

export type DataListStyle = typeof dataListStyle
