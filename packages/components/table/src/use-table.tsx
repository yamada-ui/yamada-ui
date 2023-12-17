import type {
  ColumnDef,
  Row,
  Cell,
  RowData,
  CoreOptions,
  RowSelectionOptions,
  SortingOptions,
  Header,
  PartialKeys,
  SortingState,
  RowSelectionState,
  OnChangeFn,
  PaginationOptions,
  HeaderContext,
  DisplayColumnDef,
  AccessorColumnDef,
} from "@tanstack/react-table"
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table"
import type { CheckboxProps } from "@yamada-ui/checkbox"
import { Checkbox } from "@yamada-ui/checkbox"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { ThProps, TrProps, TdProps } from "@yamada-ui/native-table"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { PropGetter } from "@yamada-ui/utils"
import { createContext, handlerAll, runIfFunc } from "@yamada-ui/utils"
import type { CSSProperties } from "react"
import { useCallback, useMemo } from "react"

export { flexRender as render, createColumnHelper } from "@tanstack/react-table"
export type {
  SortDirection,
  Row,
  Cell,
  CellContext,
  RowData,
} from "@tanstack/react-table"

export type TableContext = Omit<UseTableReturn, "getTableProps">

export const [TableProvider, useTableContext] = createContext<TableContext>({
  strict: false,
  name: "TableContext",
})

export type PropsColumnDef = {
  className?: string
  style?: CSSProperties
  sx?: CSSUIObject
  css?: CSSUIObject
  colSpan?: number
  rowSpan?: number
}

export type GroupColumnDef<Y extends RowData, M = any> = {
  columns?: Column<Y, M>[]
}

export type Column<Y extends RowData, M = any> = (
  | DisplayColumnDef<Y, M>
  | AccessorColumnDef<Y, M>
) &
  GroupColumnDef<Y, M> &
  PropsColumnDef

type SelectColumn<Y extends RowData, M = any> = Omit<
  Column<Y, M>,
  "accessorKey" | "accessorFn"
>

export type ColumnSort<Y extends RowData> = {
  id: keyof Y
  desc: boolean
}

export type Sort<Y extends RowData> = ColumnSort<Y>[]

export type UseTableOptions<Y extends RowData> = PartialKeys<
  Omit<
    CoreOptions<Y>,
    | "columns"
    | "defaultColumn"
    | "getCoreRowModel"
    | "state"
    | "initialState"
    | "onStateChange"
    | "getSubRows"
    | "mergeOptions"
  >,
  "renderFallbackValue"
> &
  Omit<SortingOptions<Y>, "getSortedRowModel" | "onSortingChange"> &
  Omit<
    RowSelectionOptions<Y>,
    "enableMultiRowSelection" | "enableSubRowSelection" | "onRowSelectionChange"
  > &
  Omit<PaginationOptions, "getPaginationRowModel" | "onPaginationChange">

type TableProps = Omit<HTMLUIProps<"table">, "columns"> & ThemeProps<"Table">

type HeaderGroupProps<Y extends RowData> =
  | Omit<TrProps, "key">
  | ((headers: Header<Y, unknown>[]) => Omit<TrProps, "key"> | void)
type HeaderProps<Y extends RowData> =
  | Omit<ThProps, "key">
  | ((header: Header<Y, unknown>) => Omit<ThProps, "key"> | void)
type RowProps<Y extends RowData> =
  | Omit<TrProps, "key">
  | ((row: Row<Y>) => Omit<TrProps, "key"> | void)
type CellProps<Y extends RowData> =
  | Omit<TdProps, "key">
  | ((cell: Cell<Y, unknown>) => Omit<TdProps, "key"> | void)

export type UseTableProps<Y extends RowData> = TableProps &
  UseTableOptions<Y> & {
    /**
     * The array of column defs to use for the table.
     */
    columns: Column<Y, any>[]
    /**
     * Default column options to use for all column defs supplied to the table.
     */
    defaultColumn?: Partial<Column<Y, any>>
    /**
     * The id used to store the value when selected.
     */
    rowId?: keyof Y
    /**
     * The sort of the table.
     */
    sort?: Sort<Y>
    /**
     * The initial sort of the table.
     */
    defaultSort?: Sort<Y>
    /**
     * The callback invoked when table sort is changed.
     */
    onChangeSort?: (sort: Sort<Y>) => void
    /**
     * The ids of the selected row.
     */
    selectedRowIds?: string[]
    /**
     * The initial ids of the selected row.
     */
    defaultSelectedRowIds?: string[]
    /**
     * The callback invoked when row is selected.
     */
    onChangeSelect?: (rowSelection: string[]) => void
    /**
     * The page index of the paging table.
     */
    pageIndex?: number
    /**
     * The initial page index of the paging table.
     *
     * @default 0
     */
    defaultPageIndex?: number
    /**
     * The callback invoked when page index is changed.
     */
    onChangePageIndex?: (pageIndex: number) => void
    /**
     * The page size of the paging table.
     */
    pageSize?: number
    /**
     * The initial page size of the paging table.
     *
     * @default 20
     */
    defaultPageSize?: number
    /**
     * The callback invoked when page size is changed.
     */
    onChangePageSize?: (pageIndex: number) => void
    /**
     * If `true`, allows selection by clicking on a row.
     *
     * @default false
     */
    rowsClickSelect?: boolean
    /**
     * The callback invoked when a row is clicked.
     */
    onClickRow?: (row: Row<Y>) => void
    /**
     * If `true`, display the checkbox in table footer.
     *
     * @default false
     */
    withFooterSelect?: boolean
    /**
     * The ids that disabled in selection.
     */
    disabledRowIds?: string[]
    /**
     * The list of the page size.
     *
     * @default '[20, 50, 100]'
     */
    pageSizeList?: number[]
    /**
     * Props for table checkbox element.
     */
    checkboxProps?: CheckboxProps
    /**
     * Props for table header group component.
     */
    headerGroupProps?: HeaderGroupProps<Y>
    /**
     * Props for table header component.
     */
    headerProps?: HeaderProps<Y>
    /**
     * Props for table footer group component.
     */
    footerGroupProps?: HeaderGroupProps<Y>
    /**
     * Props for table footer component.
     */
    footerProps?: HeaderProps<Y>
    /**
     * Props for table sort icon element.
     */
    sortIconProps?: IconProps
    /**
     * Props for table row component.
     */
    rowProps?: RowProps<Y>
    /**
     * Props for table cell component.
     */
    cellProps?: CellProps<Y>
    /**
     * Props for table select column component.
     */
    selectColumnProps?: SelectColumn<Y> | false
    /**
     * If `true`, enables pagination.
     *
     * @default false
     */
    enablePagination?: boolean
  }

const generateRowSelection = <Y extends RowData>(
  rowSelection: string[] | undefined,
  enableRowSelection: UseTableProps<Y>["enableRowSelection"],
): RowSelectionState => {
  if (!enableRowSelection) return {}

  if (rowSelection) {
    return rowSelection.reduce<RowSelectionState>(
      (prev, id) => ({ ...prev, [String(id)]: true }),
      {},
    )
  } else {
    return {}
  }
}

const generateRowId = <Y extends RowData>(key: keyof Y | undefined) =>
  key ? (row: Y) => String(row[key]) : undefined

const computedEnableRowSelection = <Y extends RowData>(
  { id }: Row<Y>,
  disabledRowIds?: string[],
) => !disabledRowIds?.includes(id)

export const useTable = <Y extends RowData>({
  rowId,
  disabledRowIds,
  sort,
  defaultSort,
  onChangeSort,
  selectedRowIds,
  defaultSelectedRowIds,
  onChangeSelect,
  pageIndex,
  defaultPageIndex = 0,
  onChangePageIndex,
  pageSize,
  defaultPageSize = 20,
  onChangePageSize,
  rowsClickSelect,
  onClickRow,
  withFooterSelect,
  pageSizeList = [20, 50, 100],
  checkboxProps,
  headerGroupProps,
  headerProps,
  footerGroupProps,
  footerProps,
  sortIconProps,
  rowProps,
  cellProps,
  selectColumnProps,
  data,
  columns,
  defaultColumn,
  debugAll,
  debugTable,
  debugHeaders,
  debugColumns,
  debugRows,
  autoResetAll,
  meta,
  getRowId = generateRowId(rowId),
  renderFallbackValue,
  manualSorting,
  enableSorting,
  enableSortingRemoval,
  enableMultiRemove,
  enableMultiSort,
  sortDescFirst,
  maxMultiSortColCount,
  isMultiSortEvent,
  sortingFns,
  enableRowSelection = (row) => computedEnableRowSelection(row, disabledRowIds),
  pageCount,
  manualPagination,
  autoResetPageIndex,
  enablePagination = false,
  ...rest
}: UseTableProps<Y>) => {
  const [sorting, onSortingChange] = useControllableState({
    value: sort,
    defaultValue: defaultSort,
    onChange: onChangeSort,
  }) as unknown as [SortingState, OnChangeFn<SortingState>]

  const [rowSelection, onRowSelectionChange] = useControllableState({
    value: selectedRowIds,
    defaultValue: defaultSelectedRowIds,
    onChange: onChangeSelect,
  })

  const [internalPageIndex, setInternalPageIndex] = useControllableState({
    value: pageIndex,
    defaultValue: defaultPageIndex,
    onChange: onChangePageIndex,
  })

  const [internalPageSize, setInternalPageSize] = useControllableState({
    value: pageSize,
    defaultValue: defaultPageSize,
    onChange: onChangePageSize,
  })

  const computedPageSizeList = useMemo(() => {
    if (!enablePagination) return []

    let mergedPageSizeList = pageSizeList

    if (internalPageSize && !mergedPageSizeList.includes(internalPageSize))
      mergedPageSizeList.push(internalPageSize)

    mergedPageSizeList = mergedPageSizeList.sort((a, b) => a - b)

    return mergedPageSizeList
  }, [enablePagination, internalPageSize, pageSizeList])

  const computedRowSelection = useMemo(
    () => generateRowSelection(rowSelection, enableRowSelection),
    [enableRowSelection, rowSelection],
  )

  const mergedColumns = useMemo(
    () =>
      enableRowSelection && selectColumnProps !== false
        ? mergeColumns<Y>({
            enablePagination,
            columns,
            checkboxProps,
            withFooterSelect,
            selectColumnProps,
            disabledRowIds,
          })
        : columns,
    [
      checkboxProps,
      columns,
      disabledRowIds,
      enablePagination,
      enableRowSelection,
      selectColumnProps,
      withFooterSelect,
    ],
  )

  const pagination = useMemo(
    () => ({ pageIndex: internalPageIndex, pageSize: internalPageSize }),
    [internalPageIndex, internalPageSize],
  )

  const {
    getHeaderGroups,
    getRowModel,
    getFooterGroups,
    getState,
    setPageIndex,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    setPageSize,
    getPageCount,
  } = useReactTable<Y>({
    data,
    columns: mergedColumns as ColumnDef<Y, any>[],
    state: {
      sorting,
      rowSelection: computedRowSelection,
      ...(enablePagination ? { pagination } : {}),
    },
    defaultColumn,
    debugAll,
    debugTable,
    debugHeaders,
    debugColumns,
    debugRows,
    autoResetAll,
    meta,
    getRowId,
    renderFallbackValue,
    manualSorting,
    onSortingChange,
    enableSorting,
    enableSortingRemoval,
    enableMultiRemove,
    enableMultiSort,
    sortDescFirst,
    maxMultiSortColCount,
    sortingFns,
    ...(isMultiSortEvent ? { isMultiSortEvent } : {}),
    enableRowSelection,
    onRowSelectionChange: (updaterOrValue) =>
      onRowSelectionChange(
        Object.keys(runIfFunc(updaterOrValue, computedRowSelection)),
      ),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(enablePagination
      ? {
          pageCount,
          manualPagination,
          autoResetPageIndex,
          onPaginationChange: (updaterOrValue) => {
            const { pageIndex, pageSize } = runIfFunc(
              updaterOrValue,
              pagination,
            )

            setInternalPageIndex(pageIndex)
            setInternalPageSize(pageSize)
          },
          getPaginationRowModel: getPaginationRowModel(),
        }
      : {}),
  })

  const getTableProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ref,
    }),
    [rest],
  )

  const state = getState()
  const headerGroups = getHeaderGroups()
  const footerGroups = getFooterGroups()
  const { rows, flatRows, rowsById } = getRowModel()
  const totalPage = getPageCount()

  return {
    state,
    getTableProps,
    headerGroups,
    footerGroups,
    rows,
    flatRows,
    rowsById,
    enableRowSelection,
    rowsClickSelect,
    onClickRow,
    setPageIndex,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    setPageSize,
    totalPage,
    pageSizeList: computedPageSizeList,
    headerGroupProps,
    headerProps,
    footerGroupProps,
    footerProps,
    sortIconProps,
    rowProps,
    cellProps,
  }
}

export type UseTableReturn = ReturnType<typeof useTable>

const Center = ui("div", {
  baseStyle: {
    w: "100%",
    h: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})

const TotalCheckbox = <Y extends RowData>({
  table,
  checkboxProps,
  enablePagination,
  disabledRowIds = [],
}: {
  table: HeaderContext<Y, unknown>["table"]
  checkboxProps: CheckboxProps
  enablePagination: boolean
  disabledRowIds?: string[]
}) => {
  const {
    getState,
    getRowModel,
    getIsAllRowsSelected,
    getIsSomeRowsSelected,
    getToggleAllRowsSelectedHandler,
    getIsAllPageRowsSelected,
    getIsSomePageRowsSelected,
    getToggleAllPageRowsSelectedHandler,
  } = table

  const state = getState()
  const { rows } = getRowModel()
  const rowIds = rows.map(({ id }) => id)
  const selectedRowIds = Object.keys(state.rowSelection)
  const unselectedRowIds = rowIds.filter((id) => !selectedRowIds.includes(id))

  const isAllChecked = unselectedRowIds.every((id) =>
    disabledRowIds.includes(id),
  )
  const isChecked = !enablePagination
    ? getIsAllRowsSelected()
    : getIsAllPageRowsSelected()
  const isIndeterminate = !enablePagination
    ? getIsSomeRowsSelected()
    : getIsSomePageRowsSelected()
  const onChange = !enablePagination
    ? getToggleAllRowsSelectedHandler()
    : getToggleAllPageRowsSelectedHandler()

  return (
    <Center>
      <Checkbox
        {...{ gap: 0, ...checkboxProps }}
        isChecked={isAllChecked || isChecked}
        {...(!isAllChecked ? { isIndeterminate } : {})}
        onChange={handlerAll(checkboxProps.onChange, onChange)}
      />
    </Center>
  )
}

export const mergeColumns = <Y extends RowData>({
  enablePagination,
  columns,
  checkboxProps = {},
  withFooterSelect,
  selectColumnProps,
  disabledRowIds,
}: {
  enablePagination: boolean
  columns: Column<Y>[]
  checkboxProps?: CheckboxProps
  withFooterSelect?: boolean
  selectColumnProps?: SelectColumn<Y>
  disabledRowIds?: string[]
}): Column<Y>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <TotalCheckbox
        {...{ table, checkboxProps, enablePagination, disabledRowIds }}
      />
    ),
    ...(withFooterSelect
      ? {
          footer: ({ table }) => (
            <TotalCheckbox
              {...{ table, checkboxProps, enablePagination, disabledRowIds }}
            />
          ),
        }
      : {}),
    cell: ({ row }) => {
      const { getIsSelected, getCanSelect, getToggleSelectedHandler } = row

      return (
        <Center>
          <Checkbox
            {...{ gap: 0, ...checkboxProps }}
            isChecked={getIsSelected()}
            isDisabled={!getCanSelect()}
            onChange={handlerAll(
              checkboxProps.onChange,
              getToggleSelectedHandler(),
            )}
          />
        </Center>
      )
    },
    ...selectColumnProps,
    css: { w: "0", ...selectColumnProps?.css },
  },
  ...columns,
]
