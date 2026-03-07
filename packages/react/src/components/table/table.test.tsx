import { a11y, render, screen } from "#test"
import { createColumnHelper, Table } from "./"

interface Data {
  email: string
  firstName: string
  id: string
  lastName: string
}

const data = [
  {
    id: "1",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: "2",
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    id: "3",
    email: "jim.beam@example.com",
    firstName: "Jim",
    lastName: "Beam",
  },
  {
    id: "4",
    email: "jill.johnson@example.com",
    firstName: "Jill",
    lastName: "Johnson",
  },
  {
    id: "5",
    email: "jack.smith@example.com",
    firstName: "Jack",
    lastName: "Smith",
  },
]

const columnHelper = createColumnHelper<Data>()

const columns = [
  columnHelper.accessor("id", {
    footer: (info) => info.column.id,
    cellProps: { numeric: true },
  }),
  columnHelper.accessor("firstName", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("lastName", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
]

describe("<Table />", () => {
  test("renders component correctly", async () => {
    await a11y(<Table columns={columns} data={data} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Table.displayName).toBe("Table")
  })

  test("sets `className` correctly", () => {
    render(
      <Table
        columns={columns}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(screen.getByTestId("table")).toHaveClass("ui-table")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Table
        columns={columns}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(screen.getByTestId("table").tagName).toBe("TABLE")
  })
})
