import type { TableFootProps as NativeTableFootProps } from "@yamada-ui/native-table"
import { Tfoot as NativeTfoot, Tr, Th } from "@yamada-ui/native-table"
import { runIfFunc } from "@yamada-ui/utils"
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

              return !isPlaceholder ? (
                <Th
                  key={id}
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
