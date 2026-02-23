"use client"

import type {
  AccessorFn,
  Cell,
  CellContext,
  ColumnDef,
  ColumnDefTemplate,
  ColumnFiltersColumnDef,
  ColumnFiltersState,
  ColumnMeta,
  ColumnPinningColumnDef,
  ColumnSizingColumnDef,
  GlobalFilterColumnDef,
  GroupingColumnDef,
  Header,
  HeaderContext,
  HeaderGroup,
  OnChangeFn,
  SortingState as OriginalSortingState,
  PaginationState,
  Table as ReactTable,
  Row,
  RowData,
  RowSelectionState,
  SortDirection,
  SortingColumnDef,
  TableOptions,
  VisibilityColumnDef,
} from "@tanstack/react-table"
import type { FC, FocusEvent, KeyboardEvent, ReactElement } from "react"
import type { CSSProps, GenericsComponent, HTMLStyledProps } from "../../core"
import type { ReactNodeOrFunction, TransformProps } from "../../utils"
import type { CheckboxProps } from "../checkbox"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo, useRef } from "react"
import { createComponent, focusRingStyle, mergeProps, styled } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  dataAttr,
  isFunction,
  runIfFn,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"
import { Checkbox } from "../checkbox"
import { ChevronsUpDownIcon, ChevronUpIcon } from "../icon"
import { NativeTable } from "../native-table"

declare module "@tanstack/react-table" {
  interface ColumnDefExtensions<TData extends RowData, TValue = unknown>
    extends
      VisibilityColumnDef,
      ColumnPinningColumnDef,
      ColumnFiltersColumnDef<TData>,
      GlobalFilterColumnDef,
      SortingColumnDef<TData>,
      GroupingColumnDef<TData, TValue>,
      ColumnSizingColumnDef {}

  interface ColumnDefBase<TData extends RowData, TValue = unknown>
    extends
      ColumnDefExtensions<TData, TValue>,
      Pick<CSSProps, "lineClamp" | "truncated">,
      Pick<NativeTable.TdProps, "numeric"> {
    cell?: ColumnDefTemplate<CellContext<TData, TValue>>
    footer?: ColumnDefTemplate<HeaderContext<TData, TValue>>
    getUniqueValues?: AccessorFn<TData, unknown[]>
    meta?: ColumnMeta<TData, TValue>
    cellProps?: NativeTable.TdProps
    footerProps?: NativeTable.ThProps
    headerProps?: NativeTable.ThProps
  }
}

export { createColumnHelper }
export type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  SortDirection,
}

function getMergeHeaderGroups(
  headerGroups: HeaderGroup<any>[],
): HeaderGroup<any>[] {
  if (headerGroups.length <= 1) return headerGroups

  const columnsIds = new Set()

  return headerGroups.map((headerGroup, depth, { length: fullDepth }) => {
    return {
      ...headerGroup,
      headers: headerGroup.headers
        .filter((header) => !columnsIds.has(header.column.id))
        .map((header) => {
          columnsIds.add(header.column.id)

          return header.isPlaceholder
            ? { ...header, isPlaceholder: false, rowSpan: fullDepth - depth }
            : { ...header, rowSpan: 1 }
        }),
    }
  })
}

function getMergeFooterGroups(
  headerGroups: HeaderGroup<any>[],
): HeaderGroup<any>[] {
  if (headerGroups.length <= 1) return headerGroups

  return headerGroups.map((headerGroup, depth) => {
    const nextHeaderGroups = headerGroups.slice(depth + 1)

    return {
      ...headerGroup,
      headers: headerGroup.headers
        .filter((header) => !header.isPlaceholder)
        .map((header) => {
          if (nextHeaderGroups.length === 0) return header

          const rowSpan = nextHeaderGroups.reduce((acc, nextHeaderGroup) => {
            const hasNextHeader = nextHeaderGroup.headers.some(
              (nextHeader) => nextHeader.column.id === header.column.id,
            )

            return acc + (hasNextHeader ? 1 : 0)
          }, 1)

          return { ...header, rowSpan }
        }),
    }
  })
}

export interface ColumnSort<Y extends RowData> {
  id: keyof Y
  desc: boolean
}
export type SortingState<Y extends RowData> = ColumnSort<Y>[]

interface ComponentContext extends Pick<
  TableProps<any>,
  | "columnResizeMode"
  | "resizableTriggerProps"
  | "sortingIcon"
  | "sortingIconProps"
> {
  table: ReactTable<any>
}

interface OmittedTableOptions<Y extends RowData> extends Omit<
  TableOptions<Y>,
  | "getCoreRowModel"
  | "onColumnFiltersChange"
  | "onPaginationChange"
  | "onSortingChange"
> {}

interface PickedNativeTableProps extends Pick<
  NativeTable.RootProps,
  | "highlightOnHover"
  | "highlightOnSelected"
  | "layout"
  | "scrollAreaProps"
  | "size"
  | "stickyFooter"
  | "stickyHeader"
  | "striped"
  | "variant"
  | "withBorder"
  | "withColumnBorders"
  | "withScrollArea"
> {}

export interface TableProps<Y extends RowData>
  extends
    OmittedTableOptions<Y>,
    PickedNativeTableProps,
    Pick<CSSProps, "colorScheme" | "lineClamp" | "truncated"> {
  /**
   * The column filters state of the table.
   */
  columnFilters?: ColumnFiltersState
  /**
   * The default column filters state of the table.
   */
  defaultColumnFilters?: ColumnFiltersState
  /**
   * The default pagination state of the table.
   */
  defaultPagination?: PaginationState
  /**
   * The default row selection state of the table.
   */
  defaultRowSelection?: RowSelectionState
  /**
   * The default sorting state of the table.
   */
  defaultSorting?: SortingState<Y>
  /**
   * If `true`, the table width will be automatically resized to the content.
   *
   * @default false
   */
  enableAutoResizeTableWidth?: boolean
  /**
   * If `true`, the keyboard navigation will be enabled.
   *
   * @default true
   */
  enableKeyboardNavigation?: boolean
  /**
   * If `true`, the pagination will be enabled.
   *
   * @default false
   */
  enablePagination?: boolean
  /**
   * The footer of the table.
   */
  footer?: ReactNodeOrFunction<ReactTable<Y>>
  /**
   * The header of the table.
   */
  header?: ReactNodeOrFunction<ReactTable<Y>>
  /**
   * The initial focusable cell of the table.
   *
   * @default {rowIndex: 0, colIndex: 0}
   */
  initialFocusableCell?: { colIndex: number; rowIndex: number }
  /**
   * The pagination state of the table.
   */
  pagination?: PaginationState
  /**
   * The row selection state of the table.
   */
  rowSelection?: RowSelectionState
  /**
   * If `true`, the row will be selected when the row is clicked.
   *
   * @default false
   */
  selectOnClickRow?: boolean
  /**
   * The sorting state of the table.
   */
  sorting?: SortingState<Y>
  /**
   * The sorting icon of the table.
   */
  sortingIcon?: ReactNodeOrFunction<false | SortDirection>
  /**
   * If `true`, the table will have a checkbox column.
   *
   * @default true
   */
  withCheckbox?: boolean
  /**
   * If `true`, the table will have a checkbox in the footer.
   *
   * @default false
   */
  withFooterCheckbox?: boolean
  /**
   * If `true`, the table will have footer groups.
   *
   * @default false
   */
  withFooterGroups?: boolean
  /**
   * The props for the table cell.
   */
  cellProps?: TransformProps<NativeTable.TdProps, Cell<Y, unknown>>
  /**
   * The props for the checkbox.
   */
  checkboxProps?: CheckboxProps
  /**
   * The props for the table footer group.
   */
  footerGroupProps?: TransformProps<NativeTable.TrProps, HeaderGroup<Y>>
  /**
   * The props for the table footer.
   */
  footerProps?: TransformProps<NativeTable.ThProps, Header<Y, unknown>>
  /**
   * The props for the table header checkbox.
   */
  headerCheckboxProps?: TransformProps<CheckboxProps, Header<Y, unknown>>
  /**
   * The props for the table header group.
   */
  headerGroupProps?: TransformProps<NativeTable.TrProps, HeaderGroup<Y>>
  /**
   * The props for the table header.
   */
  headerProps?: TransformProps<NativeTable.ThProps, Header<Y, unknown>>
  /**
   * The props for the resizable trigger.
   */
  resizableTriggerProps?: TransformProps<
    Omit<ResizableTriggerProps, "resizing">,
    Header<Y, unknown>
  >
  /**
   * The props for the table row checkbox.
   */
  rowCheckboxProps?: TransformProps<CheckboxProps, Row<Y>>
  /**
   * The props for the table row.
   */
  rowProps?: TransformProps<NativeTable.TrProps, Row<Y>>
  /**
   * The props for the sorting icon.
   */
  sortingIconProps?: TransformProps<
    Omit<SortingIconProps, "sorted">,
    Header<Y, unknown>
  >
  /**
   * The props for the table.
   */
  tableProps?: NativeTable.RootProps
  /**
   * The props for the table tbody.
   */
  tbodyProps?: NativeTable.TbodyProps
  /**
   * The props for the table tfoot.
   */
  tfootProps?: NativeTable.TfootProps
  /**
   * The props for the table thead.
   */
  theadProps?: NativeTable.TheadProps
  /**
   * The callback invoked when the column filters state changes.
   */
  onColumnFiltersChange?: (columnFilters: ColumnFiltersState) => void
  /**
   * The callback invoked when the pagination state changes.
   */
  onPaginationChange?: (pagination: PaginationState) => void
  /**
   * The callback invoked when the row is clicked.
   */
  onRowClick?: (row: Row<Y>) => void
  /**
   * The callback invoked when the row is double clicked.
   */
  onRowDoubleClick?: (row: Row<Y>) => void
  /**
   * The callback invoked when the sorting state changes.
   */
  onSortingChange?: (sorting: SortingState<Y>) => void
}

const {
  ComponentContext,
  PropsContext: TablePropsContext,
  useComponentContext,
  usePropsContext: useTablePropsContext,
  withContext,
} = createComponent<TableProps<any>, any, ComponentContext>("table")

export { TablePropsContext, useTablePropsContext }

/**
 * `Table` is a table component equipped with column sorting, row selection, and click event features.
 *
 * @see https://yamada-ui.com/docs/components/table
 */
export const Table = withContext(
  <Y extends RowData>({
    colorScheme,
    size,
    variant,
    columnFilters: columnFiltersProp,
    columnResizeMode = "onChange",
    columns: columnsProp,
    data,
    defaultColumnFilters,
    defaultPagination = { pageIndex: 0, pageSize: 20 },
    defaultRowSelection = {},
    defaultSorting,
    enableAutoResizeTableWidth = false,
    enableColumnResizing = false,
    enableKeyboardNavigation = true,
    enablePagination = false,
    enableRowSelection = false,
    footer,
    header,
    highlightOnHover = !!enableRowSelection,
    highlightOnSelected = !!enableRowSelection,
    initialFocusableCell = { colIndex: 0, rowIndex: 0 },
    layout,
    lineClamp,
    manualPagination,
    pagination: paginationProp,
    rowCount: totalRowCount,
    rowSelection: rowSelectionProp,
    selectOnClickRow = false,
    sortDescFirst = false,
    sorting: sortingProp,
    sortingIcon,
    state,
    stickyFooter,
    stickyHeader,
    striped,
    truncated,
    withBorder,
    withCheckbox = true,
    withColumnBorders,
    withFooterCheckbox = false,
    withFooterGroups = false,
    withScrollArea,
    cellProps,
    checkboxProps,
    footerGroupProps,
    footerProps,
    headerCheckboxProps,
    headerGroupProps,
    headerProps,
    resizableTriggerProps,
    rowCheckboxProps,
    rowProps,
    scrollAreaProps,
    sortingIconProps,
    tableProps,
    tbodyProps,
    tfootProps,
    theadProps,
    onColumnFiltersChange: onColumnFiltersChangeProp,
    onPaginationChange: onPaginationChangeProp,
    onRowClick,
    onRowDoubleClick,
    onRowSelectionChange: onRowSelectionChangeProp,
    onSortingChange: onSortingChangeProp,
    ...rest
  }: TableProps<Y>) => {
    const { t } = useI18n("table")
    const initialFocus = useRef<boolean>(false)
    const ref = useRef<HTMLTableElement>(null)
    const focusedCell = useRef<null | { colIndex: number; rowIndex: number }>(
      null,
    )
    const [rowSelection, onRowSelectionChange] = useControllableState({
      defaultValue: defaultRowSelection,
      value: rowSelectionProp,
      onChange: onRowSelectionChangeProp,
    })
    const [sorting, onSortingChange] = useControllableState({
      defaultValue: defaultSorting,
      value: sortingProp,
      onChange: onSortingChangeProp,
    })
    const [pagination, onPaginationChange] = useControllableState({
      defaultValue: defaultPagination,
      value: paginationProp,
      onChange: onPaginationChangeProp,
    })
    const [columnFilters, onColumnFiltersChange] = useControllableState({
      defaultValue: defaultColumnFilters,
      value: columnFiltersProp,
      onChange: onColumnFiltersChangeProp,
    })
    const columns = useMemo(() => {
      if (!enableRowSelection || !withCheckbox) return columnsProp

      const clonedColumns = [...columnsProp]

      const header = ({ header, table }: HeaderContext<Y, any>) => {
        return (
          <Checkbox
            {...mergeProps(
              {
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                indicatorProps: { outline: "none" },
                inputProps: {
                  "aria-label": t("Select all rows"),
                  "data-focusable": "",
                  tabIndex: -1,
                },
                onChange: table.getToggleAllRowsSelectedHandler(),
              },
              checkboxProps ?? {},
              runIfFn(headerCheckboxProps, header) ?? {},
            )()}
          />
        )
      }

      const cell = ({ row }: CellContext<Y, any>) => {
        return (
          <Checkbox
            {...mergeProps(
              {
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                indicatorProps: { outline: "none" },
                inputProps: {
                  "aria-label": t("Select row"),
                  "data-focusable": "",
                  tabIndex: -1,
                },
                onChange: row.getToggleSelectedHandler(),
              },
              checkboxProps ?? {},
              runIfFn(rowCheckboxProps, row) ?? {},
            )()}
          />
        )
      }

      clonedColumns.unshift({
        id: "select",
        cell,
        header,
        ...(withFooterCheckbox
          ? { footer: header }
          : { footerProps: { "aria-hidden": "true" } }),
        cellProps: { verticalAlign: "middle" },
        headerProps: { w: "calc({spaces.4} + {space-x} * 2)" },
      })

      return clonedColumns
    }, [
      checkboxProps,
      columnsProp,
      enableRowSelection,
      headerCheckboxProps,
      rowCheckboxProps,
      t,
      withCheckbox,
      withFooterCheckbox,
    ])
    const table = useReactTable<Y>({
      columnResizeMode,
      columns,
      data,
      enableColumnResizing,
      enableRowSelection,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      manualPagination,
      rowCount: totalRowCount,
      sortDescFirst,
      state: {
        columnFilters,
        pagination: enablePagination ? pagination : undefined,
        rowSelection,
        sorting: sorting as OriginalSortingState,
        ...state,
      },
      onColumnFiltersChange,
      onPaginationChange,
      onRowSelectionChange,
      onSortingChange: onSortingChange as OnChangeFn<OriginalSortingState>,
      ...(enablePagination
        ? { getPaginationRowModel: getPaginationRowModel() }
        : {}),
      ...rest,
    })
    const headerGroups = table.getHeaderGroups()
    const mergedHeaderGroups = getMergeHeaderGroups(headerGroups)
    const rows = table.getRowModel().rows
    const footerGroups = table.getFooterGroups()
    const mergedFooterGroups = getMergeFooterGroups(
      withFooterGroups ? footerGroups : [],
    )
    const headerGroupCount = headerGroups.length
    const rowCount = rows.length
    const colCount = table.getAllLeafColumns().length
    const maxColIndex = colCount - 1
    const pageIndex = enablePagination
      ? table.getState().pagination.pageIndex
      : 0
    const cellMap = useMemo(() => {
      const cellMap = new Map<string, string>()

      if (!enableKeyboardNavigation) return cellMap

      const insertCellMap = (
        id: string,
        colSpan: number,
        rowSpan: number,
        colIndex: number,
        rowIndex: number,
      ) => {
        for (let i = 0; i < colSpan; i++) {
          cellMap.set(`${colIndex + i}-${rowIndex}`, `${colIndex}-${rowIndex}`)
        }

        for (let i = 1; i < rowSpan; i++) {
          cellMap.set(`${colIndex}-${rowIndex + i}`, `${colIndex}-${rowIndex}`)
        }
      }

      const insertCellMapByHeaderGroup = (
        headerGroup: HeaderGroup<Y>,
        rowIndex: number,
      ) => {
        let placeholderCount = 0

        headerGroup.headers.forEach((header) => {
          const colSpan = header.colSpan || 1
          const rowSpan = header.rowSpan || 1
          const colIndex = header.index + placeholderCount

          placeholderCount += colSpan - 1

          insertCellMap(header.id, colSpan, rowSpan, colIndex, rowIndex)
        })
      }

      mergedHeaderGroups.forEach((headerGroup, rowIndex) => {
        insertCellMapByHeaderGroup(headerGroup, rowIndex)
      })

      rows.forEach((row, rowIndex) => {
        rowIndex += headerGroupCount

        row.getVisibleCells().forEach((cell) => {
          const colIndex = cell.column.getIndex()

          insertCellMap(cell.id, 1, 1, colIndex, rowIndex)
        })
      })

      mergedFooterGroups.forEach((footerGroup, rowIndex) => {
        rowIndex += headerGroupCount + rowCount

        insertCellMapByHeaderGroup(footerGroup, rowIndex)
      })

      return cellMap
    }, [
      enableKeyboardNavigation,
      headerGroupCount,
      mergedFooterGroups,
      mergedHeaderGroups,
      rows,
      rowCount,
    ])
    const context = useMemo(
      () => ({
        columnResizeMode,
        sortingIcon,
        table,
        resizableTriggerProps,
        sortingIconProps,
      }),
      [
        columnResizeMode,
        sortingIcon,
        sortingIconProps,
        resizableTriggerProps,
        table,
      ],
    )
    const getCell = (
      evOrEl:
        | Element
        | FocusEvent<HTMLTableElement>
        | KeyboardEvent<HTMLTableElement>
        | null
        | undefined,
    ) => {
      if (!evOrEl) return

      const el =
        evOrEl instanceof HTMLElement
          ? evOrEl.closest("th, td")
          : "target" in evOrEl && evOrEl.target instanceof HTMLElement
            ? evOrEl.target.closest("th, td")
            : null

      if (!(el instanceof HTMLTableCellElement)) return

      const { colindex, rowindex } = el.dataset
      const { colSpan, rowSpan } = el

      if (!colindex || !rowindex) return

      const colIndex = parseInt(colindex)
      const rowIndex = parseInt(rowindex)

      return { colIndex, colSpan, el, rowIndex, rowSpan }
    }
    const getShouldFocusCell = (colIndex: number, rowIndex: number) => {
      const [trulyColIndex, trulyRowIndex] =
        cellMap.get(`${colIndex}-${rowIndex}`)?.split("-") ?? []

      if (!trulyColIndex || !trulyRowIndex) return

      const targetEl = ref.current?.querySelector(
        `[data-colindex="${trulyColIndex}"][data-rowindex="${trulyRowIndex}"]`,
      )

      if (!targetEl || !(targetEl instanceof HTMLTableCellElement)) return

      return targetEl
    }
    const removeTabIndex = (el: Element | null | undefined) => {
      if (!el || !(el instanceof HTMLElement)) return

      el.tabIndex = -1
      el.querySelectorAll("[data-focusable]").forEach((el) => {
        if (el instanceof HTMLElement) el.tabIndex = -1
      })
    }
    const onCellFocus = (
      el: HTMLTableCellElement | null | undefined,
      colIndex: number,
      rowIndex: number,
    ) => {
      const targetEl = getShouldFocusCell(colIndex, rowIndex)

      if (!targetEl) return

      focusedCell.current = { colIndex, rowIndex }

      removeTabIndex(el)

      const shouldFocusEl =
        targetEl.querySelector("[data-focusable]") ?? targetEl

      if (shouldFocusEl instanceof HTMLElement) {
        shouldFocusEl.tabIndex = 0
        shouldFocusEl.focus()
      }
    }
    const onFocus = (ev: FocusEvent<HTMLTableElement>) => {
      if (initialFocus.current) return

      initialFocus.current = true

      const cell = getCell(ev)

      if (!cell) return

      onCellFocus(cell.el, cell.colIndex, cell.rowIndex)
    }
    const onKeyDown = (ev: KeyboardEvent<HTMLTableElement>) => {
      if (!enableKeyboardNavigation) return

      const cell = getCell(ev)

      if (!cell) return

      runKeyAction(ev, {
        ArrowDown: () =>
          onCellFocus(cell.el, cell.colIndex, cell.rowIndex + cell.rowSpan),
        ArrowLeft: () => onCellFocus(cell.el, cell.colIndex - 1, cell.rowIndex),
        ArrowRight: () =>
          onCellFocus(cell.el, cell.colIndex + cell.colSpan, cell.rowIndex),
        ArrowUp: () => onCellFocus(cell.el, cell.colIndex, cell.rowIndex - 1),
        End: () => onCellFocus(cell.el, maxColIndex, cell.rowIndex),
        Home: () => onCellFocus(cell.el, 0, cell.rowIndex),
        ...(enablePagination
          ? {
              PageDown: () => {
                if (!table.getCanNextPage()) return

                table.setPageIndex(pageIndex + 1)
              },
              PageUp: () => {
                if (!table.getCanPreviousPage()) return

                table.setPageIndex(pageIndex - 1)
              },
            }
          : {}),
      })
    }
    const getTabIndex = (colIndex: number, rowIndex: number) => {
      if (!enableKeyboardNavigation) return undefined

      return colIndex === initialFocusableCell.colIndex &&
        rowIndex === initialFocusableCell.rowIndex
        ? 0
        : undefined
    }

    useUpdateEffect(() => {
      if (!enableKeyboardNavigation) return

      const { colIndex, rowIndex } = focusedCell.current ?? initialFocusableCell
      const targetEl = getShouldFocusCell(colIndex, rowIndex)

      if (targetEl) targetEl.tabIndex = 0
    }, [pageIndex, enableKeyboardNavigation])

    return (
      <ComponentContext value={context}>
        {header ? runIfFn(header, table) : null}

        <NativeTable.Root
          {...mergeProps(
            {
              ref,
              style:
                enableColumnResizing && enableAutoResizeTableWidth
                  ? { width: table.getCenterTotalSize() }
                  : {},
              colorScheme,
              size,
              variant,
              "aria-colcount": colCount,
              "aria-multiselectable": enableRowSelection ? "true" : undefined,
              "aria-rowcount": totalRowCount || data.length,
              highlightOnHover,
              highlightOnSelected,
              layout,
              role: "grid",
              stickyFooter,
              stickyHeader,
              striped,
              withBorder,
              withColumnBorders,
              withScrollArea,
              scrollAreaProps,
              onFocus,
              onKeyDown,
            },
            tableProps ?? {},
          )()}
        >
          <NativeTable.Thead role="rowgroup" {...theadProps}>
            {mergedHeaderGroups.map((headerGroup, rowIndex) => {
              let placeholderCount = 0

              return (
                <NativeTable.Tr
                  key={headerGroup.id}
                  aria-rowindex={rowIndex + 1}
                  role="row"
                  {...runIfFn(headerGroupProps, headerGroup)}
                >
                  {headerGroup.headers.map((header) => {
                    const { columnDef } = header.column
                    const colIndex = header.index + placeholderCount
                    const tabIndex = getTabIndex(colIndex, rowIndex)
                    const canSort = header.column.getCanSort()
                    const sorted = header.column.getIsSorted()
                    const canResize = header.column.getCanResize()
                    const resizing = header.column.getIsResizing()
                    const children = header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )

                    placeholderCount += (header.colSpan || 1) - 1

                    return (
                      <NativeTable.Th
                        key={header.id}
                        aria-colindex={colIndex + 1}
                        aria-rowindex={rowIndex + 1}
                        aria-sort={
                          sorted
                            ? sorted === "asc"
                              ? "ascending"
                              : "descending"
                            : "none"
                        }
                        data-colindex={colIndex}
                        data-rowindex={rowIndex}
                        colSpan={header.colSpan || undefined}
                        numeric={columnDef.numeric}
                        pe={
                          canSort
                            ? "calc((1rem * {lineHeights.moderate}) + {space-x})"
                            : undefined
                        }
                        position="relative"
                        role="columnheader"
                        rowSpan={header.rowSpan || undefined}
                        tabIndex={tabIndex}
                        {...mergeProps(
                          {
                            css: {
                              "&:has([data-focusable]:focus-visible)":
                                focusRingStyle.outline,
                            },
                            style: enableColumnResizing
                              ? { width: header.getSize() }
                              : {},
                          },
                          runIfFn(headerProps, header) ?? {},
                          columnDef.headerProps ?? {},
                        )()}
                      >
                        <TruncatedText
                          lineClamp={columnDef.lineClamp ?? lineClamp}
                          truncated={columnDef.truncated ?? truncated}
                        >
                          {children}
                        </TruncatedText>

                        {canSort ? (
                          <SortingIcon
                            sorted={sorted}
                            onClick={header.column.getToggleSortingHandler()}
                          />
                        ) : null}

                        {canResize ? (
                          <ResizableTrigger
                            resizing={resizing}
                            onDoubleClick={header.column.resetSize}
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                          />
                        ) : null}
                      </NativeTable.Th>
                    )
                  })}
                </NativeTable.Tr>
              )
            })}
          </NativeTable.Thead>

          <NativeTable.Tbody role="rowgroup" {...tbodyProps}>
            {rows.map((row, rowIndex) => {
              rowIndex += headerGroupCount

              const selected = !!rowSelection[row.id]
              const disabled =
                isFunction(enableRowSelection) && !enableRowSelection(row)

              return (
                <NativeTable.Tr
                  id={row.id}
                  key={row.id}
                  aria-disabled={ariaAttr(disabled)}
                  aria-rowindex={rowIndex + 1}
                  aria-selected={ariaAttr(selected)}
                  data-disabled={dataAttr(disabled)}
                  data-selected={dataAttr(selected)}
                  role="row"
                  {...mergeProps(
                    {
                      onClick:
                        !disabled && selectOnClickRow
                          ? () => row.toggleSelected(!selected)
                          : undefined,
                    },
                    {
                      onClick: !disabled ? () => onRowClick?.(row) : undefined,
                      onDoubleClick: !disabled
                        ? () => onRowDoubleClick?.(row)
                        : undefined,
                    },
                    runIfFn(rowProps, row) ?? {},
                  )()}
                >
                  {row.getVisibleCells().map((cell) => {
                    const { columnDef } = cell.column
                    const colIndex = cell.column.getIndex()
                    const tabIndex = getTabIndex(colIndex, rowIndex)
                    const children = flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )

                    return (
                      <NativeTable.Td
                        key={cell.id}
                        aria-colindex={colIndex + 1}
                        aria-rowindex={rowIndex + 1}
                        data-colindex={colIndex}
                        data-rowindex={rowIndex}
                        numeric={columnDef.numeric}
                        role="gridcell"
                        tabIndex={tabIndex}
                        {...mergeProps(
                          {
                            css: {
                              "&:has([data-focusable]:focus-visible)":
                                focusRingStyle.outline,
                            },
                          },
                          runIfFn(cellProps, cell) ?? {},
                          columnDef.cellProps ?? {},
                        )()}
                      >
                        <TruncatedText
                          lineClamp={columnDef.lineClamp ?? lineClamp}
                          truncated={columnDef.truncated ?? truncated}
                        >
                          {children}
                        </TruncatedText>
                      </NativeTable.Td>
                    )
                  })}
                </NativeTable.Tr>
              )
            })}
          </NativeTable.Tbody>

          {withFooterGroups ? (
            <NativeTable.Tfoot role="rowgroup" {...tfootProps}>
              {mergedFooterGroups.map((footerGroup, rowIndex) => {
                rowIndex += headerGroupCount + rowCount

                let placeholderCount = 0

                return (
                  <NativeTable.Tr
                    key={footerGroup.id}
                    aria-rowindex={rowIndex + 1}
                    role="row"
                    {...runIfFn(footerGroupProps, footerGroup)}
                  >
                    {footerGroup.headers.map((header) => {
                      const { columnDef } = header.column
                      const colIndex = header.index + placeholderCount
                      const tabIndex = getTabIndex(colIndex, rowIndex)
                      const children = header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )

                      placeholderCount += (header.colSpan || 1) - 1

                      return (
                        <NativeTable.Td
                          key={header.id}
                          aria-colindex={colIndex + 1}
                          aria-rowindex={rowIndex + 1}
                          data-colindex={colIndex}
                          data-rowindex={rowIndex}
                          colSpan={header.colSpan || undefined}
                          numeric={columnDef.numeric}
                          role="gridcell"
                          rowSpan={header.rowSpan || undefined}
                          tabIndex={tabIndex}
                          {...mergeProps(
                            {
                              css: {
                                "&:has([data-focusable]:focus-visible)":
                                  focusRingStyle.outline,
                              },
                            },
                            runIfFn(footerProps, header) ?? {},
                            columnDef.footerProps ?? {},
                          )()}
                        >
                          <TruncatedText
                            lineClamp={columnDef.lineClamp ?? lineClamp}
                            truncated={columnDef.truncated ?? truncated}
                          >
                            {children}
                          </TruncatedText>
                        </NativeTable.Td>
                      )
                    })}
                  </NativeTable.Tr>
                )
              })}
            </NativeTable.Tfoot>
          ) : null}
        </NativeTable.Root>

        {footer ? runIfFn(footer, table) : null}
      </ComponentContext>
    )
  },
)() as GenericsComponent<{
  <Y extends RowData>(props: TableProps<Y>): ReactElement
}>

interface SortingIconProps extends HTMLStyledProps<"button"> {
  sorted: false | SortDirection
}

const SortingIcon: FC<SortingIconProps> = ({ sorted, ...rest }) => {
  const { t } = useI18n("table")
  const { sortingIcon, sortingIconProps = {} } = useComponentContext()
  const Icon = sorted ? ChevronUpIcon : ChevronsUpDownIcon

  return (
    <styled.button
      type="button"
      layerStyle="ghost"
      colorScheme="mono"
      aria-label={t(
        sorted
          ? sorted === "desc"
            ? "Sort descending"
            : "Sort ascending"
          : "Clear sorting",
      )}
      data-focusable
      aspectRatio="1"
      cursor="pointer"
      display="center"
      focusVisibleRing="none"
      h="calc(1em * {lineHeights.moderate})"
      position="absolute"
      right="{space-x}"
      rounded="l1"
      tabIndex={-1}
      top="50%"
      transform="translateY(-50%)"
      transitionDuration="moderate"
      transitionProperty="common"
      _hover={{ layerStyle: "ghost.hover" }}
      {...mergeProps(rest, sortingIconProps)()}
    >
      {runIfFn(sortingIcon, sorted) ?? (
        <Icon transform={`rotate(${sorted === "desc" ? 180 : 0}deg)`} />
      )}
    </styled.button>
  )
}

interface ResizableTriggerProps extends HTMLStyledProps {
  resizing: boolean
}

const ResizableTrigger: FC<ResizableTriggerProps> = ({ resizing, ...rest }) => {
  const {
    columnResizeMode,
    table,
    resizableTriggerProps = {},
  } = useComponentContext()
  const offset = table.getState().columnSizingInfo.deltaOffset

  return (
    <styled.div
      data-active={dataAttr(resizing)}
      bg="colorScheme.solid"
      cursor="col-resize"
      insetY="0"
      opacity={{ base: "0", _hover: "1", _active: "1" }}
      position="absolute"
      right="0"
      touchAction="none"
      transform={`translateX(${columnResizeMode === "onEnd" && resizing && offset ? `${offset}px` : "50%"})`}
      userSelect="none"
      w="1"
      {...mergeProps(rest, resizableTriggerProps)()}
    />
  )
}

interface TruncatedTextProps extends HTMLStyledProps<"span"> {}

const TruncatedText: FC<TruncatedTextProps> = ({
  children,
  lineClamp,
  truncated,
  ...rest
}) => {
  if (lineClamp || truncated) {
    return (
      <styled.span
        lineClamp={lineClamp}
        truncated={truncated}
        wordBreak="break-all"
        {...rest}
      >
        {children}
      </styled.span>
    )
  } else {
    return children
  }
}
