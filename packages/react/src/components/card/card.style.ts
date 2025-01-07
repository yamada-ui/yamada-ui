import { defineComponentSlotStyle } from "../../core"

export const cardStyle = defineComponentSlotStyle({
  base: {
    body: {
      alignItems: "start",
      display: "flex",
      flex: "1",
      flexDirection: "column",
    },
    footer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "start",
    },
    header: {
      alignItems: "center",
      display: "flex",
      justifyContent: "start",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      w: "full",
      wordWrap: "break-word",
    },
  },

  sizes: {
    sm: {
      body: { gap: "sm", px: "sm", py: "sm" },
      footer: { gap: "sm", pb: "sm", px: "sm" },
      header: { gap: "sm", pt: "sm", px: "sm" },
      root: { rounded: "base" },
    },
    md: {
      body: { gap: "md", px: "md", py: "md" },
      footer: { gap: "md", pb: "md", px: "md" },
      header: { gap: "md", pt: "md", px: "md" },
      root: { rounded: "md" },
    },
    normal: {
      body: { gap: "normal", px: "normal", py: "normal" },
      footer: { gap: "normal", pb: "normal", px: "normal" },
      header: { gap: "normal", pt: "normal", px: "normal" },
      root: { rounded: "lg" },
    },
    lg: {
      body: { gap: "lg", px: "lg", py: "lg" },
      footer: { gap: "lg", pb: "lg", px: "lg" },
      header: { gap: "lg", pt: "lg", px: "lg" },
      root: { rounded: "xl" },
    },
  },

  variants: {
    elevated: {
      root: {
        boxShadow: ["md", "dark-md"],
      },
    },
    outline: {
      root: {
        borderWidth: "1px",
      },
    },
    panel: {
      root: {
        bg: "bg.panel",
      },
    },
    solid: {
      root: {
        bg: "colorScheme.solid",
        color: "colorScheme.contrast",
      },
    },
    subtle: {
      root: {
        bg: "colorScheme.subtle",
      },
    },
    surface: {
      root: {
        bg: "colorScheme.subtle",
        borderColor: "colorScheme.muted",
        borderWidth: "1px",
        color: "colorScheme.fg",
      },
    },
    unstyled: {
      body: { p: 0 },
      footer: { p: 0 },
      header: { p: 0 },
      root: { rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
    variant: "panel",
  },
})

export type CardStyle = typeof cardStyle
