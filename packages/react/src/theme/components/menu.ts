import type { ComponentMultiStyle } from "../../core"

export const Menu: ComponentMultiStyle<"Menu"> = {
  baseStyle: {
    button: {
      alignItems: "center",
      appearance: "none",
      display: "inline-flex",
      outline: 0,
      transitionDuration: "normal",
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
      rounded: "md",
      zIndex: "guldo",
    },
    divider: {
      borderBottomWidth: "1px",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      my: "2",
    },
    group: {},
    groupLabel: {
      color: "muted",
      fontSize: "sm",
      fontWeight: "semibold",
      px: "3",
      py: "1.5",
    },
    icon: {
      alignItems: "center",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      display: "inline-flex",
      flexShrink: 0,
      fontSize: "0.85em",
      justifyContent: "center",
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
        _disabled: {
          bg: ["white", "black"],
        },
        _focus: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _focus: {
        bg: ["blackAlpha.50", "whiteAlpha.50"],
      },
    },
    list: {
      outline: "none",
      py: "2",
    },
    separator: {
      borderBottomWidth: "1px",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      my: "2",
    },
  },
}
