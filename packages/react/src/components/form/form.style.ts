import type { ComponentCompound, CSSSlotObject } from "../../core"
import { defineComponentSlotStyle } from "../../core"
import { fieldsetStyle } from "../fieldset"

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
    elevated: { group: fieldsetStyle.variants?.elevated.root },
    outline: { group: fieldsetStyle.variants?.outline.root },
    panel: { group: fieldsetStyle.variants?.panel.root },
    plain: { group: fieldsetStyle.variants?.plain.root },
  },

  sizes: {
    sm: {
      body: { gap: "5" },
      description: { fontSize: "sm", gap: "1" },
      footer: { gap: "3" },
      group: { gap: fieldsetStyle.sizes?.sm.root.gap },
      header: { gap: "1" },
      root: { gap: "5" },
      title: { fontSize: "xl", gap: "1" },
    },
    md: {
      body: { gap: "6" },
      description: { fontSize: "sm", gap: "1" },
      footer: { gap: "4" },
      group: { gap: fieldsetStyle.sizes?.md.root.gap },
      header: { gap: "1" },
      root: { gap: "6" },
      title: { fontSize: "2xl", gap: "1" },
    },
    lg: {
      body: { gap: "8" },
      description: { fontSize: "md", gap: "1" },
      footer: { gap: "6" },
      group: { gap: fieldsetStyle.sizes?.lg.root.gap },
      header: { gap: "1" },
      root: { gap: "8" },
      title: { fontSize: "3xl", gap: "1" },
    },
  },

  compounds: (
    fieldsetStyle.compounds as ComponentCompound<CSSSlotObject>[] | undefined
  )?.map(({ css, ...rest }) => ({
    css: { group: css.root },
    ...rest,
  })),

  defaultProps: {
    size: "md",
    variant: "plain",
  },
})

export type FormStyle = typeof formStyle
