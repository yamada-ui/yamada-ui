import { CheckboxProps } from '@yamada-ui/checkbox'
import { HTMLUIProps, ThemeProps } from '@yamada-ui/core'
import { createContext, Dict, PropGetter, useUpdateEffect, assignRef } from '@yamada-ui/utils'
import { ForwardedRef, useCallback, useMemo } from 'react'
import {
  useTable as useReactTable,
  useSortBy,
  useRowSelect,
  Column as TableColumn,
  TableInstance as ReactTableInstance,
  UseSortByOptions,
  UseSortByInstanceProps,
  UseTableInstanceProps,
  UseTableOptions as UseReactTableOptions,
  UseSortByColumnOptions,
  UseSortByState,
  TableState as ReactTableState,
  UseRowSelectState,
  UseRowSelectOptions,
  UseRowSelectInstanceProps,
  Row as ReactTableRow,
  UseRowSelectRowProps,
  ActionType,
  Meta,
} from 'react-table'
import { useRegisterCheckbox } from './use-register-checkbox'

export type TableContext = Omit<UseTableReturn, 'getTableProps'>

export const [TableProvider, useTableContext] = createContext<TableContext>({
  strict: false,
  name: 'TableContext',
})

export type Column<Y extends Dict = Dict> = ReadonlyArray<
  TableColumn<Y> & UseSortByColumnOptions<Y>
>

export type Row<Y extends Dict = Dict> = ReactTableRow<Y> & UseRowSelectRowProps<Y>

export type SortBy<Y extends Dict = Dict> = UseSortByState<Y>['sortBy']

type SelectedRowIds<Y extends Dict = Dict> = UseRowSelectState<Y>['selectedRowIds']

export type TableState<Y extends Dict = Dict> = ReactTableState<Y> &
  UseSortByState<Y> &
  UseRowSelectState<Y>

export type TableInstance<Y extends Dict = Dict> = ReactTableInstance<Y> &
  UseTableInstanceProps<Y> &
  UseSortByInstanceProps<Y> &
  UseRowSelectInstanceProps<Y> & { state: TableState<Y> }

export type ToggleSortBy<Y extends Dict = Dict> = TableInstance<Y>['toggleSortBy']
export type SetSortBy<Y extends Dict = Dict> = TableInstance<Y>['setSortBy']
export type ToggleRowSelected<Y extends Dict = Dict> = TableInstance<Y>['toggleRowSelected']
export type ToggleAllRowsSelected<Y extends Dict = Dict> = TableInstance<Y>['toggleAllRowsSelected']

type UseTableOptions<Y extends Dict = Dict> = Omit<
  UseReactTableOptions<Y>,
  'stateReducer' | 'useControlledState'
> &
  UseSortByOptions<Y> &
  UseRowSelectOptions<Y> & {
    stateReducer?: (
      newState: TableState<Y>,
      action: ActionType,
      previousState: TableState<Y>,
      instance?: TableInstance<Y>,
    ) => TableState<Y>
    useControlledState?: (state: TableState<Y>, meta: Meta<Y>) => TableState<Y>
  }

type TableProps = HTMLUIProps<'table'> & ThemeProps<'Table'>

export type UseTableProps<Y extends Dict = Dict> = TableProps &
  Omit<UseTableOptions<Y>, 'initialState'> & {
    columns: Column<Y>
    data: Y[]
    defaultSortBy?: SortBy<Y>
    onChangeSortBy?: (sortBy: SortBy<Y>) => void
    generatingRowIdFromAccessor?: keyof Y
    defaultSelectedRowIds?: string[]
    disabledRowIds?: string[]
    rowsClickSelect?: boolean
    onChangeSelect?: (selectedRows: string[]) => void
    onClickRow?: (row: Row<Y>) => void
    checkboxProps?: CheckboxProps
    toggleSortByRef: ForwardedRef<ToggleSortBy>
    setSortByRef: ForwardedRef<SetSortBy>
    toggleRowSelectedRef: ForwardedRef<ToggleRowSelected>
    toggleAllRowsSelectedRef: ForwardedRef<ToggleAllRowsSelected>
  }

export const useTable = <Y extends Dict = Dict>({
  columns = [],
  data = [],
  autoResetHiddenColumns,
  stateReducer,
  useControlledState,
  getSubRows,
  generatingRowIdFromAccessor,
  getRowId = generatingRowIdFromAccessor
    ? (row) => row[generatingRowIdFromAccessor].toString()
    : undefined,
  defaultColumn,
  defaultSortBy = [],
  manualSortBy,
  disableSortBy,
  defaultCanSort = false,
  disableMultiSort,
  isMultiSortEvent,
  maxMultiSortColCount,
  disableSortRemove,
  disabledMultiRemove,
  orderByFn,
  autoResetSortBy = true,
  onChangeSortBy,
  defaultSelectedRowIds,
  disabledRowIds,
  rowsClickSelect = false,
  manualRowSelectedKey = 'isSelected',
  autoResetSelectedRows = true,
  selectSubRows,
  onChangeSelect,
  onClickRow,
  checkboxProps,
  toggleSortByRef,
  setSortByRef,
  toggleRowSelectedRef,
  toggleAllRowsSelectedRef,
  ...rest
}: UseTableProps<Y>) => {
  const computedDefaultSelectedRowIds: SelectedRowIds = useMemo(() => {
    if (defaultSelectedRowIds) {
      return defaultSelectedRowIds.reduce<SelectedRowIds>(
        (prev, id) => ({ ...prev, [id.toString()]: true }),
        {},
      )
    } else {
      return {}
    }
  }, [defaultSelectedRowIds])

  const {
    getTableProps: getReactTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    toggleSortBy,
    setSortBy,
    toggleRowSelected,
    toggleAllRowsSelected,
    state: { sortBy, selectedRowIds },
  } = useReactTable<Y>(
    {
      columns,
      data,
      autoResetHiddenColumns,
      stateReducer: (newState: TableState<Y>, action: ActionType, prevState: TableState<Y>) => {
        if (disabledRowIds)
          disabledRowIds.forEach((id) => {
            delete newState.selectedRowIds[id]
          })

        if (stateReducer) newState = stateReducer(newState, action, prevState)

        return newState
      },
      useControlledState,
      getSubRows,
      getRowId,
      defaultColumn,
      initialState: {
        sortBy: defaultSortBy,
        selectedRowIds: computedDefaultSelectedRowIds,
      },
      manualSortBy,
      disableSortBy,
      defaultCanSort,
      disableMultiSort,
      isMultiSortEvent,
      maxMultiSortColCount,
      disableSortRemove,
      disabledMultiRemove,
      orderByFn,
      autoResetSortBy,
      manualRowSelectedKey,
      autoResetSelectedRows,
      selectSubRows,
    } as Omit<UseTableOptions<Y>, 'stateReducer' | 'useControlledState'>,
    useSortBy,
    useRowSelect,
    (hooks) => useRegisterCheckbox<Y>({ hooks, checkboxProps, disabledRowIds }),
  ) as TableInstance<Y>

  assignRef(toggleSortByRef, toggleSortBy)
  assignRef(setSortByRef, setSortBy)
  assignRef(toggleRowSelectedRef, toggleRowSelected)
  assignRef(toggleAllRowsSelectedRef, toggleAllRowsSelected)

  useUpdateEffect(() => {
    onChangeSortBy?.(sortBy)
  }, [sortBy])

  useUpdateEffect(() => {
    const selectedRows = Object.keys(selectedRowIds)

    onChangeSelect?.(selectedRows)
  }, [selectedRowIds])

  const getTableProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ...getReactTableProps(),
      ref,
    }),
    [getReactTableProps, rest],
  )

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    onClickRow,
    rowsClickSelect,
    disabledRowIds,
  }
}

export type UseTableReturn = ReturnType<typeof useTable>
