import type {
  AccessorColumnDef,
  Cell,
  ColumnDef,
  CoreOptions,
  DisplayColumnDef,
  Header,
  HeaderContext,
  OnChangeFn,
  PaginationOptions,
  PartialKeys,
  Row,
  RowData,
  RowSelectionOptions,
  RowSelectionState,
  SortingOptions,
  SortingState,
} from "@tanstack/react-table"
import type { CheckboxProps } from "@yamada-ui/checkbox"
import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { TdProps, ThProps, TrProps } from "@yamada-ui/native-table"
import type { CSSProperties } from "react"
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@yamada-ui/checkbox"
import { ui } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  ariaAttr,
  createContext,
  handlerAll,
  runIfFunc,
} from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"

export { createColumnHelper, flexRender as render } from "@tanstack/react-table"
export type {
  Cell,
  CellContext,
  Row,
  RowData,
  SortDirection,
} from "@tanstack/react-table"

export type TableContext = Omit<UseTableReturn, "getTableProps">

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  errorMessage: `useTableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Table />"`,
})

export interface PropsColumnDef {
  className?: string
  css?: CSSUIObject
  style?: CSSProperties
  sx?: CSSUIObject
  "aria-label"?: string
  colSpan?: number
  rowSpan?: number
}

export interface GroupColumnDef<Y extends RowData, M = any> {
  columns?: Column<Y, M>[]
}

export type Column<Y extends RowData, M = any> = (
  | AccessorColumnDef<Y, M>
  | DisplayColumnDef<Y, M>
) &
  GroupColumnDef<Y, M> &
  PropsColumnDef

export type InternalColumn<Y extends RowData, M = any> = {
  "aria-hidden"?: boolean
} & Column<Y, M>

interface SelectColumn<Y extends RowData, M = any>
  extends Omit<Column<Y, M>, "accessorFn" | "accessorKey"> {}

export interface ColumnSort<Y extends RowData> {
  id: keyof Y
  desc: boolean
}

export type Sort<Y extends RowData> = ColumnSort<Y>[]

export interface UseTableOptions<Y extends RowData>
  extends PartialKeys<
      Omit<
        CoreOptions<Y>,
        | "columns"
        | "defaultColumn"
        | "getCoreRowModel"
        | "getSubRows"
        | "initialState"
        | "mergeOptions"
        | "onStateChange"
        | "state"
      >,
      "renderFallbackValue"
    >,
    Omit<SortingOptions<Y>, "getSortedRowModel" | "onSortingChange">,
    Omit<
      RowSelectionOptions<Y>,
      | "enableMultiRowSelection"
      | "enableSubRowSelection"
      | "onRowSelectionChange"
    >,
    Omit<PaginationOptions, "getPaginationRowModel" | "onPaginationChange"> {}

interface TableProps
  extends Omit<HTMLUIProps<"table">, "columns">,
    ThemeProps<"Table"> {}

type HeaderGroupProps<Y extends RowData> =
  | ((headers: Header<Y, unknown>[]) => Omit<TrProps, "key"> | void)
  | Omit<TrProps, "key">
type HeaderProps<Y extends RowData> =
  | ((header: Header<Y, unknown>) => Omit<ThProps, "key"> | void)
  | Omit<ThProps, "key">
type RowProps<Y extends RowData> =
  | ((row: Row<Y>) => Omit<TrProps, "key"> | void)
  | Omit<TrProps, "key">
type CellProps<Y extends RowData> =
  | ((cell: Cell<Y, unknown>) => Omit<TdProps, "key"> | void)
  | Omit<TdProps, "key">

export interface UseTableProps<Y extends RowData>
  extends TableProps,
    UseTableOptions<Y> {
  /**
   * The array of column defs to use for the table.
   */
  columns: Column<Y>[]
  /**
   * Default column options to use for all column defs supplied to the table.
   */
  defaultColumn?: Partial<Column<Y>>
  /**
   * The initial page index of the paging table.
   *
   * @default 0
   */
  defaultPageIndex?: number
  /**
   * The initial page size of the paging table.
   *
   * @default 20
   */
  defaultPageSize?: number
  /**
   * The initial ids of the selected row.
   */
  defaultSelectedRowIds?: string[]
  /**
   * The initial sort of the table.
   */
  defaultSort?: Sort<Y>
  /**
   * The ids that disabled in selection.
   */
  disabledRowIds?: string[]
  /**
   * If `true`, enables pagination.
   *
   * @default false
   */
  enablePagination?: boolean
  /**
   * The page index of the paging table.
   */
  pageIndex?: number
  /**
   * The page size of the paging table.
   */
  pageSize?: number
  /**
   * The list of the page size.
   *
   * @default '[20, 50, 100]'
   */
  pageSizeList?: number[]
  /**
   * The id used to store the value when selected.
   */
  rowId?: keyof Y
  /**
   * If `true`, allows selection by clicking on a row.
   *
   * @default false
   */
  rowsClickSelect?: boolean
  /**
   * The ids of the selected row.
   */
  selectedRowIds?: string[]
  /**
   * The sort of the table.
   */
  sort?: Sort<Y>
  /**
   * If `true`, display the checkbox in table footer.
   *
   * @default false
   */
  withFooterSelect?: boolean
  /**
   * Props for table cell component.
   */
  cellProps?: CellProps<Y>
  /**
   * Props for table checkbox element.
   */
  checkboxProps?: CheckboxProps
  /**
   * Props for table footer group component.
   */
  footerGroupProps?: HeaderGroupProps<Y>
  /**
   * Props for table footer component.
   */
  footerProps?: HeaderProps<Y>
  /**
   * Props for table header group component.
   */
  headerGroupProps?: HeaderGroupProps<Y>
  /**
   * Props for table header component.
   */
  headerProps?: HeaderProps<Y>
  /**
   * Props for table row component.
   */
  rowProps?: RowProps<Y>
  /**
   * Props for table select column component.
   */
  selectColumnProps?: false | SelectColumn<Y>
  /**
   * Props for table sort icon element.
   */
  sortIconProps?: IconProps
  /**
   * The callback invoked when page index is changed.
   */
  onChangePageIndex?: (pageIndex: number) => void
  /**
   * The callback invoked when page size is changed.
   */
  onChangePageSize?: (pageIndex: number) => void
  /**
   * The callback invoked when row is selected.
   */
  onChangeSelect?: (rowSelection: string[]) => void
  /**
   * The callback invoked when table sort is changed.
   */
  onChangeSort?: (sort: Sort<Y>) => void
  /**
   * The callback invoked when a row is clicked.
   */
  onClickRow?: (row: Row<Y>) => void
  /**
   * The callback invoked when a row is double clicked.
   */
  onDoubleClickRow?: (row: Row<Y>) => void
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
  autoResetAll,
  autoResetPageIndex,
  columns,
  data,
  debugAll,
  debugColumns,
  debugHeaders,
  debugRows,
  debugTable,
  defaultColumn,
  defaultPageIndex = 0,
  defaultPageSize = 20,
  defaultSelectedRowIds,
  defaultSort,
  disabledRowIds,
  enableMultiRemove,
  enableMultiSort,
  enablePagination = false,
  enableRowSelection = (row) => computedEnableRowSelection(row, disabledRowIds),
  enableSorting,
  enableSortingRemoval,
  rowId,
  getRowId = generateRowId(rowId),
  isMultiSortEvent,
  manualPagination,
  manualSorting,
  maxMultiSortColCount,
  meta,
  pageCount,
  pageIndex,
  pageSize,
  pageSizeList = [20, 50, 100],
  renderFallbackValue,
  rowsClickSelect,
  selectedRowIds,
  sort,
  sortDescFirst,
  sortingFns,
  withFooterSelect,
  cellProps,
  checkboxProps,
  footerGroupProps,
  footerProps,
  headerGroupProps,
  headerProps,
  rowProps,
  selectColumnProps,
  sortIconProps,
  onChangePageIndex,
  onChangePageSize,
  onChangeSelect,
  onChangeSort,
  onClickRow,
  onDoubleClickRow,
  ...rest
}: UseTableProps<Y>) => {
  const [sorting, onSortingChange] = useControllableState({
    defaultValue: defaultSort,
    value: sort,
    onChange: onChangeSort,
  }) as unknown as [SortingState, OnChangeFn<SortingState>]

  const [rowSelection, onRowSelectionChange] = useControllableState({
    defaultValue: defaultSelectedRowIds,
    value: selectedRowIds,
    onChange: onChangeSelect,
  })

  const [internalPageIndex, setInternalPageIndex] = useControllableState({
    defaultValue: defaultPageIndex,
    value: pageIndex,
    onChange: onChangePageIndex,
  })

  const [internalPageSize, setInternalPageSize] = useControllableState({
    defaultValue: defaultPageSize,
    value: pageSize,
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
            columns,
            disabledRowIds,
            enablePagination,
            withFooterSelect,
            checkboxProps,
            selectColumnProps,
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
    getCanNextPage,
    getCanPreviousPage,
    getFooterGroups,
    getHeaderGroups,
    getPageCount,
    getRowModel,
    getState,
    nextPage,
    previousPage,
    setPageIndex,
    setPageSize,
  } = useReactTable<Y>({
    autoResetAll,
    columns: mergedColumns as ColumnDef<Y, any>[],
    data,
    debugAll,
    debugColumns,
    debugHeaders,
    debugRows,
    debugTable,
    defaultColumn,
    enableMultiRemove,
    enableMultiSort,
    enableSorting,
    enableSortingRemoval,
    getRowId,
    manualSorting,
    maxMultiSortColCount,
    meta,
    renderFallbackValue,
    sortDescFirst,
    sortingFns,
    state: {
      rowSelection: computedRowSelection,
      sorting,
      ...(enablePagination ? { pagination } : {}),
    },
    onSortingChange,
    ...(isMultiSortEvent ? { isMultiSortEvent } : {}),
    enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: (updaterOrValue) =>
      onRowSelectionChange(
        Object.keys(runIfFunc(updaterOrValue, computedRowSelection)),
      ),
    ...(enablePagination
      ? {
          autoResetPageIndex,
          getPaginationRowModel: getPaginationRowModel(),
          manualPagination,
          pageCount,
          onPaginationChange: (updaterOrValue) => {
            const { pageIndex, pageSize } = runIfFunc(
              updaterOrValue,
              pagination,
            )

            setInternalPageIndex(pageIndex)
            setInternalPageSize(pageSize)
          },
        }
      : {}),
  })

  const getTableProps: PropGetter<"table"> = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      "aria-colcount": columns.length,
      "aria-rowcount": data.length,
      ...props,
      ref,
    }),
    [rest, columns, data],
  )

  const state = getState()
  const headerGroups = getHeaderGroups()
  const footerGroups = getFooterGroups()
  const { flatRows, rows, rowsById } = getRowModel()
  const totalPage = getPageCount()

  return {
    enableRowSelection,
    flatRows,
    footerGroups,
    getCanNextPage,
    getCanPreviousPage,
    headerGroups,
    nextPage,
    pageSizeList: computedPageSizeList,
    previousPage,
    rows,
    rowsById,
    rowsClickSelect,
    setPageIndex,
    setPageSize,
    state,
    totalPage,
    cellProps,
    footerGroupProps,
    footerProps,
    getTableProps,
    headerGroupProps,
    headerProps,
    rowProps,
    sortIconProps,
    onClickRow,
    onDoubleClickRow,
  }
}

export type UseTableReturn = ReturnType<typeof useTable>

const Center = ui("div", {
  baseStyle: {
    alignItems: "center",
    display: "flex",
    h: "100%",
    justifyContent: "center",
    w: "100%",
  },
})

const TotalCheckbox = <Y extends RowData>({
  disabledRowIds = [],
  enablePagination,
  table,
  checkboxProps,
}: {
  enablePagination: boolean
  table: HeaderContext<Y, unknown>["table"]
  checkboxProps: CheckboxProps
  disabledRowIds?: string[]
}) => {
  const {
    getIsAllPageRowsSelected,
    getIsAllRowsSelected,
    getIsSomePageRowsSelected,
    getIsSomeRowsSelected,
    getRowModel,
    getState,
    getToggleAllPageRowsSelectedHandler,
    getToggleAllRowsSelectedHandler,
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
        inputProps={{ "aria-label": "Select all row" }}
        {...{ gap: 0, ...checkboxProps }}
        isChecked={isAllChecked || isChecked}
        {...(!isAllChecked ? { isIndeterminate } : {})}
        onChange={handlerAll(checkboxProps.onChange, onChange)}
      />
    </Center>
  )
}

export const mergeColumns = <Y extends RowData>({
  columns,
  disabledRowIds,
  enablePagination,
  withFooterSelect,
  checkboxProps = {},
  selectColumnProps,
}: {
  columns: Column<Y>[]
  enablePagination: boolean
  disabledRowIds?: string[]
  withFooterSelect?: boolean
  checkboxProps?: CheckboxProps
  selectColumnProps?: SelectColumn<Y>
}): InternalColumn<Y>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <TotalCheckbox
        {...{ disabledRowIds, enablePagination, table, checkboxProps }}
      />
    ),
    ...(withFooterSelect
      ? {
          footer: ({ table }) => (
            <TotalCheckbox
              {...{ disabledRowIds, enablePagination, table, checkboxProps }}
            />
          ),
        }
      : {}),
    "aria-hidden": ariaAttr(!withFooterSelect),
    cell: ({ row }) => {
      const { getCanSelect, getIsSelected, getToggleSelectedHandler } = row

      return (
        <Center>
          <Checkbox
            inputProps={{ "aria-label": "Select row" }}
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
