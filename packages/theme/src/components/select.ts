import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeStyle } from "@yamada-ui/core"
import { transparentizeColor } from "@yamada-ui/utils"
import { NativeSelect } from "./native-select"

export const Select: ComponentMultiStyle = mergeStyle(NativeSelect, {
  baseStyle: ({ theme: t, colorMode: m }) => ({
    inner: {},
    list: {
      rounded: "md",
      w: "100%",
      minW: "xs",
      maxH: "xs",
      overflowY: "auto",
      py: "2",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: "inherit",
      color: "inherit",
      boxShadow: ["sm", "dark-lg"],
      zIndex: "yamcha",
    },
    group: {},
    groupLabel: {
      py: "1.5",
      px: "3",
      fontSize: "sm",
      fontWeight: "semibold",
      color: ["blackAlpha.600", "whiteAlpha.600"],
    },
    item: {
      cursor: "pointer",
      py: "1.5",
      px: "3",
      transitionProperty: "background",
      transitionDuration: "ultra-fast",
      transitionTimingFunction: "ease-in",
      _focus: {
        bg: [transparentizeColor(`gray.200`, 0.56)(t, m), "whiteAlpha.100"],
      },
      _hover: {
        bg: ["gray.200", "whiteAlpha.50"],
      },
      _active: {
        bg: [transparentizeColor(`gray.300`, 0.64)(t, m), "whiteAlpha.200"],
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    itemIcon: {},
  }),
})
