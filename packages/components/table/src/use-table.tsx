import type {
  AccessorFn,
  Cell,
  CellContext,
  ColumnDef,
  ColumnDefTemplate,
  ColumnFiltersColumnDef,
  ColumnMeta,
  ColumnPinningColumnDef,
  ColumnSizingColumnDef,
  CoreOptions,
  GlobalFilterColumnDef,
  GroupingColumnDef,
  Header,
  HeaderContext,
  OnChangeFn,
  PaginationOptions,
  PartialKeys,
  Row,
  RowData,
  RowSelectionOptions,
  SortingColumnDef,
  SortingOptions,
  SortingState,
  VisibilityColumnDef,
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
import type { StringLiteral } from "@yamada-ui/utils"
import type {
  CSSProperties,
  KeyboardEvent,
  KeyboardEventHandler,
  RefObject,
} from "react"
import type { SelectColumn } from "./table-utils"
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { runIfFunc } from "@yamada-ui/utils"
import { useCallback, useMemo, useRef, useState } from "react"
import {
  generateGroups,
  generateRowSelection,
  getEnableRowSelection,
  mergeColumns,
} from "./table-utils"
import { generateRowId } from "./table-utils"
export { createColumnHelper, flexRender as render } from "@tanstack/react-table"
export type {
  Cell,
  CellContext,
  Row,
  RowData,
  SortDirection,
} from "@tanstack/react-table"

export type CellMap = Map<string, RefObject<HTMLTableCellElement>>

interface PropsColumnDef {
  className?: string
  css?: CSSUIObject
  style?: CSSProperties
  sx?: CSSUIObject
  "aria-label"?: string
  colSpan?: number
  rowSpan?: number
}

interface GroupColumnDef<Y extends RowData, M = any> {
  columns?: Column<Y, M>[]
}

interface ColumnProps {
  referenceRef: RefObject<any>
  tabIndex: number
}

interface ColumnDefExtensions<Y extends RowData, M = any>
  extends VisibilityColumnDef,
    ColumnPinningColumnDef,
    ColumnFiltersColumnDef<Y>,
    GlobalFilterColumnDef,
    SortingColumnDef<Y>,
    GroupingColumnDef<Y, M>,
    ColumnSizingColumnDef {}

interface ColumnDefBase<Y extends RowData, M = any>
  extends ColumnDefExtensions<Y, M> {
  cell?: ColumnDefTemplate<CellContext<Y, M> & ColumnProps>
  footer?: ColumnDefTemplate<ColumnProps & HeaderContext<Y, M>>
  getUniqueValues?: AccessorFn<Y, any[]>
  meta?: ColumnMeta<Y, M>
}

interface StringHeaderIdentifier {
  header: string
  id?: string
}

interface IdIdentifier<Y extends RowData, M = any> {
  id: string
  header?: ColumnDefTemplate<ColumnProps & HeaderContext<Y, M>>
}

type ColumnIdentifiers<Y extends RowData, M = any> =
  | IdIdentifier<Y, M>
  | StringHeaderIdentifier

interface AccessorKeyColumnDefBase<Y extends RowData, M = any>
  extends ColumnDefBase<Y, M> {
  accessorKey: keyof Y | StringLiteral
  id?: string
}

type AccessorKeyColumnDef<
  Y extends RowData,
  M = any,
> = AccessorKeyColumnDefBase<Y, M> & Partial<ColumnIdentifiers<Y, M>>

interface AccessorFnColumnDefBase<Y extends RowData, M = any>
  extends ColumnDefBase<Y, M> {
  accessorFn: AccessorFn<Y, M>
}

type AccessorFnColumnDef<Y extends RowData, M = any> = AccessorFnColumnDefBase<
  Y,
  M
> &
  ColumnIdentifiers<Y, M>

type AccessorColumnDef<Y extends RowData, M = any> =
  | AccessorFnColumnDef<Y, M>
  | AccessorKeyColumnDef<Y, M>

type DisplayColumnDef<Y extends RowData, M = any> = ColumnDefBase<Y, M> &
  ColumnIdentifiers<Y, M>

export type Column<Y extends RowData, M = any> = (
  | AccessorColumnDef<Y, M>
  | DisplayColumnDef<Y, M>
) &
  GroupColumnDef<Y, M> &
  PropsColumnDef

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
  | ((headers: Header<Y, any>[]) => Omit<TrProps, "key"> | void)
  | Omit<TrProps, "key">
type HeaderProps<Y extends RowData> =
  | ((header: Header<Y, any>) => Omit<ThProps, "key"> | void)
  | Omit<ThProps, "key">
type RowProps<Y extends RowData> =
  | ((row: Row<Y>) => Omit<TrProps, "key"> | void)
  | Omit<TrProps, "key">
type CellProps<Y extends RowData> =
  | ((cell: Cell<Y, any>) => Omit<TdProps, "key"> | void)
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
   * If `true`, the table cell will be focusable.
   *
   * @default true
   */
  focusable?: boolean
  /**
   * If `true`, the table cell will be focusable.
   *
   * @default true
   *
   * @deprecated use `focusable` instead
   */
  isFocusable?: boolean
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
   * The role used for the row header.
   * This is used for accessibility to announce the selected row.
   */
  rowHeader?: keyof Y
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
   * If `true`, display the table footer.
   *
   * @default false
   */
  withFooter?: boolean
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
  enableRowSelection = (row) => getEnableRowSelection(row, disabledRowIds),
  enableSorting,
  enableSortingRemoval,
  isFocusable = true,
  focusable = isFocusable,
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
  rowHeader,
  rowsClickSelect,
  selectedRowIds,
  sort,
  sortDescFirst,
  sortingFns,
  withFooter = false,
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
  const cellMapRef = useRef<CellMap>(new Map())
  const [focusedCell, setFocusedCell] = useState<[number, number]>([0, 0])
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
            rowHeader,
            withFooterSelect,
            checkboxProps,
            selectColumnProps,
          })
        : columns,
    [
      rowHeader,
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
    getAllFlatColumns,
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
    defaultColumn: defaultColumn as Partial<ColumnDef<Y, any>>,
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
  const _headerGroups = getHeaderGroups()
  const _footerGroups = getFooterGroups()
  const flatColumns = getAllFlatColumns()
  const { flatRows, rows, rowsById } = getRowModel()
  const totalPage = getPageCount()

  const headerGroups = useMemo(
    () => generateGroups<Y>(_headerGroups),
    [_headerGroups],
  )

  const footerGroups = useMemo(
    () => generateGroups<Y>(_footerGroups, true),
    [_footerGroups],
  )

  const headerCount = headerGroups.length
  const rowCount = rows.length
  const footerCount = withFooter ? footerGroups.length : 0
  const colCount = flatColumns.length
  const maxRowCount = headerCount + rowCount + footerCount - 1
  const maxColIndex = colCount - 1

  const getOnKeyDown = useCallback(
    (rowIndex: number, colIndex: number) =>
      (ev: KeyboardEvent<HTMLTableCellElement>) => {
        const onFocusCell = (nextRowIndex: number, nextColIndex: number) => {
          const currentEl = cellMapRef.current.get(`${rowIndex}-${colIndex}`)
          const nextEl = cellMapRef.current.get(
            `${nextRowIndex}-${nextColIndex}`,
          )
          const isNotfound = !nextEl
          const isSome = currentEl === nextEl

          if (isSome || isNotfound) {
            const onKeyDown = getOnKeyDown(nextRowIndex, nextColIndex)

            onKeyDown(ev)
          } else {
            setFocusedCell([nextRowIndex, nextColIndex])

            setTimeout(() => {
              cellMapRef.current
                .get(`${nextRowIndex}-${nextColIndex}`)
                ?.current?.focus()
            })
          }
        }

        const actions: { [key: string]: KeyboardEventHandler } = {
          ArrowDown: () => {
            if (rowIndex >= maxRowCount) return

            onFocusCell(rowIndex + 1, colIndex)
          },
          ArrowLeft: () => {
            if (colIndex <= 0) return

            onFocusCell(rowIndex, colIndex - 1)
          },
          ArrowRight: () => {
            if (colIndex >= maxColIndex) return

            onFocusCell(rowIndex, colIndex + 1)
          },
          ArrowUp: () => {
            if (rowIndex <= 0) return

            onFocusCell(rowIndex - 1, colIndex)
          },
          End: () => {
            onFocusCell(rowIndex, maxColIndex)
          },
          Home: () => {
            onFocusCell(rowIndex, 0)
          },
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
    [maxColIndex, maxRowCount],
  )

  return {
    cellMapRef,
    enableRowSelection,
    flatRows,
    focusable,
    focusedCell,
    footerGroups,
    getCanNextPage,
    getCanPreviousPage,
    getOnKeyDown,
    headerGroups,
    nextPage,
    pageSizeList: computedPageSizeList,
    previousPage,
    rowHeader,
    rows,
    rowsById,
    rowsClickSelect,
    setPageIndex,
    setPageSize,
    state,
    totalPage,
    withFooter,
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

export type UseTableReturn<Y extends RowData> = ReturnType<typeof useTable<Y>>
