import { defineComponentSlotStyle } from "../../core"
import { iconButtonStyle } from "../icon-button"

export const paginationStyle = defineComponentSlotStyle({
  base: {
    item: {
      fontWeight: "normal",
      _current: {
        cursor: "default",
        pointerEvents: "none",
      },
    },
    root: {
      "& > [data-ellipsis]": {
        pointerEvents: "none",
      },
    },
    text: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  },

  variants: {
    outline: {
      item: {
        ...iconButtonStyle.variants?.ghost,
        _current: {
          ...iconButtonStyle.variants?.outline,
        },
      },
    },
    solid: {
      item: {
        ...iconButtonStyle.variants?.ghost,
        _current: {
          ...iconButtonStyle.variants?.solid,
        },
      },
    },
    subtle: {
      item: {
        ...iconButtonStyle.variants?.ghost,
        _current: {
          ...iconButtonStyle.variants?.subtle,
        },
      },
    },
    surface: {
      item: {
        ...iconButtonStyle.variants?.ghost,
        _current: {
          ...iconButtonStyle.variants?.surface,
        },
      },
    },
  },

  sizes: {
    xs: {
      item: {
        ...iconButtonStyle.sizes?.xs,
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.xs.fontSize },
      },
      root: {
        "--font-size": "fontSizes.sm",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
    sm: {
      item: {
        ...iconButtonStyle.sizes?.sm,
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.sm.fontSize },
      },
      root: {
        "--font-size": "fontSizes.md",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
    md: {
      item: {
        ...iconButtonStyle.sizes?.md,
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.md.fontSize },
      },
      root: {
        "--font-size": "fontSizes.lg",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
    lg: {
      item: {
        ...iconButtonStyle.sizes?.lg,
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.lg.fontSize },
      },
      root: {
        "--font-size": "fontSizes.xl",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
    xl: {
      item: {
        ...iconButtonStyle.sizes?.xl,
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.xl.fontSize },
      },
      root: {
        "--font-size": "fontSizes.2xl",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
    "2xl": {
      item: {
        ...iconButtonStyle.sizes?.["2xl"],
        fontSize: "{font-size}",
        _icon: { fontSize: iconButtonStyle.sizes?.["2xl"].fontSize },
      },
      root: {
        "--font-size": "fontSizes.2xl",
      },
      text: {
        fontSize: "{font-size}",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type PaginationStyle = typeof paginationStyle
