import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { NativeTable } from "./native-table"

export const Table: ComponentMultiStyle<"Table"> = mergeMultiStyle(
  NativeTable,
  {
    baseStyle: {
      sortIcon: {},
      td: {
        outline: "none",
        transitionDuration: "normal",
        transitionProperty: "common",
        _focusVisible: {
          boxShadow: "inline",
        },
      },
      th: {
        outline: "none",
        transitionDuration: "normal",
        transitionProperty: "common",
        _focusVisible: {
          boxShadow: "inline",
        },
      },
    },

    sizes: {
      sm: {
        sortIcon: {
          right: 2,
        },
      },
      md: {
        sortIcon: {
          right: 3,
        },
      },
      lg: {
        sortIcon: {
          right: 4,
        },
      },
      xl: {
        sortIcon: {
          right: 6,
        },
      },
    },
  },
)()
