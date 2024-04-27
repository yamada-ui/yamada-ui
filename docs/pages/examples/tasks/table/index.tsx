import { NativeTable, TableContainer } from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import type { SortOption } from "../data/data"
import type { Task } from "../data/tasks"
import { Body } from "./body"
import { Head } from "./head"

interface TableProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
  page: number
  pageSize: 10 | 20 | 30 | 40 | 50
  filteredTasks: Task[]
  displayColumns: Record<"title" | "status" | "priority", boolean>
  setDisplayColumns: Dispatch<
    SetStateAction<Record<"title" | "status" | "priority", boolean>>
  >
  sortOption: SortOption | null
  setSortOption: Dispatch<SetStateAction<SortOption | null>>
}

export const Table: FC<TableProps> = ({
  rowSelection,
  setRowSelection,
  page,
  pageSize,
  filteredTasks,
  displayColumns,
  setDisplayColumns,
  sortOption,
  setSortOption,
}) => (
  <TableContainer>
    <NativeTable withBorder highlightOnHover>
      <Head
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        displayColumns={displayColumns}
        setDisplayColumns={setDisplayColumns}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <Body
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        page={page}
        pageSize={pageSize}
        filteredTasks={filteredTasks}
        displayColumns={displayColumns}
      />
    </NativeTable>
  </TableContainer>
)
