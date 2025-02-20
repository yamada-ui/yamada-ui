import { defineComponentSlotStyle } from "../../core"

export const dataListStyle = defineComponentSlotStyle({
  base: {
    description: {},
    item: {},
    root: {
      display: "grid",
      w: "fit-content",
    },
    term: {},
  },

  props: {
    /**
     * The orientation of the data list.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        item: {
          display: "contents",
        },
        root: {
          gridTemplateColumns: "repeat({--col}, auto)",
        },
      },
      vertical: {
        item: {
          display: "flex",
          flexDirection: "column",
          gap: "xs",
        },
        root: {
          gridTemplateColumns: "auto",
        },
      },
    },
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
      root: {
        borderWidth: "1px",
        gap: "0",
        rounded: "l2",
      },
      term: { color: "fg.muted" },
    },
    subtle: {
      term: { color: "fg.muted" },
    },
  },

  sizes: {
    sm: {
      root: {
        fontSize: "xs",
        gap: "2",
      },
    },
    md: {
      root: {
        fontSize: "sm",
        gap: "4",
      },
    },
    lg: {
      root: {
        fontSize: "md",
        gap: "6",
      },
    },
  },

  compounds: [
    {
      css: {
        item: {
          _notFirst: {
            _child: {
              borderTopWidth: "1px",
            },
          },
          _notFirstChild: {
            borderLeftWidth: "1px",
          },
        },
      },
      variant: "grid",
      orientation: "horizontal",
    },
    {
      css: {
        item: {
          gap: "0",
          _notFirst: {
            borderTopWidth: "1px",
          },
          _notFirstChild: {
            borderTopWidth: "1px",
          },
        },
      },
      variant: "grid",
      orientation: "vertical",
    },
    {
      css: {
        description: {
          lineHeight: "shorter",
          px: "2",
          py: "1",
        },
        term: {
          lineHeight: "shorter",
          px: "2",
          py: "1",
        },
      },
      size: "sm",
      variant: "grid",
    },
    {
      css: {
        description: {
          lineHeight: "shorter",
          px: "3",
          py: "2",
        },
        term: {
          lineHeight: "shorter",
          px: "3",
          py: "2",
        },
      },
      size: "md",
      variant: "grid",
    },
    {
      css: {
        description: {
          lineHeight: "moderate",
          px: "4",
          py: "3",
        },
        term: {
          lineHeight: "moderate",
          px: "4",
          py: "3",
        },
      },
      size: "lg",
      variant: "grid",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "subtle",
    orientation: "horizontal",
  },
})

export type DataListStyle = typeof dataListStyle
