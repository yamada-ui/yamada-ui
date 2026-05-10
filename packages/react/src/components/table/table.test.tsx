import type { ColumnDef } from "@tanstack/react-table"
import { vi } from "vitest"
import { a11y, render, screen } from "#test"
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

const getTable = () => {
  const el = screen.getByTestId("table")
  if (!(el instanceof HTMLTableElement))
    throw new Error("table is not an HTMLTableElement")
  return el
}

describe("<Table />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Table columns={columns} data={data} />)
  })

  test("passes a11y checks with row selection", async () => {
    await a11y(<Table columns={columns} data={data} enableRowSelection />)
  })

  test("passes a11y checks with sorting and pagination", async () => {
    await a11y(
      <Table
        columns={columns}
        data={data}
        defaultPagination={{ pageIndex: 0, pageSize: 2 }}
        enablePagination
        enableSorting
      />,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Table.displayName).toBe("Table")
  })

  test("renders TABLE element with `ui-table` class", () => {
    render(
      <Table
        columns={columns}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    const table = getTable()

    expect(table.tagName).toBe("TABLE")
    expect(table).toHaveClass("ui-table")
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

  test("wraps cell text in span when `truncated` is set globally", () => {
    render(
      <Table
        columns={columns}
        data={data}
        truncated
        tableProps={{ "data-testid": "table" }}
      />,
    )

    const spans = getTable().querySelectorAll("td span")

    expect(spans.length).toBeGreaterThan(0)
  })

  test("wraps cell text in span when `lineClamp` is set globally", () => {
    render(
      <Table
        columns={[columnHelper.accessor("firstName", { header: "First Name" })]}
        data={data}
        lineClamp={2}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(getTable().querySelectorAll("td span").length).toBeGreaterThan(0)
  })

  test("does not wrap cell text in span when neither truncated nor lineClamp", () => {
    render(
      <Table
        columns={[columnHelper.accessor("firstName", { header: "First Name" })]}
        data={data}
        tableProps={{ "data-testid": "table" }}
      />,
    )

    expect(getTable().querySelectorAll("td span")).toHaveLength(0)
  })

  describe("aria attributes", () => {
    test("sets `role=grid`, `aria-colcount`, `aria-rowcount` on table", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = getTable()

      expect(table).toHaveAttribute("role", "grid")
      expect(table).toHaveAttribute("aria-colcount", "4")
      expect(table).toHaveAttribute("aria-rowcount", String(data.length))
    })

    test("sets `aria-multiselectable` only when row selection is enabled", () => {
      const { rerender } = render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable()).not.toHaveAttribute("aria-multiselectable")

      rerender(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable()).toHaveAttribute("aria-multiselectable", "true")
    })

    test("sets `aria-rowcount` to `rowCount` for manual pagination", () => {
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

      expect(getTable()).toHaveAttribute("aria-rowcount", "100")
    })

    test("sets `role=columnheader` and `aria-colindex` on header cells", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const ths = getTable().querySelectorAll("thead th")

      ths.forEach((th, index) => {
        expect(th).toHaveAttribute("role", "columnheader")
        expect(th).toHaveAttribute("aria-colindex", String(index + 1))
      })
    })

    test("sets `aria-rowindex` on header rows", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelectorAll("thead tr")[0]).toHaveAttribute(
        "aria-rowindex",
        "1",
      )
    })

    test("sets `role=gridcell` and `aria-colindex` on body cells", () => {
      render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const cells = getTable().querySelectorAll("tbody tr:first-child td")

      cells.forEach((td, index) => {
        expect(td).toHaveAttribute("role", "gridcell")
        expect(td).toHaveAttribute("aria-colindex", String(index + 1))
      })
    })

    test("sets `aria-sort` on sortable columns based on sort state", () => {
      const sortableColumns = [
        columnHelper.accessor("firstName", {
          enableSorting: true,
          header: "First Name",
        }),
      ]

      const { rerender } = render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("th")).toHaveAttribute(
        "aria-sort",
        "none",
      )

      rerender(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sorting={[{ id: "firstName", desc: false }]}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("th")).toHaveAttribute(
        "aria-sort",
        "ascending",
      )

      rerender(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sorting={[{ id: "firstName", desc: true }]}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("th")).toHaveAttribute(
        "aria-sort",
        "descending",
      )
    })

    test("sets `aria-selected` on rows based on rowSelection state", () => {
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

      expect(rows[1]).toHaveAttribute("aria-selected", "true")
    })

    test("sets `aria-disabled` and `data-disabled` on rows disabled via `enableRowSelection` predicate", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const rows = screen.getAllByRole("row")

      expect(rows[1]).toHaveAttribute("aria-disabled", "true")
      expect(rows[1]).toHaveAttribute("data-disabled")
    })
  })

  describe("row selection", () => {
    test("renders checkbox column when `enableRowSelection` is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(0)
    })

    test("does not render checkbox column when `withCheckbox` is false", () => {
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

    test("applies `headerCheckboxProps` and `rowCheckboxProps`", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          headerCheckboxProps={() => ({
            "data-testid": "header-checkbox-custom",
          })}
          rowCheckboxProps={() => ({
            "data-testid": "row-checkbox-custom",
          })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("header-checkbox-custom")).toBeInTheDocument()
      expect(
        screen.getAllByTestId("row-checkbox-custom").length,
      ).toBeGreaterThan(0)
    })

    test("applies `checkboxProps` to all checkboxes", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection
          checkboxProps={{ colorScheme: "red" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(0)
    })

    test("renders footer checkbox column when `withFooterCheckbox` is true", () => {
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

      const tfoot = getTable().querySelector("tfoot")

      expect(tfoot).toBeInTheDocument()
      expect(
        tfoot?.querySelectorAll('input[type="checkbox"]').length,
      ).toBeGreaterThan(0)
    })

    test("invokes `onRowSelectionChange` when header checkbox toggles", async () => {
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

      await user.click(screen.getAllByRole("checkbox")[0]!)

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("invokes `onRowSelectionChange` when individual row checkbox toggles", async () => {
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

      await user.click(screen.getAllByRole("checkbox")[1]!)

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("selects row on click when `selectOnClickRow` is true", async () => {
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
      await user.click(rows[2]!)

      expect(onRowSelectionChange).toHaveBeenCalledWith(expect.any(Object))
    })

    test("does not invoke `onRowSelectionChange` for disabled rows on click", async () => {
      const onRowSelectionChange = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          selectOnClickRow
          tableProps={{ "data-testid": "table" }}
          onRowSelectionChange={onRowSelectionChange}
        />,
      )

      const rows = screen.getAllByRole("row")
      await user.click(rows[1]!)

      expect(onRowSelectionChange).not.toHaveBeenCalled()
    })

    test("invokes `onRowClick` and `onRowDoubleClick` for enabled rows", async () => {
      const onRowClick = vi.fn()
      const onRowDoubleClick = vi.fn()

      const { user } = render(
        <Table
          columns={columns}
          data={data}
          enableRowSelection={(row) => row.original.id !== "1"}
          tableProps={{ "data-testid": "table" }}
          onRowClick={onRowClick}
          onRowDoubleClick={onRowDoubleClick}
        />,
      )

      const rows = screen.getAllByRole("row")

      await user.click(rows[2]!)
      expect(onRowClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "1" }),
      )

      await user.dblClick(rows[2]!)
      expect(onRowDoubleClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: "1" }),
      )
    })
  })

  describe("sorting", () => {
    const sortableColumns = [
      columnHelper.accessor("firstName", {
        enableSorting: true,
        header: "First Name",
      }),
    ]

    test("renders sort button when sorting is enabled", () => {
      render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const button = getTable().querySelector("button[data-focusable]")

      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute("type", "button")
    })

    test("toggles sort state when sort button is clicked", async () => {
      const onSortingChange = vi.fn()

      const { user } = render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          tableProps={{ "data-testid": "table" }}
          onSortingChange={onSortingChange}
        />,
      )

      const button = getTable().querySelector("button[data-focusable]")
      if (!(button instanceof HTMLButtonElement))
        throw new Error("sort button missing")

      await user.click(button)

      expect(onSortingChange).toHaveBeenCalledWith(expect.any(Array))
    })

    test("renders custom `sortingIcon` and applies `sortingIconProps`", () => {
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
          sortingIconProps={{ className: "custom-sorting-icon" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("custom-sort-icon")).toBeInTheDocument()
    })

    test("renders default sort icon with `sortingIconProps` data attribute", () => {
      render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sortingIconProps={{ "data-testid": "sort-icon-custom" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("sort-icon-custom")).toBeInTheDocument()
    })

    test("respects `sortDescFirst`", () => {
      render(
        <Table
          columns={sortableColumns}
          data={data}
          enableSorting
          sortDescFirst
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("th")).toHaveAttribute(
        "aria-sort",
        "none",
      )
    })
  })

  describe("column resizing", () => {
    const resizableColumns = [
      columnHelper.accessor("firstName", {
        size: 200,
        enableResizing: true,
        header: "First Name",
      }),
      columnHelper.accessor("lastName", {
        enableResizing: true,
        header: "Last Name",
      }),
    ]

    test("renders resize trigger when `enableColumnResizing` is true", () => {
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

    test("applies `resizableTriggerProps`", () => {
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

      expect(
        getTable().querySelectorAll(".custom-resize-trigger").length,
      ).toBeGreaterThan(0)
    })

    test("renders with `columnResizeMode=onEnd`", () => {
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

      expect(screen.getAllByTestId("resize-trigger").length).toBeGreaterThan(0)
    })

    test("sets table width when `enableAutoResizeTableWidth` is true", () => {
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

      expect(getTable().style.width).not.toBe("")
    })

    test("does not set table width when `enableAutoResizeTableWidth` is false", () => {
      render(
        <Table
          columnResizeMode="onChange"
          columns={resizableColumns}
          data={data}
          enableColumnResizing
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().style.width).toBe("")
    })

    test("resets column size on double-click of resize trigger", async () => {
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

      const trigger = screen.getAllByTestId("resize-trigger")[0]!

      await user.dblClick(trigger)

      expect(getTable().querySelector("th")?.style.width).toBeDefined()
    })
  })

  describe("pagination", () => {
    test("paginates rows when `enablePagination` is true", () => {
      render(
        <Table
          columns={columns}
          data={data}
          defaultPagination={{ pageIndex: 0, pageSize: 2 }}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByRole("row")).toHaveLength(3)
    })

    test("uses default page size when no `defaultPagination` is provided", () => {
      render(
        <Table
          columns={columns}
          data={data}
          enablePagination
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByRole("row")).toHaveLength(data.length + 1)
    })

    test("uses controlled `pagination` state", () => {
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

      expect(screen.getAllByRole("row")).toHaveLength(3)
    })
  })

  describe("controlled state", () => {
    test("uses controlled `sorting` state", () => {
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

      expect(getTable()).toBeInTheDocument()
    })

    test("uses controlled `columnFilters` state", () => {
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

      expect(getTable()).toBeInTheDocument()
    })

    test("uses `defaultColumnFilters` with `onColumnFiltersChange`", () => {
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

      expect(getTable()).toBeInTheDocument()
    })

    test("forwards `state` prop to `useReactTable`", () => {
      render(
        <Table
          columns={columns}
          data={data}
          state={{ globalFilter: "John" }}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable()).toBeInTheDocument()
    })
  })

  describe("grouped columns", () => {
    test("renders grouped header cells with the correct number of header rows", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const headerRows = getTable().querySelectorAll("thead tr")

      expect(headerRows).toHaveLength(2)
      expect(screen.getByText("Name", { exact: true })).toBeInTheDocument()
      expect(screen.getByText("Info")).toBeInTheDocument()
      expect(screen.getByText("First Name")).toBeInTheDocument()
      expect(screen.getByText("Last Name")).toBeInTheDocument()
    })

    test("renders deeply nested header groups", () => {
      render(
        <Table
          columns={nestedColumns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        getTable().querySelectorAll("thead tr").length,
      ).toBeGreaterThanOrEqual(2)
    })

    test("renders grouped footer cells with `aria-colindex` and `aria-rowindex`", () => {
      render(
        <Table
          columns={groupedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const footerCells = getTable().querySelectorAll("tfoot td[aria-colindex]")

      expect(footerCells.length).toBeGreaterThan(0)
      footerCells.forEach((cell) => {
        expect(cell).toHaveAttribute("aria-colindex")
        expect(cell).toHaveAttribute("aria-rowindex")
      })
    })

    test("renders deeply nested footer groups", () => {
      render(
        <Table
          columns={nestedColumns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(
        getTable().querySelectorAll("tfoot tr").length,
      ).toBeGreaterThanOrEqual(2)
    })
  })

  describe("footer groups", () => {
    test("renders `tfoot` only when `withFooterGroups` is true", () => {
      const { rerender } = render(
        <Table
          columns={columns}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("tfoot")).not.toBeInTheDocument()

      rerender(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelector("tfoot")).toBeInTheDocument()
    })

    test("renders footer cell content via flexRender", () => {
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

    test("renders footer with `lineClamp` from column definition", () => {
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

      expect(getTable().querySelector("tfoot")).toBeInTheDocument()
    })
  })

  describe("props passing", () => {
    test("applies `headerGroupProps`, `headerProps`, `rowProps`, `cellProps`", () => {
      render(
        <Table
          columns={columns}
          data={data}
          cellProps={() => ({ className: "custom-cell" })}
          headerGroupProps={() => ({ "data-testid": "header-group" })}
          headerProps={() => ({ className: "custom-header" })}
          rowProps={() => ({ "data-testid": "custom-row" })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getByTestId("header-group")).toBeInTheDocument()
      expect(
        getTable().querySelectorAll("th.custom-header").length,
      ).toBeGreaterThan(0)
      expect(screen.getAllByTestId("custom-row").length).toBeGreaterThan(0)
      expect(
        getTable().querySelectorAll("td.custom-cell").length,
      ).toBeGreaterThan(0)
    })

    test("applies `footerGroupProps` and `footerProps`", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          footerGroupProps={() => ({ "data-testid": "footer-group" })}
          footerProps={() => ({ className: "custom-footer" })}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(screen.getAllByTestId("footer-group").length).toBeGreaterThan(0)
      expect(
        getTable().querySelectorAll("tfoot .custom-footer").length,
      ).toBeGreaterThan(0)
    })

    test("applies `theadProps`, `tbodyProps`, `tfootProps`", () => {
      render(
        <Table
          columns={columns}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
          tbodyProps={{ "data-testid": "tbody" }}
          tfootProps={{ "data-testid": "tfoot" }}
          theadProps={{ "data-testid": "thead" }}
        />,
      )

      expect(screen.getByTestId("thead")).toBeInTheDocument()
      expect(screen.getByTestId("tbody")).toBeInTheDocument()
      expect(screen.getByTestId("tfoot")).toBeInTheDocument()
    })

    test("applies column-level `headerProps`, `cellProps`, and `footerProps`", () => {
      const columnsWithProps = [
        columnHelper.accessor("firstName", {
          footer: "Footer",
          header: "First Name",
          cellProps: { className: "column-cell-props" },
          footerProps: { className: "column-footer-props" },
          headerProps: { className: "column-header-props" },
        }),
      ]

      render(
        <Table
          columns={columnsWithProps}
          data={data}
          withFooterGroups
          tableProps={{ "data-testid": "table" }}
        />,
      )

      const table = getTable()

      expect(
        table.querySelectorAll("th.column-header-props").length,
      ).toBeGreaterThan(0)
      expect(
        table.querySelectorAll("td.column-cell-props").length,
      ).toBeGreaterThan(0)
      expect(
        table.querySelectorAll("tfoot td.column-footer-props").length,
      ).toBeGreaterThan(0)
    })

    test("applies column-level `truncated` and `lineClamp`", () => {
      const columnsWithTruncated = [
        columnHelper.accessor("firstName", {
          header: "First Name",
          truncated: true,
        }),
        columnHelper.accessor("lastName", {
          header: "Last Name",
          lineClamp: 2,
        }),
      ]

      render(
        <Table
          columns={columnsWithTruncated}
          data={data}
          tableProps={{ "data-testid": "table" }}
        />,
      )

      expect(getTable().querySelectorAll("td span").length).toBeGreaterThan(0)
    })
  })
})
