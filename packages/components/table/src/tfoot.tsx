import type { TableFootProps as NativeTableFootProps } from "@yamada-ui/native-table"
import { Tfoot as NativeTfoot, Tr, Th } from "@yamada-ui/native-table"
import { ariaAttr, runIfFunc } from "@yamada-ui/utils"
import type { InternalColumn } from "./use-table"
import { useTableContext, render } from "./use-table"

export type TableFootProps = NativeTableFootProps

export const Tfoot = ({ ...rest }: TableFootProps) => {
  const { footerGroups, footerGroupProps, footerProps } = useTableContext()

  return (
    <NativeTfoot {...rest}>
      {footerGroups.map(({ id, headers }) => {
        return (
          <Tr key={id} {...runIfFunc(footerGroupProps, headers)}>
            {headers.map((header) => {
              const { id, colSpan, isPlaceholder, column, getContext } = header
              const { columnDef } = column
              let { "aria-hidden": ariaHidden } =
                columnDef as InternalColumn<unknown>

              return !isPlaceholder ? (
                <Th
                  key={id}
                  aria-hidden={ariaAttr(ariaHidden)}
                  {...runIfFunc(footerProps, header)}
                  colSpan={colSpan}
                >
                  {render(column.columnDef.footer, getContext())}
                </Th>
              ) : null
            })}
          </Tr>
        )
      })}
    </NativeTfoot>
  )
}
