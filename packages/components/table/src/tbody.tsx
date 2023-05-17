import {
  Tbody as NativeTbody,
  TableBodyProps as NativeTableBodyProps,
  Tr,
  Td,
  TrProps,
  TdProps,
} from '@yamada-ui/native-table'
import { dataAttr, ariaAttr, handlerAll, runIfFunc } from '@yamada-ui/utils'
import { type Row, type Cell, useTableContext } from './use-table'

export type TableBodyProps<Y extends object = {}> = NativeTableBodyProps & {
  rowProps?: Omit<TrProps, 'key'> | ((row: Row<Y>) => Omit<TrProps, 'key'> | void)
  cellProps?: Omit<TdProps, 'key'> | ((cell: Cell<Y>) => Omit<TdProps, 'key'> | void)
}

export const Tbody = <Y extends object = {}>({
  rowProps,
  cellProps,
  ...rest
}: TableBodyProps<Y>) => {
  const {
    getTableBodyProps,
    rows,
    prepareRow,
    onClickRow,
    rowsClickSelect,
    disabledRowIds,
    enableBlockLayout,
  } = useTableContext()

  return (
    <NativeTbody {...getTableBodyProps(rest)} {...(enableBlockLayout ? { as: 'div' } : {})}>
      {rows.map((row) => {
        prepareRow(row)
        const computedRowProps = runIfFunc(rowProps, row as unknown as Row<Y>) ?? {}
        const { id, getRowProps, isSelected, toggleRowSelected, cells } = row as Row
        const isDisabled = disabledRowIds?.includes(id) ?? false
        const mergedRowProps = {
          ...computedRowProps,
          onClick: handlerAll(
            computedRowProps.onClick,
            () => onClickRow?.(row as Row),
            (ev) => {
              if (!rowsClickSelect || isDisabled) return

              ev.preventDefault()

              toggleRowSelected(!isSelected)
            },
          ),
        }
        const { key, ...props } = getRowProps(mergedRowProps)

        return (
          <Tr
            {...(rowsClickSelect && !isDisabled ? { cursor: 'pointer' } : {})}
            {...props}
            {...(enableBlockLayout ? { as: 'div' } : {})}
            key={key}
            data-selected={dataAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            aria-checked={ariaAttr(isSelected)}
            aria-disabled={ariaAttr(isDisabled)}
          >
            {cells.map((cell) => {
              const { getCellProps, render } = cell
              const computedCellProps = runIfFunc(cellProps, cell as unknown as Cell<Y>) ?? {}
              const { key, ...props } = getCellProps(computedCellProps)

              return (
                <Td {...props} {...(enableBlockLayout ? { as: 'div' } : {})} key={key}>
                  {render('Cell')}
                </Td>
              )
            })}
          </Tr>
        )
      })}
    </NativeTbody>
  )
}
