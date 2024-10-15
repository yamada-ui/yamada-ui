import type { ReactNode } from "react"
import type { RowData, UseTableReturn } from "./use-table"
import { createContext, useContext } from "react"

export type TableContext<Y extends RowData = RowData> = Omit<
  UseTableReturn<Y>,
  | "getCanNextPage"
  | "getCanPreviousPage"
  | "getTableProps"
  | "nextPage"
  | "previousPage"
  | "withFooter"
>

const TableContext = createContext<TableContext>({} as TableContext)

export interface TableProviderProps<Y extends RowData> extends TableContext<Y> {
  children: ReactNode
}

export const TableProvider = <Y extends RowData>({
  children,
  ...props
}: TableProviderProps<Y>) => {
  return (
    <TableContext.Provider value={props as TableContext}>
      {children}
    </TableContext.Provider>
  )
}

export const useTableContext = <Y extends RowData>() => {
  return useContext(TableContext) as TableContext<Y>
}
