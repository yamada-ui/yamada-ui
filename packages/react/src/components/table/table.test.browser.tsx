import { useState } from "react"
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

describe("<Table />", () => {
  describe("pagination keyboard navigation", () => {
    test("changes page through PageDown / PageUp keyboard navigation", async () => {
      const PaginatedTable = () => {
        const [pagination, setPagination] = useState({
          pageIndex: 0,
          pageSize: 2,
        })

        return (
          <Table
            columns={columns}
            data={data}
            enableKeyboardNavigation
            enablePagination
            enableSorting={false}
            pagination={pagination}
            onPaginationChange={setPagination}
          />
        )
      }

      const { user } = await render(<PaginatedTable />)

      await user.tab()
      await user.keyboard("{PageDown}")

      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveTextContent("3")

      await user.keyboard("{PageUp}")

      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveTextContent("1")
    })

    test("does not paginate past last page", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 2, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
        />,
      )

      await user.tab()
      await user.keyboard("{PageDown}")

      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveTextContent("5")
    })

    test("does not paginate before first page", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
        />,
      )

      await user.tab()
      await user.keyboard("{PageUp}")

      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveTextContent("1")
    })

    test("updates `tabIndex` on the focused cell after page change", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
        />,
      )

      await user.tab()
      await user.keyboard("{PageDown}")

      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveTextContent("3")

      await expect
        .element(page.getByRole("columnheader").first())
        .toHaveAttribute("tabindex", "0")
    })
  })

  describe("keyboard navigation", () => {
    test("renders cells with `tabindex` only when `enableKeyboardNavigation` is true", async () => {
      const { rerender } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          enableSorting={false}
        />,
      )

      await expect
        .element(page.getByRole("columnheader").first())
        .not.toHaveAttribute("tabindex")

      await rerender(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
          initialFocusableCell={{ colIndex: 1, rowIndex: 1 }}
        />,
      )

      await expect
        .element(page.getByRole("gridcell").nth(1))
        .toHaveAttribute("tabindex", "0")
    })

    test("Arrow keys move across cells", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
        />,
      )

      await user.click(page.getByRole("columnheader").first())

      await user.keyboard("{ArrowRight}")
      await expect
        .element(page.getByRole("columnheader").nth(1))
        .toHaveAttribute("tabindex", "0")

      await user.keyboard("{ArrowDown}")
      await expect
        .element(page.getByRole("gridcell").nth(1))
        .toHaveAttribute("tabindex", "0")

      await user.keyboard("{ArrowLeft}")
      await expect
        .element(page.getByRole("gridcell").first())
        .toHaveAttribute("tabindex", "0")

      await user.keyboard("{ArrowUp}")
      await expect
        .element(page.getByRole("columnheader").first())
        .toHaveAttribute("tabindex", "0")
    })

    test("Home and End navigate within the row", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
        />,
      )

      await user.click(page.getByRole("columnheader").first())

      await user.keyboard("{End}")
      await expect
        .element(page.getByRole("columnheader").nth(columns.length - 1))
        .toHaveAttribute("tabindex", "0")

      await user.keyboard("{Home}")
      await expect
        .element(page.getByRole("columnheader").first())
        .toHaveAttribute("tabindex", "0")
    })
  })
})
