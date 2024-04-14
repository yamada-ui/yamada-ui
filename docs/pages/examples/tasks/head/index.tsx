import { Th, Thead, Tr } from "@yamada-ui/react"
import { columns } from "../data/tasks"

export const Header = () => (
  <Thead>
    <Tr>
      {columns.map((column) => (
        <Th key={column.accessorKey}>{column.header}</Th>
      ))}
    </Tr>
  </Thead>
)
