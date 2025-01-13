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
        borderColor: "border.subtle",
        borderWidth: "1px",
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
      body: { gap: "3", px: "3", py: "3" },
      footer: { gap: "3", pb: "3", px: "3" },
      header: { fontSize: "lg", gap: "3", pt: "3", px: "3" },
      root: { rounded: "base" },
    },
    md: {
      body: { gap: "4", px: "4", py: "4" },
      footer: { gap: "4", pb: "4", px: "4" },
      header: { fontSize: "xl", gap: "4", pt: "4", px: "4" },
      root: { rounded: "md" },
    },
    lg: {
      body: { gap: "6", px: "6", py: "6" },
      footer: { gap: "6", pb: "6", px: "6" },
      header: { fontSize: "2xl", gap: "6", pt: "6", px: "6" },
      root: { rounded: "xl" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "panel",
  },
})

export type CardStyle = typeof cardStyle
