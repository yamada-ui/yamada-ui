import type { FC } from "react"
import { a11y } from "../../../test"
import { NativeTable } from "./"

describe("<NativeTable />", () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Root {...props}>
        <NativeTable.Caption placement="top">Table Caption</NativeTable.Caption>

        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>First Name</NativeTable.Th>
            <NativeTable.Th>Last Name</NativeTable.Th>
            <NativeTable.Th numeric>Work</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>John</NativeTable.Td>
            <NativeTable.Td>Doe</NativeTable.Td>
            <NativeTable.Td>Teacher</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>First Name</NativeTable.Th>
            <NativeTable.Th>Last Name</NativeTable.Th>
            <NativeTable.Th numeric>Work</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>
    )
  }

  test("NativeTable renders correctly", async () => {
    await a11y(<Table />)
  })
})
