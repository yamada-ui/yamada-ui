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
        layerStyle: "solid",
      },
    },
    subtle: {
      root: {
        layerStyle: "subtle",
      },
    },
    surface: {
      root: {
        layerStyle: "surface",
      },
    },
    unstyled: {
      body: { p: 0 },
      footer: { p: 0 },
      header: { p: 0 },
      root: { rounded: 0 },
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

  defaultProps: {
    size: "md",
    variant: "panel",
  },
})

export type CardStyle = typeof cardStyle
