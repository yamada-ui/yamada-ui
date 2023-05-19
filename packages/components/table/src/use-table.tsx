import {
  ColumnDef,
  Row,
  Cell,
  RowData,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  CoreOptions,
  RowSelectionOptions,
  SortingOptions,
  Header,
  PartialKeys,
  SortingState,
  RowSelectionState,
  OnChangeFn,
} from '@tanstack/react-table'
import { Checkbox, CheckboxProps } from '@yamada-ui/checkbox'
import { ui, CSSUIObject, HTMLUIProps, ThemeProps } from '@yamada-ui/core'
import { IconProps } from '@yamada-ui/icon'
import { ThProps, TrProps, TdProps } from '@yamada-ui/native-table'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createContext, PropGetter, handlerAll, runIfFunc } from '@yamada-ui/utils'
import { CSSProperties, useCallback, useMemo } from 'react'

export { flexRender as render, createColumnHelper } from '@tanstack/react-table'
export type { SortDirection, Row, Cell } from '@tanstack/react-table'

export type TableContext = Omit<UseTableReturn, 'getTableProps'>

export const [TableProvider, useTableContext] = createContext<TableContext>({
  strict: false,
  name: 'TableContext',
})

export type ColumnStyles = {
  className?: string
  style?: CSSProperties
  sx?: CSSUIObject
  css?: CSSUIObject
}

export type Column<Y extends RowData, M = unknown> = ColumnDef<Y, M> & ColumnStyles

type SelectColumn<Y extends RowData, M = unknown> = Omit<Column<Y, M>, 'accessorKey' | 'accessorFn'>

export type ColumnSort<Y extends RowData> = {
  id: keyof Y
  desc: boolean
}

export type Sort<Y extends RowData> = ColumnSort<Y>[]

export type UseTableOptions<Y extends RowData> = PartialKeys<
  Omit<CoreOptions<Y>, 'getCoreRowModel' | 'state' | 'initialState' | 'onStateChange'>,
  'renderFallbackValue'
> &
  Omit<SortingOptions<Y>, 'getSortedRowModel' | 'onSortingChange'> &
  Omit<RowSelectionOptions<Y>, 'onRowSelectionChange'>

type TableProps = HTMLUIProps<'table'> & ThemeProps<'Table'>

type HeaderGroupProps<Y extends RowData> =
  | Omit<TrProps, 'key'>
  | ((headers: Header<Y, unknown>[]) => Omit<TrProps, 'key'> | void)
type HeaderProps<Y extends RowData> =
  | Omit<ThProps, 'key'>
  | ((header: Header<Y, unknown>) => Omit<ThProps, 'key'> | void)
type RowProps<Y extends RowData> =
  | Omit<TrProps, 'key'>
  | ((row: Row<Y>) => Omit<TrProps, 'key'> | void)
type CellProps<Y extends RowData> =
  | Omit<TdProps, 'key'>
  | ((cell: Cell<Y, unknown>) => Omit<TdProps, 'key'> | void)

export type UseTableProps<Y extends RowData> = TableProps &
  UseTableOptions<Y> & {
    rowId?: keyof Y
    sort?: Sort<Y>
    defaultSort?: Sort<Y>
    onChangeSort?: (sort: Sort<Y>) => void
    selectedRowIds?: string[]
    defaultSelectedRowIds?: string[]
    onChangeSelect?: (rowSelection: string[]) => void
    rowsClickSelect?: boolean
    onClickRow?: (row: Row<Y>) => void
    withFooterSelect?: boolean
    disabledRowIds?: string[]
    checkboxProps?: CheckboxProps
    headerGroupProps?: HeaderGroupProps<Y>
    headerProps?: HeaderProps<Y>
    footerGroupProps?: HeaderGroupProps<Y>
    footerProps?: HeaderProps<Y>
    sortIconProps?: IconProps
    rowProps?: RowProps<Y>
    cellProps?: CellProps<Y>
    selectColumn?: SelectColumn<Y>
  }

const generateRowSelection = <Y extends RowData>(
  rowSelection: string[] | undefined,
  enableRowSelection: UseTableProps<Y>['enableRowSelection'],
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

const computedEnableRowSelection = <Y extends RowData>({ id }: Row<Y>, disabledRowIds?: string[]) =>
  !disabledRowIds?.includes(id)

export const useTable = <Y extends RowData>({
  rowId,
  disabledRowIds,
  sort,
  defaultSort,
  onChangeSort,
  selectedRowIds,
  defaultSelectedRowIds,
  onChangeSelect,
  rowsClickSelect,
  onClickRow,
  withFooterSelect,
  checkboxProps,
  headerGroupProps,
  headerProps,
  footerGroupProps,
  footerProps,
  sortIconProps,
  rowProps,
  cellProps,
  selectColumn,
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
  mergeOptions,
  getSubRows,
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
  enableMultiRowSelection = (row) => computedEnableRowSelection(row, disabledRowIds),
  enableSubRowSelection = (row) => computedEnableRowSelection(row, disabledRowIds),
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

  const computedRowSelection = useMemo(
    () => generateRowSelection(rowSelection, enableRowSelection),
    [enableRowSelection, rowSelection],
  )

  const mergedColumns = useMemo(
    () =>
      enableRowSelection
        ? mergeColumns({ columns, checkboxProps, withFooterSelect, selectColumn })
        : columns,
    [checkboxProps, columns, enableRowSelection, selectColumn, withFooterSelect],
  )

  const { getHeaderGroups, getRowModel, getFooterGroups } = useReactTable<Y>({
    data,
    columns: mergedColumns,
    state: {
      sorting,
      rowSelection: computedRowSelection,
    },
    defaultColumn,
    debugAll,
    debugTable,
    debugHeaders,
    debugColumns,
    debugRows,
    autoResetAll,
    meta,
    mergeOptions,
    getSubRows,
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
    enableMultiRowSelection,
    enableSubRowSelection,
    onRowSelectionChange: (updaterOrValue) =>
      onRowSelectionChange(Object.keys(runIfFunc(updaterOrValue, computedRowSelection))),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const getTableProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ref,
    }),
    [rest],
  )

  const headerGroups = getHeaderGroups()
  const footerGroups = getFooterGroups()
  const { rows, flatRows, rowsById } = getRowModel()

  return {
    getTableProps,
    headerGroups,
    footerGroups,
    rows,
    flatRows,
    rowsById,
    enableRowSelection,
    rowsClickSelect,
    onClickRow,
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

const Center = ui('div', {
  baseStyle: {
    w: '100%',
    h: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const mergeColumns = <Y extends RowData>({
  columns,
  checkboxProps = {},
  withFooterSelect,
  selectColumn,
}: {
  columns: Column<Y>[]
  checkboxProps?: CheckboxProps
  withFooterSelect?: boolean
  selectColumn?: SelectColumn<Y>
}): Column<Y>[] => [
  {
    id: 'select',
    header: ({ table }) => {
      const { getIsAllRowsSelected, getIsSomeRowsSelected, getToggleAllRowsSelectedHandler } = table

      return (
        <Center>
          <Checkbox
            {...{ gap: 0, ...checkboxProps }}
            isChecked={getIsAllRowsSelected()}
            isIndeterminate={getIsSomeRowsSelected()}
            onChange={handlerAll(checkboxProps.onChange, getToggleAllRowsSelectedHandler())}
          />
        </Center>
      )
    },
    ...(withFooterSelect
      ? {
          footer: ({ table }) => {
            const { getIsAllRowsSelected, getIsSomeRowsSelected, getToggleAllRowsSelectedHandler } =
              table

            return (
              <Center>
                <Checkbox
                  {...{ gap: 0, ...checkboxProps }}
                  isChecked={getIsAllRowsSelected()}
                  isIndeterminate={getIsSomeRowsSelected()}
                  onChange={handlerAll(checkboxProps.onChange, getToggleAllRowsSelectedHandler())}
                />
              </Center>
            )
          },
        }
      : {}),
    cell: ({ row }) => {
      const { getIsSelected, getCanSelect, getIsSomeSelected, getToggleSelectedHandler } = row

      return (
        <Center>
          <Checkbox
            {...{ gap: 0, ...checkboxProps }}
            isChecked={getIsSelected()}
            isDisabled={!getCanSelect()}
            isIndeterminate={getIsSomeSelected()}
            onChange={handlerAll(checkboxProps.onChange, getToggleSelectedHandler())}
          />
        </Center>
      )
    },
    ...selectColumn,
  },
  ...columns,
]
