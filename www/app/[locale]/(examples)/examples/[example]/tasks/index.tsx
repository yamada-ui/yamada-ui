"use client"

import type { Priority, Status, View } from "./data"
import { Card, noop, VStack } from "@yamada-ui/react"
import { memo, useRef } from "react"
import { DataTable } from "./data-table"
import { Filter } from "./filter"
import { Header } from "./header"

export const Tasks = memo(() => {
  const titleRef = useRef<(value: string) => void>(noop)
  const statusRef = useRef<(value: Status[]) => void>(noop)
  const priorityRef = useRef<(value: Priority[]) => void>(noop)
  const viewRef = useRef<(value: View[]) => void>(noop)

  return (
    <Card.Root bg="bg.float">
      <VStack as="section" gap="md" p={{ base: "lg", sm: "md" }}>
        <Header />
        <Filter
          priorityRef={priorityRef}
          statusRef={statusRef}
          titleRef={titleRef}
          viewRef={viewRef}
        />
        <DataTable
          priorityRef={priorityRef}
          statusRef={statusRef}
          titleRef={titleRef}
          viewRef={viewRef}
        />
      </VStack>
    </Card.Root>
  )
})

Tasks.displayName = "Tasks"
