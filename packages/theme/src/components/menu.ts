import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Menu: ComponentMultiStyle = {
  baseStyle: {
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    list: {
      rounded: "md",
      minW: "xs",
      py: "2",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      color: "inherit",
      boxShadow: ["lg", "dark-lg"],
      zIndex: "yamcha",
    },
    item: {
      cursor: "pointer",
      py: "1.5",
      px: "3",
      transitionProperty: "background",
      transitionDuration: "ultra-fast",
      transitionTimingFunction: "ease-in",
      _focus: {
        bg: ["blackAlpha.50", "whiteAlpha.50"],
      },
      _hover: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
      },
      _active: {
        bg: ["blackAlpha.200", "whiteAlpha.200"],
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    icon: {
      color: ["blackAlpha.700", "whiteAlpha.700"],
    },
    command: {
      opacity: 0.6,
    },
    divider: {
      my: "2",
      borderBottomWidth: "1px",
      borderColor: "inherit",
    },
    group: {},
    groupLabel: {
      py: "1.5",
      px: "3",
      fontSize: "sm",
      fontWeight: "semibold",
      color: ["blackAlpha.700", "whiteAlpha.600"],
    },
  },
}
