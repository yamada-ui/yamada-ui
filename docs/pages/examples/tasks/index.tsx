import { Container, NativeTable, TableContainer, Text } from "@yamada-ui/react"
import { memo, useState } from "react"
import { Body } from "./body"
import { tasks, type Task } from "./data/tasks"
import { Header } from "./head"

export const Tasks = memo(() => {
  const [rowSelection, setRowSelection] = useState<Record<Task["id"], boolean>>(
    Object.fromEntries(tasks.map((task) => [task.id, false])),
  )

  return (
    <Container>
      <TableContainer>
        <NativeTable withBorder>
          <Header
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
          />
          <Body rowSelection={rowSelection} setRowSelection={setRowSelection} />
        </NativeTable>
      </TableContainer>
      <Text fontSize="sm">
        {Object.values(rowSelection).filter(Boolean).length} of {tasks.length}{" "}
        row(s) selected.
      </Text>
    </Container>
  )
})

Tasks.displayName = "Tasks"
