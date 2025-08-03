import { defineComponentSlotStyle } from "../../core"
import { popoverStyle } from "../popover"

export const menuStyle = defineComponentSlotStyle({
  base: {
    command: {
      textStyle: "mono",
      color: "fg.muted",
      ms: "auto",
    },
    content: {
      "&:has([data-footer])": {
        scrollPaddingBottom: "calc({space} + {footer-height} + {border-width})",
      },
      "&:has([data-header])": {
        scrollPaddingTop: "calc({space} + {header-height} + {border-width})",
      },
      "--border-width": "1px",
      "--footer-height": "{item-height}",
      "--header-height": "{item-height}",
      gap: "0",
      overflow: "auto",
      p: "{space}",
      scrollPaddingBottom: "{space}",
      scrollPaddingTop: "{space}",
    },
    footer: {
      alignItems: "center",
      bg: popoverStyle.base?.content?.bg,
      borderTopWidth: "{border-width}",
      bottom: "calc({space} * -1)",
      display: "flex",
      left: "0",
      mb: "calc({space} * -1)",
      minH: "{footer-height}",
      mt: "{space}",
      mx: "calc({space} * -1)",
      position: "sticky",
      right: "0",
    },
    group: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      alignItems: "center",
      bg: popoverStyle.base?.content?.bg,
      borderBottomWidth: "{border-width}",
      display: "flex",
      left: "0",
      mb: "{space}",
      minH: "{header-height}",
      mt: "calc({space} * -1)",
      mx: "calc({space} * -1)",
      position: "sticky",
      right: "0",
      top: "calc({space} * -1)",
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
      minH: "{item-height}",
      userSelect: "none",
      _activedescendant: { bg: "bg.muted/70" },
      _disabled: { layerStyle: "disabled" },
    },
    label: {
      alignItems: "center",
      display: "flex",
      fontWeight: "medium",
      minH: "{item-height}",
    },
    separator: {
      "& + hr": { display: "none" },
      "&:last-child, &:first-child": { display: "none" },
      borderBottomWidth: "{border-width}",
      mx: "calc({space} * -1)",
      my: "{space}",
    },
  },

  sizes: {
    sm: {
      command: { fontSize: "2xs" },
      content: {
        "--item-height": "spaces.7",
        "--space": "spaces.1",
        fontSize: "xs",
        minW: "3xs",
      },
      footer: { px: "1.5" },
      header: { px: "1.5" },
      indicator: { fontSize: "sm" },
      item: { gap: "1.5", px: "1.5", rounded: "l1" },
      label: { px: "1.5" },
    },
    md: {
      command: { fontSize: "xs" },
      content: {
        "--item-height": "spaces.8",
        "--space": "spaces.1",
        fontSize: "sm",
        minW: "2xs",
      },
      footer: { px: "2" },
      header: { px: "2" },
      indicator: { fontSize: "md" },
      item: { gap: "2", px: "2", rounded: "l1" },
      label: { px: "2" },
    },
    lg: {
      command: { fontSize: "sm" },
      content: {
        "--item-height": "spaces.9",
        "--space": "spaces.1",
        fontSize: "md",
        minW: "2xs",
      },
      footer: { px: "2" },
      header: { px: "2" },
      indicator: { fontSize: "lg" },
      item: { gap: "2", px: "2", rounded: "l1" },
      label: { px: "2" },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type MenuStyle = typeof menuStyle
