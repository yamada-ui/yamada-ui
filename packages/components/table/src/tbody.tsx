import type { TableBodyProps as NativeTableBodyProps } from "@yamada-ui/native-table"
import type { TdProps as NativeTdProps } from "@yamada-ui/native-table"
import type { Cell, RowData } from "./use-table"
import {
  Tbody as NativeTbody,
  Td as NativeTd,
  Tr,
} from "@yamada-ui/native-table"
import { ariaAttr, dataAttr, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { useTableContext } from "./table-context"
import { useCellProps } from "./table-utils"
import { render } from "./use-table"

export interface TableBodyProps extends NativeTableBodyProps {}

export const Tbody = <Y extends RowData = unknown>({
  ...rest
}: TableBodyProps) => {
  const {
    enableRowSelection,
    headerGroups,
    rows,
    rowsClickSelect,
    cellProps,
    rowProps,
    onClickRow,
    onDoubleClickRow,
  } = useTableContext<Y>()

  const headerCount = headerGroups.length

  return (
    <NativeTbody {...rest}>
      {rows.map((row, rowIndex) => {
        rowIndex += headerCount

        const {
          id,
          getCanSelect,
          getIsSelected,
          getVisibleCells,
          toggleSelected,
        } = row

        const props = runIfFunc(rowProps, row) ?? {}
        const cells = getVisibleCells()
        const isSelected = getIsSelected()
        const isDisabled = enableRowSelection && !getCanSelect()

        return (
          <Tr
            key={id}
            {...(rowsClickSelect && !isDisabled ? { cursor: "pointer" } : {})}
            {...props}
            aria-disabled={ariaAttr(isDisabled)}
            aria-rowindex={row.index + 1}
            aria-selected={ariaAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            data-selected={dataAttr(isSelected)}
            onClick={handlerAll(
              props.onClick,
              () => (!isDisabled ? onClickRow?.(row) : {}),
              (ev) => {
                if (!rowsClickSelect || isDisabled) return

                ev.preventDefault()

                toggleSelected(!isSelected)
              },
            )}
            onDoubleClick={handlerAll(props.onDoubleClick, () =>
              !isDisabled ? onDoubleClickRow?.(row) : void 0,
            )}
          >
            {cells.map((cell, colIndex) => {
              const { id } = cell
              const props = runIfFunc(cellProps, cell) ?? {}

              return (
                <Td
                  key={id}
                  {...props}
                  cell={cell}
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                />
              )
            })}
          </Tr>
        )
      })}
    </NativeTbody>
  )
}

Tbody.displayName = "Tbody"
Tbody.__ui__ = "Tbody"

interface TdProps<Y extends RowData = unknown> extends NativeTdProps {
  cell: Cell<Y, unknown>
  colIndex: number
  rowIndex: number
}

const Td = <Y extends RowData = unknown>({
  cell,
  colIndex,
  rowIndex,
  ...rest
}: TdProps<Y>) => {
  const { isFocusable, rowHeader } = useTableContext<Y>()
  const { id: cellId, column, getContext, row } = cell
  const { id: colId, columnDef } = column
  const isDisabled = !row.getCanSelect()
  const trulyDisabled = isDisabled && !isFocusable
  const isRowHeader = rowHeader === colId

  const [props, renderProps] = useCellProps(rowIndex, colIndex, {
    ...rest,
    isDisabled: trulyDisabled,
    role: isRowHeader ? "rowheader" : undefined,
  })

  return (
    <NativeTd id={cellId} {...props}>
      {render(columnDef.cell, { ...renderProps, ...getContext() })}
    </NativeTd>
  )
}

Td.displayName = "Td"
Td.__ui__ = "Td"
