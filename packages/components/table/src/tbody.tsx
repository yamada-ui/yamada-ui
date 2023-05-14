import {
  Tbody as NativeTbody,
  TableBodyProps as NativeTableBodyProps,
  Tr,
  Td,
  TrProps,
  TdProps,
} from '@yamada-ui/native-table'
import { Dict, dataAttr, ariaAttr, handlerAll } from '@yamada-ui/utils'
import { type Row, useTableContext } from './use-table'

export type TableBodyProps = NativeTableBodyProps & {
  rowProps?: Omit<TrProps, 'key'>
  cellProps?: Omit<TdProps, 'key'>
}

export const Tbody = <Y extends Dict = Dict>({ rowProps, cellProps, ...rest }: TableBodyProps) => {
  const { getTableBodyProps, rows, prepareRow, onClickRow, rowsClickSelect, disabledRowIds } =
    useTableContext()

  return (
    <NativeTbody {...getTableBodyProps(rest)}>
      {rows.map((row) => {
        prepareRow(row)
        const { id, getRowProps, isSelected, toggleRowSelected, cells } = row as Row<Y>

        const isDisabled = disabledRowIds?.includes(id) ?? false

        const mergedRowProps = {
          ...rowProps,
          onClick: handlerAll(
            rowProps?.onClick,
            () => onClickRow?.(row as Row),
            (ev) => {
              ev.preventDefault()

              if (rowsClickSelect && !isDisabled) toggleRowSelected(!isSelected)
            },
          ),
        }

        const { key, ...props } = getRowProps(mergedRowProps)

        return (
          <Tr
            key={key}
            {...(rowsClickSelect && !isDisabled ? { cursor: 'pointer' } : {})}
            {...props}
            data-selected={dataAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            aria-checked={ariaAttr(isSelected)}
            aria-disabled={ariaAttr(isDisabled)}
          >
            {cells.map(({ getCellProps, render }) => {
              const { key, ...props } = getCellProps(cellProps)

              return (
                <Td key={key} {...props}>
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
