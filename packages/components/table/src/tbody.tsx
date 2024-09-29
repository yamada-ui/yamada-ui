import { FC } from "@yamada-ui/core"
import type { TableBodyProps as NativeTableBodyProps } from "@yamada-ui/native-table"
import { Tbody as NativeTbody, Tr, Td } from "@yamada-ui/native-table"
import { dataAttr, ariaAttr, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { useTableContext, render } from "./use-table"

export interface TableBodyProps extends NativeTableBodyProps {}

export const Tbody: FC = ({ ...rest }: TableBodyProps) => {
  const {
    rows,
    rowProps,
    cellProps,
    enableRowSelection,
    rowsClickSelect,
    onClickRow,
    onDoubleClickRow,
  } = useTableContext()

  return (
    <NativeTbody {...rest}>
      {rows.map((row) => {
        const {
          id,
          getVisibleCells,
          getIsSelected,
          getCanSelect,
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
            data-selected={dataAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            aria-selected={ariaAttr(isSelected)}
            aria-disabled={ariaAttr(isDisabled)}
            aria-rowindex={row.index + 1}
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
