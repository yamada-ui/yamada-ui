import type { TableBodyProps as NativeTableBodyProps } from "@yamada-ui/native-table"
import { Tbody as NativeTbody, Tr, Td } from "@yamada-ui/native-table"
import { dataAttr, ariaAttr, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { useTableContext, render } from "./use-table"

export type TableBodyProps = NativeTableBodyProps

export const Tbody = ({ ...rest }: TableBodyProps) => {
  const {
    rows,
    rowProps,
    cellProps,
    enableRowSelection,
    rowsClickSelect,
    onClickRow,
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
        }

        return (
          <Tr
            key={id}
            {...(rowsClickSelect && !isDisabled ? { cursor: "pointer" } : {})}
            {...mergedRowProps}
            data-selected={dataAttr(isSelected)}
            data-disabled={dataAttr(isDisabled)}
            aria-checked={ariaAttr(isSelected)}
            aria-disabled={ariaAttr(isDisabled)}
          >
            {cells.map((cell) => {
              const { id, column, getContext } = cell

              return (
                <Td key={id} {...runIfFunc(cellProps, cell)}>
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
