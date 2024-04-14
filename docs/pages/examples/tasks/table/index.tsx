import { NativeTable, TableContainer } from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import type { Task } from "../data/tasks"
import { Body } from "./body"
import { Head } from "./head"

interface TableProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
  page: number
  pageSize: 10 | 20 | 30 | 40 | 50
}

export const Table: FC<TableProps> = ({
  rowSelection,
  setRowSelection,
  page,
  pageSize,
}) => (
  <TableContainer>
    <NativeTable withBorder>
      <Head rowSelection={rowSelection} setRowSelection={setRowSelection} />
      <Body
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        page={page}
        pageSize={pageSize}
      />
    </NativeTable>
  </TableContainer>
)
