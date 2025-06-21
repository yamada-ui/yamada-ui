import { defineComponentSlotStyle } from "../../core"

export const menuStyle = defineComponentSlotStyle({
  base: {
    button: {
      alignItems: "center",
      appearance: "none",
      display: "inline-flex",
      outline: 0,
      transitionDuration: "moderate",
      transitionProperty: "common",
    },
    command: {
      opacity: 0.6,
    },
    content: {
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      boxShadow: ["lg", "dark-lg"],
      color: "inherit",
      minW: "xs",
      p: "0",
      rounded: "md",
      zIndex: "guldo",
    },
    group: {},
    groupLabel: {
      color: "muted",
      fontSize: "sm",
      fontWeight: "semibold",
      px: "3",
      py: "1.5",
    },
    item: {
      alignItems: "center",
      color: "inherit",
      cursor: "pointer",
      display: "flex",
      flex: "0 0 auto",
      gap: "0.75rem",
      outline: 0,
      px: "3",
      py: "1.5",
      textAlign: "start",
      textDecoration: "none",
      transitionDuration: "ultra-fast",
      transitionProperty: "background",
      transitionTimingFunction: "ease-in",
      userSelect: "none",
      width: "100%",
      _active: {
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        _focus: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
        _disabled: {
          bg: ["white", "black"],
        },
      },
      _focus: {
        bg: ["blackAlpha.50", "whiteAlpha.50"],
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    "item-button": {},
    "item-group": {},
    list: {
      outline: "none",
      py: "2",
    },
    "option-group": {},
    "option-item": {},
    root: {},
    separator: {
      borderBottomWidth: "1px",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      my: "2",
    },
  },
})

export type MenuStyle = typeof menuStyle
