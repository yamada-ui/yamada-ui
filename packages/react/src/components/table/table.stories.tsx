import type { Meta, StoryFn } from "@storybook/react-vite"
import type {
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "./table"
import { PropsTable } from "#storybook"
import { faker } from "@faker-js/faker"
import { useMemo, useState } from "react"
import { createColumnHelper, Table } from "."
import { useI18n } from "../../providers/i18n-provider"
import { COLOR_SCHEMES, isNumber, isString } from "../../utils"
import { Grid } from "../grid"
import { SearchIcon } from "../icon"
import { Input, InputGroup } from "../input"
import { Pagination as PaginationComponent } from "../pagination"
import { Select } from "../select"
import { VStack } from "../stack"

type Story = StoryFn<typeof Table>

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components / Table",
}

export default meta

interface Data {
  id: string
  age: number
  createdAt: Date
  email: string
  firstName: string
  lastName: string
  phone: string
  role: string
  status: string
  updatedAt: Date
}

const createData = (length = 10): Data[] =>
  Array.from({ length }, (_, index) => ({
    id: index.toString(),
    age: faker.number.int({ max: 65, min: 18 }),
    createdAt: faker.date.past(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    role: faker.helpers.arrayElement(["admin", "user"]),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    updatedAt: faker.date.past(),
  }))

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
  columnHelper.accessor("age", {
    footer: (info) => info.column.id,
    cellProps: { numeric: true },
  }),
  columnHelper.accessor("email", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
]

const columnsFull = [
  ...columns,
  columnHelper.accessor("phone", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue().toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("updatedAt", {
    cell: (info) => info.getValue().toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
]

export const Basic: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} />
}

export const Variant: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => (
        <Table key={key} variant={row} columns={columns} data={data} />
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Table
          key={key}
          size={row}
          columns={columns}
          data={data}
          enableRowSelection
        />
      )}
    </PropsTable>
  )
}

export const Striped: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => (
        <Table key={key} variant={row} columns={columns} data={data} striped />
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable
      variant="stack"
      columns={["outline", "striped"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <Table
          key={key}
          colorScheme={row}
          variant={column !== "striped" ? "outline" : undefined}
          columns={columns}
          data={data}
          striped={column === "striped"}
        />
      )}
    </PropsTable>
  )
}

export const Border: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <>
      <Table columns={columns} data={data} withBorder />

      <Table columns={columns} data={data} withBorder withColumnBorders />
    </>
  )
}

export const ColumnBorders: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} withColumnBorders />
}

export const ScrollArea: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columnsFull} data={data} withScrollArea />
}

export const HighlightOnHover: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable
      variant="stack"
      columns={["outline", "striped"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <Table
          key={key}
          colorScheme={row}
          variant={column !== "striped" ? "outline" : undefined}
          columns={columns}
          data={data}
          highlightOnHover
          striped={column === "striped"}
        />
      )}
    </PropsTable>
  )
}

export const HeaderGroups: Story = () => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        footer: (info) => info.column.id,
        cellProps: { numeric: true },
      }),
      columnHelper.group({
        id: "user",
        columns: [
          columnHelper.group({
            id: "name",
            columns: [
              columnHelper.accessor("firstName", {
                footer: (info) => info.column.id,
              }),
              columnHelper.accessor("lastName", {
                footer: (info) => info.column.id,
              }),
            ],
            footer: (info) => info.column.id,
            header: (info) => info.column.id,
          }),
          columnHelper.accessor("age", {
            footer: (info) => info.column.id,
            cellProps: { numeric: true },
          }),
          columnHelper.accessor("email", {
            footer: (info) => info.column.id,
          }),
        ],
        footer: (info) => info.column.id,
        header: (info) => info.column.id,
      }),
    ],
    [],
  )
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} withBorder withColumnBorders />
}

export const FooterGroups: Story = () => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        footer: (info) => info.column.id,
        cellProps: { numeric: true },
      }),
      columnHelper.group({
        id: "user",
        columns: [
          columnHelper.group({
            id: "name",
            columns: [
              columnHelper.accessor("firstName", {
                footer: (info) => info.column.id,
              }),
              columnHelper.accessor("lastName", {
                footer: (info) => info.column.id,
              }),
            ],
            footer: (info) => info.column.id,
            header: (info) => info.column.id,
          }),
          columnHelper.accessor("age", {
            footer: (info) => info.column.id,
            cellProps: { numeric: true },
          }),
          columnHelper.accessor("email", {
            footer: (info) => info.column.id,
          }),
        ],
        footer: (info) => info.column.id,
        header: (info) => info.column.id,
      }),
    ],
    [],
  )
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      withBorder
      withColumnBorders
      withFooterGroups
    />
  )
}

export const DisableKeyboardNavigation: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table columns={columns} data={data} enableKeyboardNavigation={false} />
  )
}

export const InitialFocusableCell: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      initialFocusableCell={{ colIndex: 1, rowIndex: 0 }}
    />
  )
}

export const RowClick: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["onClick", "onDoubleClick"]}>
      {(_, row, key) => (
        <Table
          key={key}
          columns={columns}
          data={data}
          onRowClick={(data) => {
            if (row !== "onClick") return

            console.log("row clicked", data)
          }}
          onRowDoubleClick={(data) => {
            if (row !== "onDoubleClick") return

            console.log("row double clicked", data)
          }}
        />
      )}
    </PropsTable>
  )
}

export const DefaultSorting: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      defaultSorting={[{ id: "age", desc: true }]}
    />
  )
}

export const DisabledSorting: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} enableSorting={false} />
}

export const DisabledMultiSorting: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} enableMultiSort={false} />
}

export const MaxMultiSortColCount: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} maxMultiSortColCount={2} />
}

export const ManualSorting: Story = () => {
  const defaultData = useMemo<Data[]>(() => createData(), [])
  const [data, setData] = useState<Data[]>(defaultData)

  return (
    <Table
      columns={columns}
      data={data}
      enableMultiSort={false}
      manualSorting
      onSortingChange={(sorting) => {
        if (sorting.length) {
          const { id, desc } = sorting[0]!

          setData((prev) =>
            prev.toSorted((a, b) => {
              if (isNumber(a[id]) && isNumber(b[id])) {
                return desc ? a[id] - b[id] : b[id] - a[id]
              } else if (isString(a[id]) && isString(b[id])) {
                return desc
                  ? a[id].localeCompare(b[id])
                  : b[id].localeCompare(a[id])
              }

              return 0
            }),
          )
        } else {
          setData(defaultData)
        }
        console.log(sorting)
      }}
    />
  )
}

export const SortDescFirst: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} sortDescFirst />
}

export const CustomControlSorting: Story = () => {
  const [sorting, setSorting] = useState<SortingState<Data>>([
    { id: "age", desc: true },
  ])
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      sorting={sorting}
      onSortingChange={setSorting}
    />
  )
}

export const Pagination: Story = () => {
  const { t } = useI18n("table")
  const data = useMemo<Data[]>(() => createData(100), [])

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        enablePagination
        footer={(table) => {
          const page = table.getState().pagination.pageIndex + 1
          const pageSize = table.getState().pagination.pageSize
          const total = table.getPageCount()

          return (
            <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root
                size="sm"
                gridColumn="2 / 3"
                page={page}
                total={total}
                onChange={(page) => table.setPageIndex(page - 1)}
              />

              <Select.Root
                size="sm"
                aria-label={t("Page size")}
                items={[
                  { label: "10", value: "10" },
                  { label: "20", value: "20" },
                  { label: "30", value: "30" },
                  { label: "40", value: "40" },
                  { label: "50", value: "50" },
                ]}
                value={pageSize.toString()}
                rootProps={{ justifySelf: "end", w: "5xs" }}
                onChange={(value) => table.setPageSize(Number(value))}
              />
            </Grid>
          )
        }}
      />
    </VStack>
  )
}

export const DefaultPageIndexAndSize: Story = () => {
  const { t } = useI18n("table")
  const data = useMemo<Data[]>(() => createData(100), [])

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        defaultPagination={{ pageIndex: 2, pageSize: 10 }}
        enablePagination
        footer={(table) => {
          const page = table.getState().pagination.pageIndex + 1
          const pageSize = table.getState().pagination.pageSize
          const total = table.getPageCount()

          return (
            <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root
                size="sm"
                gridColumn="2 / 3"
                page={page}
                total={total}
                onChange={(page) => table.setPageIndex(page - 1)}
              />

              <Select.Root
                size="sm"
                aria-label={t("Page size")}
                items={[
                  { label: "10", value: "10" },
                  { label: "20", value: "20" },
                  { label: "30", value: "30" },
                  { label: "40", value: "40" },
                  { label: "50", value: "50" },
                ]}
                value={pageSize.toString()}
                rootProps={{ justifySelf: "end", w: "5xs" }}
                onChange={(value) => table.setPageSize(Number(value))}
              />
            </Grid>
          )
        }}
      />
    </VStack>
  )
}

export const ManualPagination: Story = () => {
  const { t } = useI18n("table")
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  })
  const rowCount = 100
  const defaultData = useMemo<Data[]>(() => createData(rowCount), [])
  const data = useMemo<Data[]>(
    () =>
      defaultData.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize,
      ),
    [defaultData, pagination],
  )

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        enablePagination
        footer={(table) => {
          const page = table.getState().pagination.pageIndex + 1
          const pageSize = table.getState().pagination.pageSize
          const total = table.getPageCount()

          return (
            <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root
                size="sm"
                gridColumn="2 / 3"
                page={page}
                total={total}
                onChange={(page) => table.setPageIndex(page - 1)}
              />

              <Select.Root
                size="sm"
                aria-label={t("Page size")}
                items={[
                  { label: "10", value: "10" },
                  { label: "20", value: "20" },
                  { label: "30", value: "30" },
                  { label: "40", value: "40" },
                  { label: "50", value: "50" },
                ]}
                value={pageSize.toString()}
                rootProps={{ justifySelf: "end", w: "5xs" }}
                onChange={(value) => table.setPageSize(Number(value))}
              />
            </Grid>
          )
        }}
        manualPagination
        pagination={pagination}
        rowCount={rowCount}
        onPaginationChange={setPagination}
      />
    </VStack>
  )
}

export const CustomControlPagination: Story = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  })
  const { t } = useI18n("table")
  const data = useMemo<Data[]>(() => createData(100), [])

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        enablePagination
        footer={(table) => {
          const page = table.getState().pagination.pageIndex + 1
          const pageSize = table.getState().pagination.pageSize
          const total = table.getPageCount()

          return (
            <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root
                size="sm"
                gridColumn="2 / 3"
                page={page}
                total={total}
                onChange={(page) => table.setPageIndex(page - 1)}
              />

              <Select.Root
                size="sm"
                aria-label={t("Page size")}
                items={[
                  { label: "10", value: "10" },
                  { label: "20", value: "20" },
                  { label: "30", value: "30" },
                  { label: "40", value: "40" },
                  { label: "50", value: "50" },
                ]}
                value={pageSize.toString()}
                rootProps={{ justifySelf: "end", w: "5xs" }}
                onChange={(value) => table.setPageSize(Number(value))}
              />
            </Grid>
          )
        }}
        pagination={pagination}
        onPaginationChange={setPagination}
      />
    </VStack>
  )
}

export const RowSelection: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return <Table columns={columns} data={data} enableRowSelection />
}

export const DefaultRowSelection: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      defaultRowSelection={{ 0: true }}
      enableRowSelection
    />
  )
}

export const WithFooterCheckbox: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableRowSelection
      withFooterCheckbox
      withFooterGroups
    />
  )
}

export const SelectOnClickRow: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table columns={columns} data={data} enableRowSelection selectOnClickRow />
  )
}

export const HiddenCheckbox: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableRowSelection
      selectOnClickRow
      withCheckbox={false}
    />
  )
}

export const DisabledRows: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableRowSelection={(row) => row.id !== "1"}
    />
  )
}

export const CustomControlRowSelection: Story = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableRowSelection
      rowSelection={rowSelection}
      onRowSelectionChange={setRowSelection}
    />
  )
}

export const ColumnFilters: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        header={(table) => {
          const value =
            (table.getColumn("email")?.getFilterValue() as
              | string
              | undefined) ?? ""

          return (
            <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input
                placeholder="Filter emails"
                value={value}
                onChange={(ev) =>
                  table.getColumn("email")?.setFilterValue(ev.target.value)
                }
              />
            </InputGroup.Root>
          )
        }}
      />
    </VStack>
  )
}

export const DefaultColumnFilters: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <VStack>
      <Table
        columns={columns}
        data={data}
        defaultColumnFilters={[{ id: "email", value: "gmail" }]}
        header={(table) => {
          const value =
            (table.getColumn("email")?.getFilterValue() as
              | string
              | undefined) ?? ""

          return (
            <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input
                placeholder="Filter emails"
                value={value}
                onChange={(ev) =>
                  table.getColumn("email")?.setFilterValue(ev.target.value)
                }
              />
            </InputGroup.Root>
          )
        }}
      />
    </VStack>
  )
}

export const CustomControlColumnFilters: Story = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    { id: "email", value: "" },
  ])
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <VStack>
      <Table
        columnFilters={columnFilters}
        columns={columns}
        data={data}
        header={(table) => {
          const value =
            (table.getColumn("email")?.getFilterValue() as
              | string
              | undefined) ?? ""

          return (
            <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input
                placeholder="Filter emails"
                value={value}
                onChange={(ev) =>
                  table.getColumn("email")?.setFilterValue(ev.target.value)
                }
              />
            </InputGroup.Root>
          )
        }}
        onColumnFiltersChange={setColumnFilters}
      />
    </VStack>
  )
}

export const ColumnResizing: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableColumnResizing
      withBorder
      withColumnBorders
    />
  )
}

export const AutoResizeTableWidth: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <Table
      columns={columns}
      data={data}
      enableAutoResizeTableWidth
      enableColumnResizing
      withBorder
      withColumnBorders
      tableProps={{ maxW: "full" }}
    />
  )
}

export const ColumnResizeMode: Story = () => {
  const data = useMemo<Data[]>(() => createData(), [])

  return (
    <PropsTable variant="stack" rows={["onChange", "onEnd"]}>
      {(_, row, key) => (
        <Table
          key={key}
          columnResizeMode={row}
          columns={columns}
          data={data}
          enableColumnResizing
          withBorder
          withColumnBorders
        />
      )}
    </PropsTable>
  )
}
