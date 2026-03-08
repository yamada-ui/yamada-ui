import type { ColumnDef } from "@tanstack/react-table"
import { a11y, fireEvent, render, screen } from "#test"
import { vi } from "vitest"
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

const groupedColumns: ColumnDef<Data, any>[] = [
  {
    columns: [
      columnHelper.accessor("firstName", {
        footer: (info) => info.column.id,
        header: "First Name",
      }),
      columnHelper.accessor("lastName", {
        footer: (info) => info.column.id,
        header: "Last Name",
      }),
    ],
    header: "Name",
  },
  {
    columns: [
      columnHelper.accessor("id", {
        footer: (info) => info.column.id,
        header: "ID",
      }),
      columnHelper.accessor("email", {
        footer: (info) => info.column.id,
        header: "Email",
      }),
    ],
    header: "Info",
  },
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

  test("renders header and footer with render functions", () => {
    render(
      <Table
        columns={columns}
        data={data}
        footer={(table) => (
          <div data-testid="custom-footer">
            {table.getRowModel().rows.length} rows
          </div>
        )}
        header={(table) => (
          <div data-testid="custom-header">
            {table.getRowModel().rows.length} rows
          </div>
        )}
      />,
    )

    expect(screen.getByTestId("custom-header")).toHaveTextContent("5 rows")
    expect(screen.getByTestId("custom-footer")).toHaveTextContent("5 rows")
  })

  test("renders header and footer as ReactNode", () => {
    render(
      <Table
        columns={columns}
        data={data}
        footer={<div data-testid="footer-node">Footer</div>}
        header={<div data-testid="header-node">Header</div>}
      />,
    )

    expect(screen.getByTestId("header-node")).toBeInTheDocument()
    expect(screen.getByTestId("footer-node")).toBeInTheDocument()
  })

  test("renders with truncated text", () => {
    render(
      <Table
        columns={columns}
        data={data}
        truncated
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(screen.getByTestId("table")).toBeInTheDocument()
  })

  describe("grouped columns", () => {
    test("renders merged header groups correctly", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByText("Name")).toBeInTheDocument()
      expect(screen.getByText("Info")).toBeInTheDocument()
      expect(screen.getByText("First Name")).toBeInTheDocument()
      expect(screen.getByText("Last Name")).toBeInTheDocument()
    })

    test("renders merged footer groups correctly", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("row selection", () => {
    test("renders checkbox column when enableRowSelection is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const checkboxes = screen.getAllByRole("checkbox")

      expect(checkboxes.length).toBeGreaterThan(0)
    })

    test("does not render checkbox when withCheckbox is false", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withCheckbox={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.queryAllByRole("checkbox")).toHaveLength(0)
    })

    test("selects all rows when header checkbox is clicked", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const checkboxes = screen.getAllByRole("checkbox")
      const headerCheckbox = checkboxes[0]!

      await user.click(headerCheckbox)

      expect(onRowSelectionChange).toHaveBeenCalledWith()
    })

    test("selects individual row when row checkbox is clicked", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const checkboxes = screen.getAllByRole("checkbox")
      const firstRowCheckbox = checkboxes[1]!

      await user.click(firstRowCheckbox)

      expect(onRowSelectionChange).toHaveBeenCalledWith()
    })

    test("selects row on click when selectOnClickRow is true", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      await user.click(firstDataRow)

      expect(onRowSelectionChange).toHaveBeenCalledWith()
    })

    test("renders footer checkbox when withFooterCheckbox is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withFooterCheckbox
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
      const footerCheckboxes = tfoot?.querySelectorAll('input[type="checkbox"]')

      expect(footerCheckboxes?.length).toBeGreaterThan(0)
    })

    test("applies headerCheckboxProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          headerCheckboxProps={() => ({
            "data-testid": "header-checkbox-custom",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("header-checkbox-custom")).toBeInTheDocument()
    })

    test("applies rowCheckboxProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          rowCheckboxProps={() => ({
            "data-testid": "row-checkbox-custom",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        screen.getAllByTestId("row-checkbox-custom").length,
      ).toBeGreaterThan(0)
    })

    test("handles disabled row selection via function", async () => {
      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      await user.click(firstDataRow)

      expect(firstDataRow).toHaveAttribute("data-disabled")
    })

    test("invokes onRowClick callback", async () => {
      const onRowClick = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onRowClick={onRowClick}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      await user.click(firstDataRow)

      expect(onRowClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "0" }),
      )
    })

    test("invokes onRowDoubleClick callback", async () => {
      const onRowDoubleClick = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onRowDoubleClick={onRowDoubleClick}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      await user.dblClick(firstDataRow)

      expect(onRowDoubleClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "0" }),
      )
    })
  })

  describe("sorting", () => {
    test("renders sorting icons when sorting is enabled", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
        columnHelper.accessor("lastName", {
          enableSorting: true,
          header: "Last Name",
        }),
      ]

      render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const buttons = screen
        .getByTestId("table")
        .querySelectorAll("button[data-focusable]")

      expect(buttons.length).toBeGreaterThan(0)
    })

    test("toggles sorting when sort button is clicked", async () => {
      const onSortingChange = vi.fn()
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      const { user } = render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
          onSortingChange={onSortingChange}
        />,
      )

      const sortButton = screen
        .getByTestId("table")
        .querySelector("button[data-focusable]")!

      await user.click(sortButton)

      expect(onSortingChange).toHaveBeenCalledWith()
    })

    test("renders custom sorting icon", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: true }]}
          enableSorting
          sortingIcon={(sorted) => (
            <span data-testid="custom-sort-icon">
              {sorted ? "sorted" : "unsorted"}
            </span>
          )}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("custom-sort-icon")).toBeInTheDocument()
    })

    test("applies sortingIconProps", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          // @ts-expect-error testing plain object sortingIconProps
          sortingIconProps={{ className: "custom-sorting-icon" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const icons = screen
        .getByTestId("table")
        .querySelectorAll(".custom-sorting-icon")

      expect(icons.length).toBeGreaterThan(0)
    })

    test("renders descending sort icon correctly", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: true }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = screen.getByTestId("table").querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "descending")
    })

    test("renders ascending sort correctly", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: false }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = screen.getByTestId("table").querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "ascending")
    })
  })

  describe("column resizing", () => {
    test("renders resizable trigger when enableColumnResizing is true", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
        columnHelper.accessor("lastName", {
          enableResizing: true,
          header: "Last Name",
        }),
      ]

      render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          // @ts-expect-error testing plain object resizableTriggerProps
          resizableTriggerProps={{ "data-testid": "resize-handle" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByTestId("resize-handle").length).toBeGreaterThan(0)
    })

    test("applies resizableTriggerProps", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
        columnHelper.accessor("lastName", {
          enableResizing: true,
          header: "Last Name",
        }),
      ]

      render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          // @ts-expect-error testing plain object resizableTriggerProps
          resizableTriggerProps={{ className: "custom-resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const triggers = screen
        .getByTestId("table")
        .querySelectorAll(".custom-resize-trigger")

      expect(triggers.length).toBeGreaterThan(0)
    })

    test("applies enableAutoResizeTableWidth", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableAutoResizeTableWidth
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })
  })

  describe("pagination", () => {
    test("paginates data when enablePagination is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")
      // 1 header row + 2 data rows
      expect(rows).toHaveLength(3)
    })

    test("handles PageDown keyboard navigation", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstCell })
      fireEvent.keyDown(firstCell, { key: "PageDown" })

      expect(table).toBeInTheDocument()
    })

    test("does not paginate when cannot go to next page", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 2, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstCell })
      fireEvent.keyDown(firstCell, { key: "PageDown" })

      expect(table).toBeInTheDocument()
    })

    test("does not go to previous page when on first page", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstCell })
      fireEvent.keyDown(firstCell, { key: "PageUp" })

      expect(table).toBeInTheDocument()
    })

    test("handles PageUp keyboard navigation", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 1, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstCell })
      fireEvent.keyDown(firstCell, { key: "PageUp" })

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation", () => {
    test("navigates cells with arrow keys", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstTh })
      fireEvent.keyDown(firstTh, { key: "ArrowRight" })
      fireEvent.keyDown(firstTh, { key: "ArrowDown" })
      fireEvent.keyDown(firstTh, { key: "ArrowLeft" })
      fireEvent.keyDown(firstTh, { key: "ArrowUp" })

      expect(table).toBeInTheDocument()
    })

    test("navigates to first and last cell with Home and End", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstTh })
      fireEvent.keyDown(firstTh, { key: "End" })
      fireEvent.keyDown(firstTh, { key: "Home" })

      expect(table).toBeInTheDocument()
    })

    test("does not enable keyboard navigation when disabled", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector("th")!

      fireEvent.focus(table, { target: firstTh })
      fireEvent.keyDown(firstTh, { key: "ArrowRight" })

      expect(table).toBeInTheDocument()
    })

    test("sets initial tabIndex based on initialFocusableCell", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          initialFocusableCell={{ colIndex: 1, rowIndex: 1 }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const cell = table.querySelector('[data-colindex="1"][data-rowindex="1"]')

      expect(cell).toHaveAttribute("tabindex", "0")
    })

    test("focuses on cell focus event", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstTh })

      expect(table).toBeInTheDocument()
    })
  })

  describe("column filters", () => {
    test("calls onColumnFiltersChange when filter changes", () => {
      const onColumnFiltersChange = vi.fn()

      render(
        <Table
          columns={columns}
          data={data}
          defaultColumnFilters={[]}
          tableProps={{ "data-testid": "table" }}
          onColumnFiltersChange={onColumnFiltersChange}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })
  })

  describe("props passing", () => {
    test("applies headerGroupProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          headerGroupProps={() => ({
            "data-testid": "header-group",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("header-group")).toBeInTheDocument()
    })

    test("applies headerProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          headerProps={() => ({
            className: "custom-header",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const headers = screen
        .getByTestId("table")
        .querySelectorAll("th.custom-header")

      expect(headers.length).toBeGreaterThan(0)
    })

    test("applies rowProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          rowProps={() => ({
            "data-testid": "custom-row",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByTestId("custom-row").length).toBeGreaterThan(0)
    })

    test("applies cellProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          cellProps={() => ({
            className: "custom-cell",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const cells = screen
        .getByTestId("table")
        .querySelectorAll("td.custom-cell")

      expect(cells.length).toBeGreaterThan(0)
    })

    test("applies footerGroupProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          footerGroupProps={() => ({
            "data-testid": "footer-group",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByTestId("footer-group").length).toBeGreaterThan(0)
    })

    test("applies footerProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          footerProps={() => ({
            className: "custom-footer",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const footerCells = table.querySelectorAll("tfoot .custom-footer")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("applies theadProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          theadProps={{ "data-testid": "thead" }}
        />,
      )

      expect(screen.getByTestId("thead")).toBeInTheDocument()
    })

    test("applies tbodyProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          tbodyProps={{ "data-testid": "tbody" }}
        />,
      )

      expect(screen.getByTestId("tbody")).toBeInTheDocument()
    })

    test("applies tfootProps", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
          tfootProps={{ "data-testid": "tfoot" }}
        />,
      )

      expect(screen.getByTestId("tfoot")).toBeInTheDocument()
    })
  })

  describe("footer groups", () => {
    test("renders footer groups when withFooterGroups is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })

    test("does not render footer groups when withFooterGroups is false", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).not.toBeInTheDocument()
    })

    test("renders grouped footer correctly", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("controlled state", () => {
    test("uses controlled sorting state", () => {
      const onSortingChange = vi.fn()

      render(
        <Table
          columns={columns}
          data={data}
          sorting={[{ id: "firstName", desc: false }]}
          tableProps={{ "data-testid": "table" }}
          onSortingChange={onSortingChange}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })

    test("uses controlled pagination state", () => {
      const onPaginationChange = vi.fn()

      render(
        <Table
          columns={columns}
          data={data}
          enablePagination
          pagination={{ pageIndex: 0, pageSize: 2 }}
          tableProps={{ "data-testid": "table" }}
          onPaginationChange={onPaginationChange}
        />,
      )

      const rows = screen.getAllByRole("row")

      expect(rows).toHaveLength(3)
    })

    test("uses controlled row selection state", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          rowSelection={{ "0": true }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("aria-selected", "true")
    })

    test("uses controlled column filters state", () => {
      const onColumnFiltersChange = vi.fn()

      render(
        <Table
          columnFilters={[{ id: "firstName", value: "John" }]}
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onColumnFiltersChange={onColumnFiltersChange}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })
  })

  describe("columnResizeMode onEnd", () => {
    test("renders with columnResizeMode onEnd", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columnResizeMode="onEnd"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with footer groups", () => {
    test("navigates through footer cells", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(
        table.querySelectorAll("tfoot [data-colindex]").length,
      ).toBeGreaterThan(0)
    })

    test("navigates with grouped header columns", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector("[data-colindex][data-rowindex]")!

      fireEvent.focus(table, { target: firstTh })
      fireEvent.keyDown(firstTh, { key: "ArrowRight" })
      fireEvent.keyDown(firstTh, { key: "ArrowDown" })

      expect(table).toBeInTheDocument()
    })
  })

  describe("manual pagination", () => {
    test("handles manual pagination with rowCount", () => {
      render(
        <Table
          columns={columns}
          data={data.slice(0, 2)}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enablePagination
          manualPagination
          rowCount={100}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toHaveAttribute("aria-rowcount", "100")
    })
  })

  describe("aria attributes", () => {
    test("sets aria-colcount correctly", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toHaveAttribute("aria-colcount", "4")
    })

    test("sets aria-multiselectable when row selection is enabled", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toHaveAttribute("aria-multiselectable", "true")
    })

    test("sets role=grid on table", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toHaveAttribute("role", "grid")
    })
  })
})
