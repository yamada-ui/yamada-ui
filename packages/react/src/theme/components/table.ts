import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { NativeTable } from "./native-table"

export const Table: ComponentMultiStyle<"Table"> = mergeMultiStyle(
  NativeTable,
  {
    baseStyle: {
      sortIcon: {
        position: "absolute",
        top: "50%",
      },
      table: {
        w: "100%",
      },
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
