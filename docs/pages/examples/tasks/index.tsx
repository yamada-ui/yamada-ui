import { NativeTable, TableContainer } from "@yamada-ui/react"
import { memo } from "react"
import { Body } from "./body"
import { Header } from "./head"

export const Tasks = memo(() => {
  return (
    <TableContainer>
      <NativeTable>
        <Header />
        <Body />
      </NativeTable>
    </TableContainer>
  )
})

Tasks.displayName = "Tasks"
