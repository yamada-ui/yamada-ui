import { Container } from "@yamada-ui/react"
import { memo, useState } from "react"
import { tasks, type Task } from "./data/tasks"
import { Footer } from "./footer"
import { Header } from "./header"
import { Table } from "./table"

export const Tasks = memo(() => {
  const [pageSize, setPageSize] = useState<10 | 20 | 30 | 40 | 50>(10)
  const [rowSelection, setRowSelection] = useState<Record<Task["id"], boolean>>(
    Object.fromEntries(tasks.map((task) => [task.id, false])),
  )

  return (
    <Container>
      <Header />
      <Table
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        pageSize={pageSize}
      />
      <Footer
        dataCount={tasks.length}
        selectedDataCount={Object.values(rowSelection).filter(Boolean).length}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </Container>
  )
})

Tasks.displayName = "Tasks"
