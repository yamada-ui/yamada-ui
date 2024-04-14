import { Container, Text } from "@yamada-ui/react"
import { memo, useState } from "react"
import { tasks, type Task } from "./data/tasks"
import { Header } from "./header"
import { Table } from "./table"

export const Tasks = memo(() => {
  const [rowSelection, setRowSelection] = useState<Record<Task["id"], boolean>>(
    Object.fromEntries(tasks.map((task) => [task.id, false])),
  )

  return (
    <Container>
      <Header />
      <Table rowSelection={rowSelection} setRowSelection={setRowSelection} />
      <Text fontSize="sm">
        {Object.values(rowSelection).filter(Boolean).length} of {tasks.length}{" "}
        row(s) selected.
      </Text>
    </Container>
  )
})

Tasks.displayName = "Tasks"
