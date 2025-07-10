import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Table } from "./table"

export const PagingTable: ComponentMultiStyle<"PagingTable"> = mergeMultiStyle(
  Table,
  {
    baseStyle: {
      pagingControl: {
        gridTemplateColumns: "1fr 5fr 1fr",
      },
    },

    sizes: {
      sm: {
        pagingControl: {
          gap: 2,
        },
      },
      md: {
        pagingControl: {
          gap: 4,
        },
      },
      lg: {
        pagingControl: {
          gap: 6,
        },
      },
      xl: {
        pagingControl: {
          gap: 8,
        },
      },
    },
  },
)()
