import { CheckboxProps } from '@yamada-ui/checkbox'
import { CSSUIObject, HTMLUIProps, ThemeProps } from '@yamada-ui/core'
import { createContext, PropGetter, useUpdateEffect, assignRef, noop } from '@yamada-ui/utils'
import { CSSProperties, ForwardedRef, useCallback, useMemo } from 'react'
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
  UseTableColumnOptions,
  PluginHook,
} from 'react-table'
import { useRegisterCheckbox } from './use-register-checkbox'

export type TableContext = Omit<UseTableReturn, 'getTableProps'>

export const [TableProvider, useTableContext] = createContext<TableContext>({
  strict: false,
  name: 'TableContext',
})

type ColumnStyles = {
  className?: string
  style?: CSSProperties
  sx?: CSSUIObject
  css?: CSSUIObject
}

export type Column<Y extends object = {}> = Omit<TableColumn<Y>, 'columns'> &
  UseSortByColumnOptions<Y> &
  ColumnStyles & {
    columns?: Column<Y>[]
  }

export type SelectColumn<Y extends object = {}> = Pick<
  UseTableColumnOptions<Y>,
  'width' | 'minWidth' | 'maxWidth'
> &
  ColumnStyles

export type Row<Y extends object = {}> = ReactTableRow<Y> & UseRowSelectRowProps<Y>

export type SortBy<Y extends object = {}> = UseSortByState<Y>['sortBy']

type SelectedRowIds<Y extends object = {}> = UseRowSelectState<Y>['selectedRowIds']

export type TableState<Y extends object = {}> = ReactTableState<Y> &
  UseSortByState<Y> &
  UseRowSelectState<Y>

export type TableInstance<Y extends object = {}> = ReactTableInstance<Y> &
  UseTableInstanceProps<Y> &
  UseSortByInstanceProps<Y> &
  UseRowSelectInstanceProps<Y> & { state: TableState<Y> }

export type ToggleSortBy<Y extends object = {}> = TableInstance<Y>['toggleSortBy']
export type SetSortBy<Y extends object = {}> = TableInstance<Y>['setSortBy']
export type ToggleRowSelected<Y extends object = {}> = TableInstance<Y>['toggleRowSelected']
export type ToggleAllRowsSelected<Y extends object = {}> = TableInstance<Y>['toggleAllRowsSelected']

type UseTableOptions<Y extends object = {}> = Omit<
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

export type UseTableProps<Y extends object = {}> = TableProps &
  Omit<UseTableOptions<Y>, 'initialState' | 'columns' | 'data'> & {
    columns: Column<Y>[]
    data: Y[]
    defaultSortBy?: SortBy<Y>
    onChangeSortBy?: (sortBy: SortBy<Y>) => void
    generatingRowIdFromAccessor?: keyof Y
    defaultSelectedRowIds?: string[]
    disabledRowIds?: string[]
    rowsClickSelect?: boolean
    onChangeSelect?: (selectedIds: string[]) => void
    onClickRow?: (row: Row<Y>) => void
    checkboxProps?: CheckboxProps
    selectColumnProps?: SelectColumn
    disableSelect?: boolean
    withFooterSelect?: boolean
    toggleSortByRef?: ForwardedRef<ToggleSortBy>
    setSortByRef?: ForwardedRef<SetSortBy>
    toggleRowSelectedRef?: ForwardedRef<ToggleRowSelected>
    toggleAllRowsSelectedRef?: ForwardedRef<ToggleAllRowsSelected>
  }

export const useTable = <Y extends object = {}>({
  columns = [],
  data = [],
  autoResetHiddenColumns,
  stateReducer,
  useControlledState,
  getSubRows,
  generatingRowIdFromAccessor,
  getRowId = generatingRowIdFromAccessor
    ? (row) => String(row[generatingRowIdFromAccessor])
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
  disableSelect,
  withFooterSelect,
  defaultSelectedRowIds,
  disabledRowIds,
  rowsClickSelect = false,
  manualRowSelectedKey = 'isSelected',
  autoResetSelectedRows = true,
  selectSubRows,
  onChangeSelect,
  onClickRow,
  checkboxProps,
  selectColumnProps,
  toggleSortByRef,
  setSortByRef,
  toggleRowSelectedRef,
  toggleAllRowsSelectedRef,
  ...rest
}: UseTableProps<Y>) => {
  if (disableSelect) rowsClickSelect = false

  const computedDefaultSelectedRowIds: SelectedRowIds = useMemo(() => {
    if (disableSelect) return {}

    if (defaultSelectedRowIds) {
      return defaultSelectedRowIds.reduce<SelectedRowIds>(
        (prev, id) => ({ ...prev, [id.toString()]: true }),
        {},
      )
    } else {
      return {}
    }
  }, [defaultSelectedRowIds, disableSelect])

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
    ...(!disableSelect
      ? ([
          useRowSelect,
          (hooks) =>
            useRegisterCheckbox<Y>({
              hooks,
              checkboxProps,
              disabledRowIds,
              selectColumnProps,
              withFooterSelect,
            }),
        ] as PluginHook<Y>[])
      : []),
  ) as TableInstance<Y>

  assignRef(toggleSortByRef, !disableSortBy ? toggleSortBy : noop)
  assignRef(setSortByRef, !disableSortBy ? setSortBy : noop)
  assignRef(toggleRowSelectedRef, !disableSelect ? toggleRowSelected : noop)
  assignRef(toggleAllRowsSelectedRef, !disableSelect ? toggleAllRowsSelected : noop)

  useUpdateEffect(() => {
    if (disableSortBy) return

    onChangeSortBy?.(sortBy)
  }, [sortBy])

  useUpdateEffect(() => {
    if (disableSelect) return

    const selectedRowIdsMap = Object.keys(selectedRowIds)

    onChangeSelect?.(selectedRowIdsMap)
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
