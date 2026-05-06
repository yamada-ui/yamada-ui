import { page, render } from "#test/browser"
import { createColumnHelper, Table } from "./"

interface Data {
  email: string
  firstName: string
  id: string
  lastName: string
}

const data: Data[] = [
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
    cellProps: { numeric: true },
  }),
  columnHelper.accessor("firstName", {}),
  columnHelper.accessor("lastName", {}),
  columnHelper.accessor("email", {}),
]

const focusElement = (element: Element | null | undefined) => {
  if (element instanceof HTMLElement) element.focus()
}

const getTable = () => {
  const el = page.getByTestId("table").element()
  if (!(el instanceof HTMLTableElement))
    throw new Error("table is not an HTMLTableElement")
  return el
}

describe("<Table />", () => {
  test("arrow keys move browser focus across cells", async () => {
    const { user } = await render(
      <Table
        columns={columns}
        data={data}
        enableKeyboardNavigation
        enableSorting={false}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    const firstTh = getTable().querySelector(
      '[data-colindex="0"][data-rowindex="0"]',
    )

    focusElement(firstTh)
    await user.keyboard("{ArrowRight}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="1"][data-rowindex="0"]'),
    )

    await user.keyboard("{ArrowDown}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="1"][data-rowindex="1"]'),
    )

    await user.keyboard("{ArrowLeft}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="0"][data-rowindex="1"]'),
    )

    await user.keyboard("{ArrowUp}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="0"][data-rowindex="0"]'),
    )
  })

  test("End and Home keys move browser focus to row boundaries", async () => {
    const { user } = await render(
      <Table
        columns={columns}
        data={data}
        enableKeyboardNavigation
        enableSorting={false}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    const firstTh = getTable().querySelector(
      '[data-colindex="0"][data-rowindex="0"]',
    )

    focusElement(firstTh)
    await user.keyboard("{End}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="3"][data-rowindex="0"]'),
    )

    await user.keyboard("{Home}")

    expect(document.activeElement).toBe(
      getTable().querySelector('[data-colindex="0"][data-rowindex="0"]'),
    )
  })
})
