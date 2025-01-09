import { defineComponentSlotStyle } from "../../core"

export const breadcrumbStyle = defineComponentSlotStyle({
  base: {
    ellipsis: {
      color: "fg.muted",
    },
    item: {
      alignItems: "center",
      display: "inline-flex",
    },
    link: {
      outline: "none",
      textDecoration: "none",
      transitionDuration: "fast",
      transitionProperty: "common",
      transitionTimingFunction: "ease-out",
      _notCurrent: {
        _focusVisible: {
          boxShadow: "outline",
        },
      },
    },
    list: {
      alignItems: "center",
      display: "flex",
      wordBreak: "break-word",
    },
    root: {},
    separator: {
      color: "fg.muted",
    },
  },

  variants: {
    plain: {
      link: {
        _notCurrent: {
          color: "fg.muted",
          _hover: {
            color: "fg",
          },
        },
      },
    },
    underline: {
      link: {
        _notCurrent: {
          _hover: {
            textDecoration: "underline",
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      list: {
        fontSize: "sm",
        gap: "1",
      },
    },
    md: {
      list: {
        fontSize: "md",
        gap: "1.5",
      },
    },
    lg: {
      list: {
        fontSize: "lg",
        gap: "2",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "plain",
  },
})

export type BreadcrumbStyle = typeof breadcrumbStyle
