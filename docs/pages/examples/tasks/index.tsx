import { Container } from "@yamada-ui/react"
import { memo, useMemo, useState } from "react"
import { priority, status } from "./data/data"
import { tasks, type Task } from "./data/tasks"
import { Filter } from "./filter"
import { Footer } from "./footer"
import { Header } from "./header"
import { Table } from "./table"

const initialFilterStatus = Object.fromEntries(
  Object.keys(status).map((key) => [key, false]),
) as Record<keyof typeof status, boolean>

const initialFilterPriority = Object.fromEntries(
  Object.keys(priority).map((key) => [key, false]),
) as Record<keyof typeof priority, boolean>

export const Tasks = memo(() => {
  const [filterWord, setFilterWord] = useState("")
  const [filterStatus, setFilterStatus] =
    useState<Record<Task["status"], boolean>>(initialFilterStatus)
  const [filterPriority, setFilterPriority] = useState<
    Record<Task["priority"], boolean>
  >(initialFilterPriority)
  const [pageSize, setPageSize] = useState<10 | 20 | 30 | 40 | 50>(10)
  const [page, setPage] = useState(1)
  const [rowSelection, setRowSelection] = useState<Record<Task["id"], boolean>>(
    Object.fromEntries(tasks.map((task) => [task.id, false])),
  )

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        const isMatchStatus = Object.values(filterStatus).some(Boolean)
          ? filterStatus[task.status]
          : true
        const isMatchPriority = Object.values(filterPriority).some(Boolean)
          ? filterPriority[task.priority]
          : true
        const isMatchWord = filterWord
          .toLowerCase()
          .split(" ")
          .every((word) =>
            task.title.toLowerCase().includes(word.toLowerCase()),
          )
        return isMatchStatus && isMatchPriority && isMatchWord
      }),
    [filterWord, filterStatus, filterPriority],
  )

  return (
    <Container>
      <Header />
      <Filter
        filterWord={filterWord}
        setFilterWord={setFilterWord}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
      <Table
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        page={page}
        pageSize={pageSize}
        filteredTasks={filteredTasks}
      />
      <Footer
        rowSelection={rowSelection}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        filteredTasks={filteredTasks}
      />
    </Container>
  )
})

Tasks.displayName = "Tasks"
