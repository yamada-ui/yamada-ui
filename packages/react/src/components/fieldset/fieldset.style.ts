import type { ComponentCompound, CSSSlotObject } from "../../core"
import { defineComponentSlotStyle } from "../../core"
import { formStyle } from "../form"

export const fieldsetStyle = defineComponentSlotStyle({
  base: {
    content: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    errorMessage: {
      alignItems: "center",
      color: "fg.error",
      display: "inline-flex",
      gap: "1",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    helperMessage: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
      gap: "1",
    },
    legend: {
      fontWeight: "medium",
      _disabled: { opacity: 0.4 },
    },
    root: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
  },

  variants: {
    elevated: { root: formStyle.variants?.elevated.group },
    outline: { root: formStyle.variants?.outline.group },
    panel: { root: formStyle.variants?.panel.group },
    plain: { root: formStyle.variants?.plain.group },
  },

  sizes: {
    sm: {
      content: { gap: "3" },
      errorMessage: { fontSize: "sm" },
      header: { gap: "1" },
      helperMessage: { fontSize: "sm" },
      legend: { fontSize: "md" },
      root: { gap: formStyle.sizes?.sm.root.gap },
    },
    md: {
      content: { gap: "4" },
      errorMessage: { fontSize: "sm" },
      header: { gap: "1" },
      helperMessage: { fontSize: "sm" },
      legend: { fontSize: "md" },
      root: { gap: formStyle.sizes?.md.root.gap },
    },
    lg: {
      content: { gap: "6" },
      errorMessage: { fontSize: "md" },
      header: { gap: "1" },
      helperMessage: { fontSize: "md" },
      legend: { fontSize: "lg" },
      root: { gap: formStyle.sizes?.lg.root.gap },
    },
  },

  compounds: (
    formStyle.compounds as ComponentCompound<CSSSlotObject>[] | undefined
  )?.map(({ css, ...rest }) => ({
    css: { root: css.group },
    ...rest,
  })),

  defaultProps: {
    size: "md",
    variant: "plain",
  },
})

export type FieldsetStyle = typeof fieldsetStyle
