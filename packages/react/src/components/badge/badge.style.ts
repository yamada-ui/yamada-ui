import { defineComponentStyle } from "../../core"

export const badgeStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    display: "inline-flex",
    fontWeight: "semibold",
    rounded: "sm",
    textTransform: "uppercase",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
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
    outline: {
      boxShadow: "inset 0 0 0px 1px $colorScheme.outline",
      color: "colorScheme.outline",
    },
    solid: {
      bg: "colorScheme.solid",
      color: "colorScheme.contrast",
    },
    subtle: {
      bg: "colorScheme.subtle",
      color: "colorScheme.fg",
    },
    surface: {
      bg: "colorScheme.subtle",
      boxShadow: "inset 0 0 0px 1px $colorScheme.muted",
      color: "colorScheme.fg",
    },
  },

  sizes: {
    sm: {
      fontSize: "xs",
      lineHeight: "$sizes.5",
      minH: "5",
      px: "1.5",
    },
    md: {
      fontSize: "sm",
      lineHeight: "$sizes.6",
      minH: "6",
      px: "2",
    },
    lg: {
      fontSize: "md",
      lineHeight: "$sizes.7",
      minH: "7",
      px: "2.5",
    },
  },

  defaultProps: {
    size: "sm",
    variant: "outline",
  },
})

export type BadgeStyle = typeof badgeStyle
