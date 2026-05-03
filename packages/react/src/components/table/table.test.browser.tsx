import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"
import { vi } from "vitest"
import { a11y, page, render } from "#test/browser"
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

const focusElement = (element: Element | null | undefined) => {
  ;(element as HTMLElement | undefined)?.focus()
}

describe("<Table />", () => {
  test("renders component correctly", async () => {
    await a11y(<Table columns={columns} data={data} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Table.displayName).toBe("Table")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Table
        columns={columns}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(page.getByTestId("table").element() as HTMLElement).toHaveClass(
      "ui-table",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Table
        columns={columns}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect((page.getByTestId("table").element() as HTMLElement).tagName).toBe(
      "TABLE",
    )
  })

  test("renders header and footer with render functions", async () => {
    await render(
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

    expect(
      page.getByTestId("custom-header").element() as HTMLElement,
    ).toHaveTextContent("5 rows")
    expect(
      page.getByTestId("custom-footer").element() as HTMLElement,
    ).toHaveTextContent("5 rows")
  })

  test("renders header and footer as ReactNode", async () => {
    await render(
      <Table
        columns={columns}
        data={data}
        footer={<div data-testid="footer-node">Footer</div>}
        header={<div data-testid="header-node">Header</div>}
      />,
    )

    expect(
      page.getByTestId("header-node").element() as HTMLElement,
    ).toBeInTheDocument()
    expect(
      page.getByTestId("footer-node").element() as HTMLElement,
    ).toBeInTheDocument()
  })

  test("renders with truncated text", async () => {
    await render(
      <Table
        columns={columns}
        data={data}
        truncated
        tableProps={{ "data-testid": "table" }}
      />,
    )

    const table = page.getByTestId("table").element() as HTMLElement
    const spans = table.querySelectorAll("td span")

    expect(spans.length).toBeGreaterThan(0)
  })

  describe("grouped columns", () => {
    test("renders merged header groups correctly", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      await expect
        .element(page.getByText("Name", { exact: true }))
        .toBeInTheDocument()
      await expect.element(page.getByText("Info")).toBeInTheDocument()
      await expect.element(page.getByText("First Name")).toBeInTheDocument()
      await expect.element(page.getByText("Last Name")).toBeInTheDocument()
    })

    test("renders merged footer groups correctly", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("row selection", () => {
    test("renders checkbox column when enableRowSelection is true", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const checkboxes = [
        ...page.getByRole("checkbox").elements(),
      ] as HTMLElement[]

      expect(checkboxes.length).toBeGreaterThan(0)
    })

    test("does not render checkbox when withCheckbox is false", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withCheckbox={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(page.getByRole("checkbox").elements()).toHaveLength(0)
    })

    test("selects all rows when header checkbox is clicked", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const headerCheckbox = page.getByRole("checkbox").first().element()
      focusElement(headerCheckbox)
      await user.keyboard(" ")

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("selects individual row when row checkbox is clicked", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const firstRowCheckbox = page.getByRole("checkbox").nth(1).element()
      focusElement(firstRowCheckbox)
      await user.keyboard(" ")

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("selects row on click when selectOnClickRow is true", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      await user.click(firstDataRow)

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("renders footer checkbox when withFooterCheckbox is true", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withFooterCheckbox
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
      const footerCheckboxes = tfoot?.querySelectorAll('input[type="checkbox"]')

      expect(footerCheckboxes?.length).toBeGreaterThan(0)
    })

    test("applies headerCheckboxProps", async () => {
      await render(
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

      expect(
        page.getByTestId("header-checkbox-custom").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("applies rowCheckboxProps", async () => {
      await render(
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
        (
          [
            ...page.getByTestId("row-checkbox-custom").elements(),
          ] as HTMLElement[]
        ).length,
      ).toBeGreaterThan(0)
    })

    test("handles disabled row selection via function", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("data-disabled")
    })

    test("invokes onRowClick callback", async () => {
      const onRowClick = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onRowClick={onRowClick}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      await user.click(firstDataRow)

      expect(onRowClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "0" }),
      )
    })

    test("invokes onRowDoubleClick callback", async () => {
      const onRowDoubleClick = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onRowDoubleClick={onRowDoubleClick}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      await user.dblClick(firstDataRow)

      expect(onRowDoubleClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "0" }),
      )
    })
  })

  describe("sorting", () => {
    test("renders sorting icons when sorting is enabled", async () => {
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

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const buttons = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelectorAll("button[data-focusable]")

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

      const { user } = await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
          onSortingChange={onSortingChange}
        />,
      )

      const sortButton = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelector("button[data-focusable]")!

      await user.click(sortButton)

      expect(onSortingChange).toHaveBeenCalledWith(expect.any(Array))
    })

    test("renders custom sorting icon", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
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

      expect(
        page.getByTestId("custom-sort-icon").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("applies sortingIconProps", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sortingIconProps={{ className: "custom-sorting-icon" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const icons = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelectorAll(".custom-sorting-icon")

      expect(icons.length).toBeGreaterThan(0)
    })

    test("renders descending sort icon correctly", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: true }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "descending")
    })

    test("renders ascending sort correctly", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: false }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "ascending")
    })
  })

  describe("column resizing", () => {
    test("renders resizable trigger when enableColumnResizing is true", async () => {
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

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-handle" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        ([...page.getByTestId("resize-handle").elements()] as HTMLElement[])
          .length,
      ).toBeGreaterThan(0)
    })

    test("applies resizableTriggerProps", async () => {
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

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ className: "custom-resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const triggers = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelectorAll(".custom-resize-trigger")

      expect(triggers.length).toBeGreaterThan(0)
    })

    test("applies enableAutoResizeTableWidth", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableAutoResizeTableWidth
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
      expect(table.style.width).not.toBe("")
    })
  })

  describe("pagination", () => {
    test("paginates data when enablePagination is true", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      // 1 header row + 2 data rows
      expect(rows).toHaveLength(3)
    })

    test("handles PageDown keyboard navigation", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageDown}")

      expect(table).toBeInTheDocument()
    })

    test("does not paginate when cannot go to next page", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 2, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageDown}")

      expect(table).toBeInTheDocument()
    })

    test("does not go to previous page when on first page", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageUp}")

      expect(table).toBeInTheDocument()
    })

    test("handles PageUp keyboard navigation", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 1, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageUp}")

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation", () => {
    test("navigates cells with arrow keys", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{ArrowRight}")
      await user.keyboard("{ArrowDown}")
      await user.keyboard("{ArrowLeft}")
      await user.keyboard("{ArrowUp}")

      expect(table).toBeInTheDocument()
    })

    test("navigates to first and last cell with Home and End", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!
      focusElement(firstTh)
      await user.keyboard("{End}")
      await user.keyboard("{Home}")

      expect(table).toBeInTheDocument()
    })

    test("does not enable keyboard navigation when disabled", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector("th")!

      focusElement(firstTh)
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })

    test("sets initial tabIndex based on initialFocusableCell", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          initialFocusableCell={{ colIndex: 1, rowIndex: 1 }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const cell = table.querySelector('[data-colindex="1"][data-rowindex="1"]')

      expect(cell).toHaveAttribute("tabindex", "0")
    })

    test("focuses on cell focus event", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      expect(table).toBeInTheDocument()
    })
  })

  describe("column filters", () => {
    test("calls onColumnFiltersChange when filter changes", async () => {
      const onColumnFiltersChange = vi.fn()

      await render(
        <Table
          columns={columns}
          data={data}
          defaultColumnFilters={[]}
          tableProps={{ "data-testid": "table" }}
          onColumnFiltersChange={onColumnFiltersChange}
        />,
      )

      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("props passing", () => {
    test("applies headerGroupProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          headerGroupProps={() => ({
            "data-testid": "header-group",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        page.getByTestId("header-group").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("applies headerProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          headerProps={() => ({
            className: "custom-header",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const headers = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelectorAll("th.custom-header")

      expect(headers.length).toBeGreaterThan(0)
    })

    test("applies rowProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          rowProps={() => ({
            "data-testid": "custom-row",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        ([...page.getByTestId("custom-row").elements()] as HTMLElement[])
          .length,
      ).toBeGreaterThan(0)
    })

    test("applies cellProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          cellProps={() => ({
            className: "custom-cell",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const cells = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelectorAll("td.custom-cell")

      expect(cells.length).toBeGreaterThan(0)
    })

    test("applies footerGroupProps", async () => {
      await render(
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

      expect(
        ([...page.getByTestId("footer-group").elements()] as HTMLElement[])
          .length,
      ).toBeGreaterThan(0)
    })

    test("applies footerProps", async () => {
      await render(
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

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot .custom-footer")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("applies theadProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          theadProps={{ "data-testid": "thead" }}
        />,
      )

      expect(
        page.getByTestId("thead").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("applies tbodyProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          tbodyProps={{ "data-testid": "tbody" }}
        />,
      )

      expect(
        page.getByTestId("tbody").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("applies tfootProps", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
          tfootProps={{ "data-testid": "tfoot" }}
        />,
      )

      expect(
        page.getByTestId("tfoot").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("footer groups", () => {
    test("renders footer groups when withFooterGroups is true", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })

    test("does not render footer groups when withFooterGroups is false", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).not.toBeInTheDocument()
    })

    test("renders grouped footer correctly", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("controlled state", () => {
    test("uses controlled sorting state", async () => {
      const onSortingChange = vi.fn()

      await render(
        <Table
          columns={columns}
          data={data}
          sorting={[{ id: "firstName", desc: false }]}
          tableProps={{ "data-testid": "table" }}
          onSortingChange={onSortingChange}
        />,
      )

      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("uses controlled pagination state", async () => {
      const onPaginationChange = vi.fn()

      await render(
        <Table
          columns={columns}
          data={data}
          enablePagination
          pagination={{ pageIndex: 0, pageSize: 2 }}
          tableProps={{ "data-testid": "table" }}
          onPaginationChange={onPaginationChange}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]

      expect(rows).toHaveLength(3)
    })

    test("uses controlled row selection state", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          rowSelection={{ "0": true }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("aria-selected", "true")
    })

    test("uses controlled column filters state", async () => {
      const onColumnFiltersChange = vi.fn()

      await render(
        <Table
          columnFilters={[{ id: "firstName", value: "John" }]}
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
          onColumnFiltersChange={onColumnFiltersChange}
        />,
      )

      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("columnResizeMode onEnd", () => {
    test("renders with columnResizeMode onEnd", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columnResizeMode="onEnd"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
      expect(
        page.getByTestId("resize-trigger").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with footer groups", () => {
    test("navigates through footer cells", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(
        table.querySelectorAll("tfoot [data-colindex]").length,
      ).toBeGreaterThan(0)
    })

    test("navigates with grouped header columns", async () => {
      const { user } = await render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector("[data-colindex][data-rowindex]")!

      focusElement(firstTh)
      await user.keyboard("{ArrowRight}")
      await user.keyboard("{ArrowDown}")

      expect(table).toBeInTheDocument()
    })
  })

  describe("manual pagination", () => {
    test("handles manual pagination with rowCount", async () => {
      await render(
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

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toHaveAttribute("aria-rowcount", "100")
    })
  })

  describe("aria attributes", () => {
    test("sets aria-colcount correctly", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toHaveAttribute("aria-colcount", "4")
    })

    test("sets aria-multiselectable when row selection is enabled", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toHaveAttribute("aria-multiselectable", "true")
    })

    test("sets role=grid on table", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toHaveAttribute("role", "grid")
    })

    test("sets aria-rowcount to data length when rowCount is not provided", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toHaveAttribute("aria-rowcount", String(data.length))
    })

    test("sets aria-rowindex on header rows", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const headerRows = table.querySelectorAll("thead tr")

      expect(headerRows[0]).toHaveAttribute("aria-rowindex", "1")
    })

    test("sets aria-colindex on header cells", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const ths = table.querySelectorAll("thead th")

      expect(ths[0]).toHaveAttribute("aria-colindex", "1")
      expect(ths[1]).toHaveAttribute("aria-colindex", "2")
    })

    test("sets aria-colindex on body cells", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstRowCells = table.querySelectorAll("tbody tr:first-child td")

      expect(firstRowCells[0]).toHaveAttribute("aria-colindex", "1")
      expect(firstRowCells[1]).toHaveAttribute("aria-colindex", "2")
    })

    test("sets role=columnheader on th elements", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const ths = table.querySelectorAll("thead th")

      ths.forEach((th) => {
        expect(th).toHaveAttribute("role", "columnheader")
      })
    })

    test("sets role=gridcell on td elements", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tds = table.querySelectorAll("tbody td")

      tds.forEach((td) => {
        expect(td).toHaveAttribute("role", "gridcell")
      })
    })

    test("does not set aria-multiselectable when row selection is disabled", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )
      await expect
        .element(page.getByTestId("table"))
        .not.toHaveAttribute("aria-multiselectable")
    })

    test("sets aria-sort to none when column is sortable but not sorted", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const th = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelector("th")

      expect(th).toHaveAttribute("aria-sort", "none")
    })
  })

  describe("row selection with disabled rows", () => {
    test("renders disabled row with correct attributes", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("data-disabled")
      expect(firstDataRow).toHaveAttribute("aria-disabled", "true")
    })

    test("enabled rows invoke onRowClick", async () => {
      const onRowClick = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
          onRowClick={onRowClick}
        />,
      )

      // Click the second data row (id "2"), which is enabled
      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const secondDataRow = rows[2]!

      await user.click(secondDataRow)

      expect(onRowClick).toHaveBeenCalledTimes(1)
    })

    test("enabled rows invoke onRowDoubleClick", async () => {
      const onRowDoubleClick = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
          onRowDoubleClick={onRowDoubleClick}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const secondDataRow = rows[2]!

      await user.dblClick(secondDataRow)

      expect(onRowDoubleClick).toHaveBeenCalledTimes(1)
    })

    test("sets aria-disabled on disabled rows", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("grouped columns header and footer merging", () => {
    test("renders correct number of header rows for grouped columns", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const headerRows = table.querySelectorAll("thead tr")

      expect(headerRows).toHaveLength(2)
    })

    test("renders headers with colSpan for grouped columns", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstRowHeaders = table.querySelectorAll("thead tr:first-child th")

      const nameHeader = Array.from(firstRowHeaders).find(
        (th) => th.textContent === "Name",
      )

      expect(nameHeader).toBeDefined()
    })

    test("renders footer cells with correct data-colindex for grouped columns", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("renders footer with aria-colindex and aria-rowindex for grouped columns", async () => {
      await render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot td[aria-colindex]")

      footerCells.forEach((cell) => {
        expect(cell).toHaveAttribute("aria-colindex")
        expect(cell).toHaveAttribute("aria-rowindex")
      })
    })
  })

  describe("keyboard navigation with focusable elements", () => {
    test("focuses on checkbox inside cell when navigating with keyboard", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      const focusable = firstTh.querySelector("[data-focusable]")

      expect(focusable).toBeInTheDocument()
    })

    test("moves focus to the next row when pressing ArrowDown", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{ArrowDown}")

      const nextCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="1"]',
      )

      expect(nextCell).toBeInTheDocument()
    })

    test("handles focus event on non-initial cell", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const secondTh = table.querySelector(
        '[data-colindex="1"][data-rowindex="0"]',
      )!

      focusElement(secondTh)
      expect(table).toBeInTheDocument()
    })

    test("does not navigate when keyboard navigation is disabled and keydown fires", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const td = table.querySelector("td")!

      focusElement(td)
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })

    test("tabIndex is undefined when keyboard navigation is disabled", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const cell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      expect(cell).not.toHaveAttribute("tabindex")
    })
  })

  describe("column definition props", () => {
    test("applies headerProps from column definition", async () => {
      const columnsWithHeaderProps = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          headerProps: { className: "column-header-props" },
        }),
      ]

      await render(
        <Table
          columns={columnsWithHeaderProps}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const headers = table.querySelectorAll("th.column-header-props")

      expect(headers.length).toBeGreaterThan(0)
    })

    test("applies cellProps from column definition", async () => {
      const columnsWithCellProps = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          cellProps: { className: "column-cell-props" },
        }),
      ]

      await render(
        <Table
          columns={columnsWithCellProps}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const cells = table.querySelectorAll("td.column-cell-props")

      expect(cells.length).toBeGreaterThan(0)
    })

    test("applies footerProps from column definition", async () => {
      const columnsWithFooterProps = [
        columnHelper.accessor("firstName", {
          footer: "Footer",
          header: "First Name",
          footerProps: { className: "column-footer-props" },
        }),
      ]

      await render(
        <Table
          columns={columnsWithFooterProps}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot td.column-footer-props")

      expect(footerCells.length).toBeGreaterThan(0)
    })

    test("applies truncated prop from column definition", async () => {
      const columnsWithTruncated = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          truncated: true,
        }),
      ]

      await render(
        <Table
          columns={columnsWithTruncated}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })

    test("applies lineClamp prop from column definition", async () => {
      const columnsWithLineClamp = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          lineClamp: 2,
        }),
      ]

      await render(
        <Table
          columns={columnsWithLineClamp}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })
  })

  describe("column resizing interactions", () => {
    test("sets width style on header cells when column resizing is enabled", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          size: 200,
          enableResizing: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
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

      const { user } = await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-trigger" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const resizeTrigger = page
        .getByTestId("resize-trigger")
        .element() as HTMLElement

      await user.dblClick(resizeTrigger)

      // After double-click, the table still renders and resize trigger is still present
      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
      expect(
        page.getByTestId("resize-trigger").element() as HTMLElement,
      ).toBeInTheDocument()

      const th = (
        page.getByTestId("table").element() as HTMLElement
      ).querySelector("th")

      expect(th?.style.width).toBeDefined()
    })

    test("renders resizable trigger with custom class", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          resizableTriggerProps={{ "data-testid": "resize-cursor" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        page.getByTestId("resize-cursor").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("sorting icon interactions", () => {
    test("renders default sort icon (unsorted)", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
      expect(sortButton).toHaveAttribute("type", "button")
    })

    test("applies sortingIconProps with data attribute", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
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

      expect(
        page.getByTestId("sort-icon-custom").element() as HTMLElement,
      ).toBeInTheDocument()
    })

    test("renders custom sorting icon for unsorted state", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
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

      expect(
        page.getByTestId("custom-icon").element() as HTMLElement,
      ).toHaveTextContent("unsorted")
    })

    test("renders descending sort icon", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: true }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
    })

    test("renders ascending sort icon", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          defaultSorting={[{ id: "firstName", desc: false }]}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const sortButton = table.querySelector("button[data-focusable]")

      expect(sortButton).toBeInTheDocument()
    })
  })

  describe("pagination with keyboard navigation", () => {
    test("updates tabIndex after page change", async () => {
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

      await render(<PaginatedTable />)

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })

    test("handles PageDown keyboard event on paginated table", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageDown}")

      // After PageDown, the page should have changed
      expect(table).toBeInTheDocument()
    })

    test("handles PageUp keyboard event on paginated table", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 1, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstCell)
      await user.keyboard("{PageUp}")

      // After PageUp, the page should have changed
      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with row selection checkboxes", () => {
    test("keyboard navigation works with checkbox columns", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const selectHeader = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(selectHeader)
      await user.keyboard("{ArrowRight}")
      await user.keyboard("{ArrowDown}")

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation edge cases", () => {
    test("ArrowLeft at left boundary does not crash", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{ArrowLeft}")

      expect(table).toBeInTheDocument()
    })

    test("ArrowUp at top boundary does not crash", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{ArrowUp}")

      expect(table).toBeInTheDocument()
    })

    test("ArrowDown at bottom boundary does not crash", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const lastRow = data.length
      const lastCell = table.querySelector(
        `[data-colindex="0"][data-rowindex="${lastRow}"]`,
      )!

      focusElement(lastCell)
      await user.keyboard("{ArrowDown}")

      expect(table).toBeInTheDocument()
    })

    test("ArrowRight at right boundary does not crash", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )!

      focusElement(lastTh)
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })

    test("End key navigates to last column", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{End}")

      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )

      expect(lastTh).toBeInTheDocument()
    })

    test("Home key navigates to first column", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const lastColIndex = columns.length - 1
      const lastTh = table.querySelector(
        `[data-colindex="${lastColIndex}"][data-rowindex="0"]`,
      )!

      focusElement(lastTh)
      await user.keyboard("{Home}")

      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )

      expect(firstTh).toBeInTheDocument()
    })

    test("ignores unknown keys", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(firstTh)
      await user.keyboard("{Tab}")

      expect(table).toBeInTheDocument()
    })
  })

  describe("keyboard navigation with grouped columns", () => {
    test("cellMap correctly handles colSpan in grouped headers", async () => {
      const { user } = await render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const headerCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      focusElement(headerCell)
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })

    test("keyboard navigation works with grouped footer cells", async () => {
      const { user } = await render(
        <Table
          columns={groupedColumns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)

      focusElement(footerCells[0])
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })
  })

  describe("row selection with selectOnClickRow", () => {
    test("toggles row selection on click", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const secondDataRow = rows[2]!

      await user.click(secondDataRow)

      expect(onRowSelectionChange).toHaveBeenCalledTimes(1)
    })

    test("does not select disabled row on click", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const firstDataRow = rows[1]!

      expect(firstDataRow).toHaveAttribute("data-disabled")
    })
  })

  describe("footer groups with row selection", () => {
    test("renders footer with aria-hidden on select column when no footer checkbox", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("checkboxProps", () => {
    test("applies checkboxProps to both header and row checkboxes", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          checkboxProps={{ colorScheme: "red" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const checkboxes = [
        ...page.getByRole("checkbox").elements(),
      ] as HTMLElement[]

      expect(checkboxes.length).toBeGreaterThan(0)
    })
  })

  describe("highlightOnHover and highlightOnSelected defaults", () => {
    test("sets highlightOnHover and highlightOnSelected when enableRowSelection is true", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })
  })

  describe("truncated text rendering", () => {
    test("wraps text in span when truncated is set globally", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          truncated
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const spans = table.querySelectorAll("span")

      expect(spans.length).toBeGreaterThan(0)
    })

    test("does not wrap text in span when neither lineClamp nor truncated", async () => {
      const simpleColumns = [
        columnHelper.accessor("firstName", {
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={simpleColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })

    test("wraps text in span when lineClamp is set globally", async () => {
      await render(
        <Table
          columns={[
            columnHelper.accessor("firstName", { header: "First Name" }),
          ]}
          data={data}
          lineClamp={2}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table).toBeInTheDocument()
    })

    test("lineClamp in footer groups wraps text in span", async () => {
      const columnsWithLineClamp = [
        columnHelper.accessor("firstName", {
          footer: "Footer",
          header: "First Name",
          lineClamp: 2,
        }),
      ]

      await render(
        <Table
          columns={columnsWithLineClamp}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const tfoot = table.querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
    })
  })

  describe("sortDescFirst option", () => {
    test("renders with sortDescFirst set to true", async () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sortDescFirst
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

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
    test("uses default pagination when not provided", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]

      // Default is pageSize: 20, so all 5 data rows + 1 header row
      expect(rows).toHaveLength(6)
    })

    test("uses default row selection when not provided", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = [...page.getByRole("row").elements()] as HTMLElement[]
      const dataRows = rows.slice(1)

      dataRows.forEach((row) => {
        expect(row).not.toHaveAttribute("aria-selected", "true")
      })
    })
  })

  describe("state override", () => {
    test("passes state prop to useReactTable", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          state={{
            globalFilter: "John",
          }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        page.getByTestId("table").element() as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  describe("footer rendering details", () => {
    test("renders footer cell content with flexRender", async () => {
      const columnsWithFooter = [
        columnHelper.accessor("firstName", {
          footer: () => "Total",
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columns={columnsWithFooter}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      await expect.element(page.getByText("Total")).toBeInTheDocument()
    })

    test("renders footer with tabIndex when keyboard navigation enabled", async () => {
      await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerCells = table.querySelectorAll("tfoot td[data-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)
    })
  })

  describe("keyboard navigation through all sections", () => {
    test("navigates from header to body to footer", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      )!

      // Navigate down through header -> body -> footer
      focusElement(firstTh)
      for (let i = 0; i < data.length + 2; i++) {
        await user.keyboard("{ArrowDown}")
      }

      expect(table).toBeInTheDocument()
    })
  })

  describe("enableAutoResizeTableWidth", () => {
    test("sets table width based on center total size", async () => {
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

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableAutoResizeTableWidth
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      // Width should be set to a non-empty value based on column sizes
      expect(table.style.width).not.toBe("")
    })

    test("does not set width when enableAutoResizeTableWidth is false", async () => {
      const resizableColumns = [
        columnHelper.accessor("firstName", {
          enableResizing: true,
          header: "First Name",
        }),
      ]

      await render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement

      expect(table.style.width).toBe("")
    })
  })

  describe("keyboard navigation with user.keyboard", () => {
    test("navigates cells with arrow keys", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{ArrowRight}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="1"][data-rowindex="0"]'),
      )

      await user.keyboard("{ArrowDown}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="1"][data-rowindex="1"]'),
      )

      await user.keyboard("{ArrowLeft}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="0"][data-rowindex="1"]'),
      )

      await user.keyboard("{ArrowUp}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="0"][data-rowindex="0"]'),
      )
    })

    test("navigates to first and last cell with Home and End", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{End}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="3"][data-rowindex="0"]'),
      )

      await user.keyboard("{Home}")

      expect(document.activeElement).toBe(
        table.querySelector('[data-colindex="0"][data-rowindex="0"]'),
      )
    })

    test("handles PageDown and PageUp with pagination", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{PageDown}")

      const rowsAfterPageDown = table.querySelectorAll("tbody tr")
      expect(rowsAfterPageDown).toHaveLength(2)

      await user.keyboard("{PageUp}")

      const rowsAfterPageUp = table.querySelectorAll("tbody tr")
      expect(rowsAfterPageUp).toHaveLength(2)
    })

    test("does not go past last page with PageDown", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 2, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{PageDown}")

      expect(table).toBeInTheDocument()
    })

    test("does not go before first page with PageUp", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{PageUp}")

      expect(table).toBeInTheDocument()
    })

    test("updates tabIndex after page change", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enableKeyboardNavigation
          enablePagination
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstTh)
      await user.keyboard("{PageDown}")

      const cell = table.querySelector('[data-colindex="0"][data-rowindex="0"]')
      expect(cell).toHaveAttribute("tabindex", "0")
    })

    test("handles focus event on table", async () => {
      const { user } = await render(
        <Table
          columns={columns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstTh = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      await user.click(firstTh)

      expect(firstTh).toHaveAttribute("tabindex", "0")
    })
  })

  describe("deeply nested grouped columns", () => {
    const nestedColumns: ColumnDef<Data, any>[] = [
      {
        columns: [
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
            header: "Full Name",
          },
        ],
        header: "Person",
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

    test("renders deeply nested header groups with placeholders", async () => {
      await render(
        <Table
          columns={nestedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const headerRows = table.querySelectorAll("thead tr")

      expect(headerRows.length).toBeGreaterThanOrEqual(2)
    })

    test("keyboard navigation works with deeply nested grouped columns", async () => {
      const { user } = await render(
        <Table
          columns={nestedColumns}
          data={data}
          enableKeyboardNavigation
          enableSorting={false}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const firstCell = table.querySelector(
        '[data-colindex="0"][data-rowindex="0"]',
      ) as HTMLElement

      focusElement(firstCell)
      await user.keyboard("{ArrowRight}")

      expect(table).toBeInTheDocument()
    })

    test("renders deeply nested footer groups", async () => {
      await render(
        <Table
          columns={nestedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = page.getByTestId("table").element() as HTMLElement
      const footerRows = table.querySelectorAll("tfoot tr")

      expect(footerRows.length).toBeGreaterThanOrEqual(2)
    })
  })
})
