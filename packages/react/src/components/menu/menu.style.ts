import { defineComponentSlotStyle } from "../../core"

export const menuStyle = defineComponentSlotStyle({
  base: {
    command: {
      textStyle: "mono",
      color: "fg.muted",
      ms: "auto",
    },
    content: { gap: "0" },
    group: {
      display: "flex",
      flexDirection: "column",
    },
    indicator: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      focusVisibleRing: "none",
      userSelect: "none",
      _activedescendant: { bg: ["bg.subtle", "bg.muted"] },
      _disabled: { layerStyle: "disabled" },
    },
    label: { fontWeight: "medium" },
    separator: {
      "& + hr": { display: "none" },
      "&:last-child, &:first-child": { display: "none" },
      borderBottomWidth: "1px",
      mx: "-1",
      my: "1",
    },
  },

  sizes: {
    sm: {
      command: { fontSize: "2xs" },
      content: { fontSize: "xs", minW: "3xs", p: "1" },
      indicator: { fontSize: "sm" },
      item: { gap: "1.5", px: "1.5", py: "1", rounded: "l1" },
      label: { px: "1.5", py: "1" },
      separator: { my: "1" },
    },
    md: {
      command: { fontSize: "xs" },
      content: { fontSize: "sm", minW: "2xs", p: "1" },
      indicator: { fontSize: "md" },
      item: { gap: "2", px: "2", py: "1.5", rounded: "l1" },
      label: { px: "2", py: "1.5" },
      separator: { my: "1" },
    },
    lg: {
      command: { fontSize: "sm" },
      content: { fontSize: "md", minW: "2xs", p: "2" },
      indicator: { fontSize: "lg" },
      item: { gap: "2", px: "2", py: "2", rounded: "l1" },
      label: { px: "2", py: "2" },
      separator: { my: "2" },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type MenuStyle = typeof menuStyle
