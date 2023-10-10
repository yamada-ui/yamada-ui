import { ComponentMultiStyle, mergeStyle } from '@yamada-ui/core'
import { NativeTable } from './native-table'

export const Table: ComponentMultiStyle = mergeStyle(NativeTable, {
  baseStyle: {
    sortIcon: {},
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
})
