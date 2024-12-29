import { defineComponentStyle } from "../../core"

export const buttonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    appearance: "none",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "medium",
    justifyContent: "center",
    outline: "none",
    overflow: "hidden",
    position: "relative",
    transitionDuration: "slower",
    transitionProperty: "common",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _disabled: {
      boxShadow: "none",
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _focus: {
      outline: "none",
    },
    _hover: {
      _disabled: {
        bg: ["initial", "initial"],
      },
    },
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: {
        rounded: "full",
      },
    },
  },

  variants: {
    ghost: {
      bg: "transparent",
      color: "colorScheme.fg",
      _hover: {
        bg: "colorScheme.subtle",
      },
    },
    outline: {
      bg: "transparent",
      border: "1px solid $colorScheme.outline",
      color: "colorScheme.outline",
      _hover: {
        bg: "colorScheme.subtle",
      },
    },
    solid: {
      bg: "colorScheme.solid",
      color: "colorScheme.contrast",
      _hover: {
        bg: "colorScheme.solid/80",
      },
    },
    subtle: {
      bg: "colorScheme.subtle",
      color: "colorScheme.fg",
      _hover: {
        bg: "colorScheme.muted",
      },
    },
    surface: {
      bg: "colorScheme.subtle",
      border: "1px solid $colorScheme.muted",
      color: "colorScheme.fg",
      _hover: {
        bg: "colorScheme.muted",
      },
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      gap: "1",
      h: "8",
      lineHeight: "$sizes.8",
      minW: "8",
      px: "2.5",
      rounded: "md",
    },
    sm: {
      fontSize: "sm",
      gap: "2",
      h: "9",
      lineHeight: "$sizes.9",
      minW: "9",
      px: "3.5",
      rounded: "md",
    },
    md: {
      fontSize: "md",
      gap: "2",
      h: "10",
      lineHeight: "$sizes.10",
      minW: "10",
      px: "4",
      rounded: "md",
    },
    lg: {
      fontSize: "lg",
      gap: "3",
      h: "11",
      lineHeight: "$sizes.11",
      minW: "11",
      px: "5",
      rounded: "md",
    },
    xl: {
      fontSize: "xl",
      gap: "4",
      h: "12",
      lineHeight: "$sizes.12",
      minW: "12",
      px: "6",
      rounded: "lg",
    },
    "2xl": {
      fontSize: "xl",
      gap: "3",
      h: "14",
      lineHeight: "$sizes.14",
      minW: "14",
      px: "7",
      rounded: "lg",
    },
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "solid",
  },
})

export type ButtonStyle = typeof buttonStyle
