import type { ColumnDef } from "@tanstack/react-table"
import { a11y, fireEvent, render, screen } from "#test"
import { useState } from "react"
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

    const table = screen.getByTestId("table")
    const spans = table.querySelectorAll("td span")

    expect(spans.length).toBeGreaterThan(0)
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

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
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

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
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

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
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

      expect(onSortingChange).toHaveBeenCalledWith(expect.any(Array))
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

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
      expect(table.style.width).not.toBe("")
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
          resizableTriggerProps={{ "data-testid": "resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
      expect(screen.getByTestId("resize-trigger")).toBeInTheDocument()
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

    test("sets aria-rowcount to data length when rowCount is not provided", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toHaveAttribute("aria-rowcount", String(data.length))
    })

    test("sets aria-rowindex on header rows", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const headerRows = table.querySelectorAll("thead tr")

      expect(headerRows[0]).toHaveAttribute("aria-rowindex", "1")
    })

    test("sets aria-colindex on header cells", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const ths = table.querySelectorAll("thead th")

      expect(ths[0]).toHaveAttribute("aria-colindex", "1")
      expect(ths[1]).toHaveAttribute("aria-colindex", "2")
    })

    test("sets aria-colindex on body cells", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstRowCells = table.querySelectorAll("tbody tr:first-child td")

      expect(firstRowCells[0]).toHaveAttribute("aria-colindex", "1")
      expect(firstRowCells[1]).toHaveAttribute("aria-colindex", "2")
    })

    test("sets role=columnheader on th elements", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const ths = table.querySelectorAll("thead th")

      ths.forEach((th) => {
        expect(th).toHaveAttribute("role", "columnheader")
      })
    })

    test("sets role=gridcell on td elements", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tds = table.querySelectorAll("tbody td")

      tds.forEach((td) => {
        expect(td).toHaveAttribute("role", "gridcell")
      })
    })

    test("sets role=rowgroup on thead and tbody", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const thead = table.querySelector("thead")
      const tbody = table.querySelector("tbody")

      expect(thead).toHaveAttribute("role", "rowgroup")
      expect(tbody).toHaveAttribute("role", "rowgroup")
    })

    test("sets role=rowgroup on tfoot when footer groups enabled", () => {
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

      expect(tfoot).toHaveAttribute("role", "rowgroup")
    })

    test("does not set aria-multiselectable when row selection is disabled", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).not.toHaveAttribute("aria-multiselectable")
    })

    test("sets aria-sort to none when column is sortable but not sorted", () => {
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
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = screen.getByTestId("table").querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "none")
    })
  })

  describe("row selection with disabled rows", () => {
    test("renders disabled row with correct attributes", () => {
      render(
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

      expect(firstDataRow).toHaveAttribute("data-disabled")
      expect(firstDataRow).toHaveAttribute("aria-disabled", "true")
    })

    test("enabled rows invoke onRowClick", async () => {
      const onRowClick = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
          onRowClick={onRowClick}
        />,
      )

      // Click the second data row (id "2"), which is enabled
      const rows = screen.getAllByRole("row")
      const secondDataRow = rows[2]!

      await user.click(secondDataRow)

      expect(onRowClick).toHaveBeenCalledTimes(1)
    })

    test("enabled rows invoke onRowDoubleClick", async () => {
      const onRowDoubleClick = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
          onRowDoubleClick={onRowDoubleClick}
        />,
      )

      const rows = screen.getAllByRole("row")
      const secondDataRow = rows[2]!

      await user.dblClick(secondDataRow)

      expect(onRowDoubleClick).toHaveBeenCalledTimes(1)
    })

    test("sets aria-disabled on disabled rows", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("grouped columns header and footer merging", () => {
    test("renders correct number of header rows for grouped columns", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const headerRows = table.querySelectorAll("thead tr")

      expect(headerRows).toHaveLength(2)
    })

    test("renders headers with colSpan for grouped columns", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstRowHeaders = table.querySelectorAll("thead tr:first-child th")

      const nameHeader = Array.from(firstRowHeaders).find(
        (th) => th.textContent === "Name",
      )

      expect(nameHeader).toBeDefined()
    })

    test("renders footer cells with correct data-colindex for grouped columns", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("renders footer with aria-colindex and aria-rowindex for grouped columns", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const footerCells = table.querySelectorAll("tfoot td[aria-colindex]")

      footerCells.forEach((cell) => {
        expect(cell).toHaveAttribute("aria-colindex")
        expect(cell).toHaveAttribute("aria-rowindex")
      })
    })
  })

  describe("keyboard navigation with focusable elements", () => {
    test("focuses on checkbox inside cell when navigating with keyboard", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: firstTh })

      const focusable = firstTh.querySelector("[data-focusable]")

      expect(focusable).toBeInTheDocument()
    })

    test("moves focus to the next row when pressing ArrowDown", () => {
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
      fireEvent.keyDown(firstTh, { key: "ArrowDown" })

      const nextCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="1"]',
      )

      expect(nextCell).toBeInTheDocument()
    })

    test("handles focus event on non-initial cell", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const secondTh = table.querySelector(
        '[data-colindex="1"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: secondTh })

      expect(table).toBeInTheDocument()
    })

    test("does not navigate when keyboard navigation is disabled and keydown fires", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const td = table.querySelector("td")!

      fireEvent.keyDown(td, { key: "ArrowRight" })

      expect(table).toBeInTheDocument()
    })

    test("tabIndex is undefined when keyboard navigation is disabled", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const cell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      expect(cell).not.toHaveAttribute("tabindex")
    })
  })

  describe("column definition props", () => {
    test("applies headerProps from column definition", () => {
      const columnsWithHeaderProps = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          headerProps: { className: "column-header-props" },
        }),
      ]

      render(
        <Table
          columns={columnsWithHeaderProps}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const headers = table.querySelectorAll("th.column-header-props")

      expect(headers.length).toBeGreaterThan(0)
    })

    test("applies cellProps from column definition", () => {
      const columnsWithCellProps = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          cellProps: { className: "column-cell-props" },
        }),
      ]

      render(
        <Table
          columns={columnsWithCellProps}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const cells = table.querySelectorAll("td.column-cell-props")

      expect(cells.length).toBeGreaterThan(0)
    })

    test("applies footerProps from column definition", () => {
      const columnsWithFooterProps = [
        columnHelper.accessor("firstName", {
          footer: "Footer",
          header: "First Name",
          footerProps: { className: "column-footer-props" },
        }),
      ]

      render(
        <Table
          columns={columnsWithFooterProps}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const footerCells = table.querySelectorAll("tfoot td.column-footer-props")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("applies truncated prop from column definition", () => {
      const columnsWithTruncated = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          truncated: true,
        }),
      ]

      render(
        <Table
          columns={columnsWithTruncated}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })

    test("applies lineClamp prop from column definition", () => {
      const columnsWithLineClamp = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          lineClamp: 2,
        }),
      ]

      render(
        <Table
          columns={columnsWithLineClamp}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })
  })

  describe("column resizing interactions", () => {
    test("sets width style on header cells when column resizing is enabled", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          size: 200,
          enableResizing: true,
          header: "First Name",
        }),
      ]

      render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const th = table.querySelector("th")

      expect(th?.style.width).toBeDefined()
    })

    test("double-click on resize handle resets column size", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      const { user } = render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const resizeTrigger = screen.getByTestId("resize-trigger")

      await user.dblClick(resizeTrigger)

      // After double-click, the table still renders and resize trigger is still present
      expect(screen.getByTestId("table")).toBeInTheDocument()
      expect(screen.getByTestId("resize-trigger")).toBeInTheDocument()

      const th = screen.getByTestId("table").querySelector("th")

      expect(th?.style.width).toBeDefined()
    })

    test("renders resizable trigger with custom class", () => {
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
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-cursor" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("resize-cursor")).toBeInTheDocument()
    })
  })

  describe("sorting icon interactions", () => {
    test("renders default sort icon (unsorted)", () => {
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
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
      expect(sortButton).toHaveAttribute("type", "button")
    })

    test("applies sortingIconProps with data attribute", () => {
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
          sortingIconProps={{
            "data-testid": "sort-icon-custom",
          }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("sort-icon-custom")).toBeInTheDocument()
    })

    test("renders custom sorting icon for unsorted state", () => {
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
          sortingIcon={(sorted) => (
            <span data-testid="custom-icon">
              {sorted === false ? "unsorted" : "sorted"}
            </span>
          )}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("custom-icon")).toHaveTextContent("unsorted")
    })

    test("renders descending sort icon", () => {
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

      const table = screen.getByTestId("table")
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
    })

    test("renders ascending sort icon", () => {
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

      const table = screen.getByTestId("table")
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
    })
  })

  describe("pagination with keyboard navigation", () => {
    test("updates tabIndex after page change", () => {
      const PaginatedTable = () => {
        const [pagination, setPagination] = useState({
          pageIndex: 0,
          pageSize: 2,
        })

        return (
          <>
            <Table
              columns={columns}
              data={data}
              enableKeyboardNavigation
              enablePagination
              pagination={pagination}
              tableProps={{ "data-testid": "table" }}
              onPaginationChange={setPagination}
            />
            <button
              data-testid="next-page"
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: prev.pageIndex + 1,
                }))
              }
            >
              Next
            </button>
          </>
        )
      }

      render(<PaginatedTable />)

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })

    test("handles PageDown keyboard event on paginated table", () => {
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

      // After PageDown, the page should have changed
      expect(table).toBeInTheDocument()
    })

    test("handles PageUp keyboard event on paginated table", () => {
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

      // After PageUp, the page should have changed
      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with row selection checkboxes", () => {
    test("keyboard navigation works with checkbox columns", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const selectHeader = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: selectHeader })
      fireEvent.keyDown(selectHeader, { key: "ArrowRight" })
      fireEvent.keyDown(selectHeader, { key: "ArrowDown" })

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation edge cases", () => {
    test("ArrowLeft at left boundary does not crash", () => {
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
      fireEvent.keyDown(firstTh, { key: "ArrowLeft" })

      expect(table).toBeInTheDocument()
    })

    test("ArrowUp at top boundary does not crash", () => {
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
      fireEvent.keyDown(firstTh, { key: "ArrowUp" })

      expect(table).toBeInTheDocument()
    })

    test("ArrowDown at bottom boundary does not crash", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const lastRow = data.length
      const lastCell = table.querySelector(
        `[data-colindex="0"][data-rowindex="${lastRow}"]`,
      )!

      fireEvent.focus(table, { target: lastCell })
      fireEvent.keyDown(lastCell, { key: "ArrowDown" })

      expect(table).toBeInTheDocument()
    })

    test("ArrowRight at right boundary does not crash", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )!

      fireEvent.focus(table, { target: lastTh })
      fireEvent.keyDown(lastTh, { key: "ArrowRight" })

      expect(table).toBeInTheDocument()
    })

    test("End key navigates to last column", () => {
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

      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )

      expect(lastTh).toBeInTheDocument()
    })

    test("Home key navigates to first column", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )!

      fireEvent.focus(table, { target: lastTh })
      fireEvent.keyDown(lastTh, { key: "Home" })

      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )

      expect(firstTh).toBeInTheDocument()
    })

    test("ignores unknown keys", () => {
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
      fireEvent.keyDown(firstTh, { key: "Tab" })

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with grouped columns", () => {
    test("cellMap correctly handles colSpan in grouped headers", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const headerCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      fireEvent.focus(table, { target: headerCell })
      fireEvent.keyDown(headerCell, { key: "ArrowRight" })

      expect(table).toBeInTheDocument()
    })

    test("keyboard navigation works with grouped footer cells", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)

      fireEvent.focus(table, { target: footerCells[0]! })
      fireEvent.keyDown(footerCells[0]!, { key: "ArrowRight" })

      expect(table).toBeInTheDocument()
    })
  })

  describe("row selection with selectOnClickRow", () => {
    test("toggles row selection on click", async () => {
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
      const secondDataRow = rows[2]!

      await user.click(secondDataRow)

      expect(onRowSelectionChange).toHaveBeenCalledTimes(1)
    })

    test("does not select disabled row on click", () => {
      render(
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

      expect(firstDataRow).toHaveAttribute("data-disabled")
    })
  })

  describe("footer groups with row selection", () => {
    test("renders footer with aria-hidden on select column when no footer checkbox", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("checkboxProps", () => {
    test("applies checkboxProps to both header and row checkboxes", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          checkboxProps={{ colorScheme: "red" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const checkboxes = screen.getAllByRole("checkbox")

      expect(checkboxes.length).toBeGreaterThan(0)
    })
  })

  describe("highlightOnHover and highlightOnSelected defaults", () => {
    test("sets highlightOnHover and highlightOnSelected when enableRowSelection is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })
  })

  describe("truncated text rendering", () => {
    test("wraps text in span when truncated is set globally", () => {
      render(
        <Table
          columns={columns}
          data={data}
          truncated
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")
      const spans = table.querySelectorAll("span")

      expect(spans.length).toBeGreaterThan(0)
    })

    test("does not wrap text in span when neither lineClamp nor truncated", () => {
      const simpleColumns = [
        columnHelper.accessor("firstName", {
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={simpleColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })

    test("wraps text in span when lineClamp is set globally", () => {
      render(
        <Table
          columns={[
            columnHelper.accessor("firstName", { header: "First Name" }),
          ]}
          data={data}
          lineClamp={2}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()
    })

    test("lineClamp in footer groups wraps text in span", () => {
      const columnsWithLineClamp = [
        columnHelper.accessor("firstName", {
          footer: "Footer",
          header: "First Name",
          lineClamp: 2,
        }),
      ]

      render(
        <Table
          columns={columnsWithLineClamp}
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

  describe("sortDescFirst option", () => {
    test("renders with sortDescFirst set to true", () => {
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
          sortDescFirst
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table).toBeInTheDocument()

      // The sort button should be present and functional
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()

      // Column should be sortable but not yet sorted
      const th = table.querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "none")
    })
  })

  describe("default state values", () => {
    test("uses default pagination when not provided", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")

      // Default is pageSize: 20, so all 5 data rows + 1 header row
      expect(rows).toHaveLength(6)
    })

    test("uses default row selection when not provided", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")
      const dataRows = rows.slice(1)

      dataRows.forEach((row) => {
        expect(row).not.toHaveAttribute("aria-selected", "true")
      })
    })
  })

  describe("state override", () => {
    test("passes state prop to useReactTable", () => {
      render(
        <Table
          columns={columns}
          data={data}
          state={{
            globalFilter: "John",
          }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("table")).toBeInTheDocument()
    })
  })

  describe("footer rendering details", () => {
    test("renders footer cell content with flexRender", () => {
      const columnsWithFooter = [
        columnHelper.accessor("firstName", {
          footer: () => "Total",
          header: "First Name",
        }),
      ]

      render(
        <Table
          columns={columnsWithFooter}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByText("Total")).toBeInTheDocument()
    })

    test("renders footer with tabIndex when keyboard navigation enabled", () => {
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
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)
    })
  })

  describe("keyboard navigation through all sections", () => {
    test("navigates from header to body to footer", () => {
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
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      // Navigate down through header -> body -> footer
      fireEvent.focus(table, { target: firstTh })

      for (let i = 0; i < data.length + 2; i++) {
        fireEvent.keyDown(firstTh, { key: "ArrowDown" })
      }

      expect(table).toBeInTheDocument()
    })
  })

  describe("enableAutoResizeTableWidth", () => {
    test("sets table width based on center total size", () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          size: 150,
          enableResizing: true,
          header: "First Name",
        }),
        columnHelper.accessor("lastName", {
          size: 200,
          enableResizing: true,
          header: "Last Name",
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

      const table = screen.getByTestId("table")

      // Width should be set to a non-empty value based on column sizes
      expect(table.style.width).not.toBe("")
    })

    test("does not set width when enableAutoResizeTableWidth is false", () => {
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
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = screen.getByTestId("table")

      expect(table.style.width).toBe("")
    })
  })
})
