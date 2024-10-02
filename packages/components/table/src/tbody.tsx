import type { TableBodyProps as NativeTableBodyProps } from "@yamada-ui/native-table"
import { FC } from "@yamada-ui/core"
import { Tbody as NativeTbody, Td, Tr } from "@yamada-ui/native-table"
import { ariaAttr, dataAttr, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { render, useTableContext } from "./use-table"

export interface TableBodyProps extends NativeTableBodyProps {}

export const Tbody: FC = ({ ...rest }: TableBodyProps) => {
  const {
    enableRowSelection,
    rows,
    rowsClickSelect,
    cellProps,
    rowProps,
    onClickRow,
    onDoubleClickRow,
  } = useTableContext()

  return (
    <NativeTbody {...rest}>
      {rows.map((row) => {
        const {
          id,
          getCanSelect,
          getIsSelected,
          getVisibleCells,
          toggleSelected,
        } = row

        const cells = getVisibleCells()

        const props = runIfFunc(rowProps, row) ?? {}
        const isSelected = getIsSelected()
        const isDisabled = enableRowSelection && !getCanSelect()
        const mergedRowProps = {
          ...props,
          onClick: handlerAll(
            props.onClick,
            () => (!isDisabled ? onClickRow?.(row) : {}),
            (ev) => {
              if (!rowsClickSelect || isDisabled) return

              ev.preventDefault()

              toggleSelected(!isSelected)
            },
          ),
          onDoubleClick: handlerAll(props.onDoubleClick, () =>
            !isDisabled ? onDoubleClickRow?.(row) : {},
          ),
        }

        return (
          <Tr
            key={id}
            {...(rowsClickSelect && !isDisabled ? { cursor: "pointer" } : {})}
            {...mergedRowProps}
            aria-disabled={ariaAttr(isDisabled)}
            aria-rowindex={row.index + 1}
            aria-selected={ariaAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            data-selected={dataAttr(isSelected)}
          >
            {cells.map((cell, index) => {
              const { id, column, getContext } = cell

              return (
                <Td
                  key={id}
                  {...runIfFunc(cellProps, cell)}
                  aria-colindex={index + 1}
                >
                  {render(column.columnDef.cell, getContext())}
                </Td>
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
