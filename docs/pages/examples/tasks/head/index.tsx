import { Checkbox, Th, Thead, Tr } from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import type { Task } from "../data/tasks"
import { columns } from "../data/tasks"

interface HeaderProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
}

export const Header: FC<HeaderProps> = ({ rowSelection, setRowSelection }) => {
  const handleSelectAll = () => {
    const isAllSelected = Object.values(rowSelection).every(Boolean)

    setRowSelection(
      Object.fromEntries(
        Object.keys(rowSelection).map((id) => [id, !isAllSelected]),
      ),
    )
  }

  return (
    <Thead>
      <Tr>
        <Th>
          <Checkbox
            isChecked={Object.values(rowSelection).every(Boolean)}
            isIndeterminate={
              Object.values(rowSelection).some(Boolean) &&
              !Object.values(rowSelection).every(Boolean)
            }
            onChange={handleSelectAll}
          />
        </Th>
        {columns.map((column) => (
          <Th key={column.accessorKey}>{column.header}</Th>
        ))}
      </Tr>
    </Thead>
  )
}
