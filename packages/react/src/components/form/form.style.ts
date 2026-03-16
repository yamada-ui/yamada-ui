import { defineComponentSlotStyle } from "../../core"

export const formStyle = defineComponentSlotStyle({
  base: {
    body: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    description: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    group: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    submitButton: {},
    title: {
      display: "flex",
      fontWeight: "medium",
    },
  },

  variants: {
    elevated: { group: { bg: "bg.panel", boxShadow: "md" } },
    outline: { group: { borderWidth: "1px" } },
    panel: { group: { layerStyle: "panel" } },
    plain: { group: {} },
  },

  sizes: {
    sm: {
      body: { gap: "5" },
      description: { fontSize: "sm", gap: "1" },
      footer: { gap: "3" },
      group: { gap: "3" },
      header: { gap: "1" },
      root: { gap: "5" },
      title: { fontSize: "xl", gap: "1" },
    },
    md: {
      body: { gap: "6" },
      description: { fontSize: "sm", gap: "1" },
      footer: { gap: "4" },
      group: { gap: "4" },
      header: { gap: "1" },
      root: { gap: "6" },
      title: { fontSize: "2xl", gap: "1" },
    },
    lg: {
      body: { gap: "8" },
      description: { fontSize: "md", gap: "1" },
      footer: { gap: "6" },
      group: { gap: "6" },
      header: { gap: "1" },
      root: { gap: "8" },
      title: { fontSize: "3xl", gap: "1" },
    },
  },

  compounds: [
    {
      css: { group: { p: "3", rounded: "l2" } },
      size: "sm",
      variant: ["elevated", "outline", "panel"],
    },
    {
      css: { group: { p: "4", rounded: "l2" } },
      size: "md",
      variant: ["elevated", "outline", "panel"],
    },
    {
      css: { group: { p: "6", rounded: "l2" } },
      size: "lg",
      variant: ["elevated", "outline", "panel"],
    },
  ],

  defaultProps: {
    size: "md",
    variant: "plain",
  },
})

export type FormStyle = typeof formStyle
