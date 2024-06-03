import type { NativeTableProps } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import type { FC } from "react"
import {
  NativeTable,
  TableContainer,
  TableCaption,
  Thead,
  Tfoot,
  Th,
  Tbody,
  Td,
  Tr,
} from "../src"

type TestTableProps = {
  withCaption?: boolean
} & NativeTableProps

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
              <Th isNumeric>Work</Th>
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
              <Th isNumeric>Work</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  test("NativeTable renders correctly", async () => {
    await a11y(<Table />)
  })

  test("should render a table with provided props", async () => {
    render(
      <Table
        variant="striped"
        colorScheme="gray"
        data-testid="Table"
        withColumnBorders
        withBorder
        highlightOnHover
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
