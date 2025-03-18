import type { FC } from "react"
import type { NativeTableProps } from "../src"
import { a11y, render, screen } from "@yamada-ui/test"
import {
  NativeTable,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "../src"

interface TestTableProps extends NativeTableProps {
  withCaption?: boolean
}

describe("<NativeTable />", () => {
  const Table: FC<TestTableProps> = (props) => {
    const { withCaption = false, ...rest } = props
    return (
      <TableContainer>
        <NativeTable {...rest}>
          {withCaption ? (
            <TableCaption data-testid="TableCaption" placement="top">
              Table Caption
            </TableCaption>
          ) : null}
          <Thead>
            <Tr data-testid="Tr">
              <Th data-testid="Th">First Name</Th>
              <Th>Last Name</Th>
              <Th numeric>Work</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td data-testid="Td">John</Td>
              <Td>Doe</Td>
              <Td>Teacher</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th numeric>Work</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  test("NativeTable renders correctly", async () => {
    await a11y(<Table />)
  })

  test("should render a table with provided props", () => {
    render(
      <Table
        colorScheme="gray"
        variant="striped"
        data-testid="Table"
        highlightOnHover
        withBorder
        withColumnBorders
      />,
    )
    expect(screen.getByTestId("Table")).toHaveStyle({
      "border-width": "1px",
    })
    expect(screen.getByTestId("Th")).toHaveStyle({
      "border-right-width": "1px",
    })
    expect(screen.getByTestId("Td")).toHaveStyle({
      "border-right-width": "1px",
    })
  })

  test("should render a table with caption", () => {
    render(<Table withCaption />)
    expect(screen.getByTestId("TableCaption")).toBeInTheDocument()
  })
})
