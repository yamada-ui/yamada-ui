import { defineComponentSlotStyle } from "../../core"

export const switchStyle = defineComponentSlotStyle({
  base: {
    input: {},
    label: {
      userSelect: "none",
    },
    root: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      gap: "0.5rem",
      position: "relative",
      verticalAlign: "top",
      _readOnly: { cursor: "auto" },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    thumb: {
      bg: "white",
      position: "absolute",
      rounded: "inherit",
      transitionDuration: "fast",
      transitionProperty: "transform",
      _checked: {
        transform: "translateX(100%)",
      },
    },
    track: {
      alignItems: "center",
      bg: ["blackAlpha.400", "whiteAlpha.300"],
      boxSizing: "content-box",
      display: "inline-flex",
      flexShrink: 0,
      rounded: "full",
      transitionDuration: "fast",
      transitionProperty: "background-color, position",
      _focusVisible: {
        boxShadow: "outline",
      },
    },
  },

  sizes: {
    sm: {
      label: { fontSize: "sm" },
      thumb: {
        h: "3",
        w: "3",
      },
      track: {
        w: "6",
      },
    },
    md: {
      label: { fontSize: "md" },
      thumb: {
        h: "4",
        w: "4",
      },
      track: {
        w: "8",
      },
    },
    lg: {
      label: { fontSize: "lg" },
      thumb: {
        h: "5",
        w: "5",
      },
      track: {
        w: "10",
      },
    },
  },

  variants: {
    thin: {
      thumb: {
        boxShadow: "dark-md",
        _checked: {
          bg: "colorScheme.solid",
        },
      },
      track: {
        _checked: {
          bg: "colorScheme.bg",
        },
      },
    },
    thick: {
      thumb: {
        _checked: {
          bg: "colorScheme.contrast",
        },
      },
      track: {
        p: "1",
        _checked: {
          bg: "colorScheme.solid",
        },
      },
    },
  },

  props: {
    /**
     * Change switch label from right to left.
     *
     * @default false
     */
    reverse: {
      false: {
        root: { flexDirection: "row" },
      },
      true: {
        root: { flexDirection: "row-reverse" },
      },
    },
  },

  compounds: [
    {
      css: {
        track: { h: "3" },
      },
      size: "sm",
      variant: "thick",
    },
    {
      css: {
        track: { h: "4" },
      },
      size: "md",
      variant: "thick",
    },
    {
      css: {
        track: { h: "5" },
      },
      size: "lg",
      variant: "thick",
    },
    {
      css: {
        track: { h: "2" },
      },
      size: "sm",
      variant: "thin",
    },
    {
      css: {
        track: { h: "3" },
      },
      size: "md",
      variant: "thin",
    },
    {
      css: {
        track: { h: "4" },
      },
      size: "lg",
      variant: "thin",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "thick",
  },
})

export type SwitchStyle = typeof switchStyle
