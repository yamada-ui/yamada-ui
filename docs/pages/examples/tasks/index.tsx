import { Container, noop } from "@yamada-ui/react"
import { memo, useRef } from "react"
import type { Priority, Status, View } from "./data"
import { DataTable } from "./data-table"
import { Filter } from "./filter"
import { Header } from "./header"

export const Tasks = memo(() => {
  const titleRef = useRef<(value: string) => void>(noop)
  const statusRef = useRef<(value: Status[]) => void>(noop)
  const priorityRef = useRef<(value: Priority[]) => void>(noop)
  const viewRef = useRef<(value: View[]) => void>(noop)

  return (
    <Container>
      <Header />
      <Filter
        titleRef={titleRef}
        statusRef={statusRef}
        priorityRef={priorityRef}
        viewRef={viewRef}
      />
      <DataTable
        titleRef={titleRef}
        statusRef={statusRef}
        priorityRef={priorityRef}
        viewRef={viewRef}
      />
    </Container>
  )
})

Tasks.displayName = "Tasks"
