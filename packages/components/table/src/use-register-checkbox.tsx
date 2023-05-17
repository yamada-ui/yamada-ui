import { Checkbox, CheckboxProps } from '@yamada-ui/checkbox'
import { ui } from '@yamada-ui/core'
import { Dict, handlerAll } from '@yamada-ui/utils'
import {
  ColumnInstance,
  HeaderProps as ReactHeaderProps,
  Hooks,
  UseRowSelectInstanceProps,
} from 'react-table'
import { Row, TableState, SelectColumn } from './use-table'

type HeaderProps<Y extends Dict = Dict> = ReactHeaderProps<Y> &
  UseRowSelectInstanceProps<Y> & { state: TableState<Y> }

export type UseRegisterCheckboxProps<Y extends Dict = Dict> = {
  hooks: Hooks<Y>
  checkboxProps?: CheckboxProps
  disabledRowIds?: string[]
  selectColumnProps?: SelectColumn<Y>
  withFooterSelect?: boolean
}

const Center = ui('div', {
  baseStyle: {
    w: '100%',
    h: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
})

export const useRegisterCheckbox = <Y extends Dict = Dict>({
  hooks,
  checkboxProps,
  disabledRowIds = [],
  selectColumnProps,
  withFooterSelect,
}: UseRegisterCheckboxProps<Y>) => {
  hooks.visibleColumns.push(
    (columns) =>
      [
        {
          id: 'selection',
          Header: ({ state, getToggleAllRowsSelectedProps, rowsById }: HeaderProps<Y>) => {
            const selectedRowIds = Object.keys(state.selectedRowIds)
            const unselectedRowIds = Object.keys(rowsById).filter(
              (id) => !selectedRowIds.includes(id),
            )

            const isAllChecked = unselectedRowIds.every((id) => disabledRowIds.includes(id))

            const { checked, indeterminate, onChange } = getToggleAllRowsSelectedProps()

            return (
              <Center>
                <Checkbox
                  {...{ gap: 0, ...checkboxProps }}
                  isChecked={isAllChecked || checked}
                  {...(!isAllChecked ? { isIndeterminate: indeterminate } : {})}
                  onChange={handlerAll(checkboxProps?.onChange, onChange)}
                />
              </Center>
            )
          },
          ...(withFooterSelect
            ? {
                Footer: ({ state, getToggleAllRowsSelectedProps, rowsById }: HeaderProps<Y>) => {
                  const selectedRowIds = Object.keys(state.selectedRowIds)
                  const unselectedRowIds = Object.keys(rowsById).filter(
                    (id) => !selectedRowIds.includes(id),
                  )

                  const isAllChecked = unselectedRowIds.every((id) => disabledRowIds.includes(id))

                  const { checked, indeterminate, onChange } = getToggleAllRowsSelectedProps()

                  return (
                    <Center>
                      <Checkbox
                        {...{ gap: 0, ...checkboxProps }}
                        isChecked={isAllChecked || checked}
                        {...(!isAllChecked ? { isIndeterminate: indeterminate } : {})}
                        onChange={handlerAll(checkboxProps?.onChange, onChange)}
                      />
                    </Center>
                  )
                },
              }
            : {}),
          Cell: ({ row }: { row: Row<Y> }) => {
            const { checked, indeterminate, onChange } = row.getToggleRowSelectedProps()

            return (
              <Center>
                <Checkbox
                  {...{ gap: 0, ...checkboxProps }}
                  isChecked={checked}
                  isDisabled={disabledRowIds.includes(row.id.toString())}
                  isIndeterminate={indeterminate}
                  onChange={handlerAll(checkboxProps?.onChange, onChange)}
                />
              </Center>
            )
          },
          disableResizing: true,
          ...selectColumnProps,
        },
        ...columns,
      ] as ColumnInstance<Y>[],
  )
}
