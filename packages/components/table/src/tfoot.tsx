import type { FC } from "@yamada-ui/core"
import type { TableFootProps as NativeTableFootProps } from "@yamada-ui/native-table"
import type { InternalColumn } from "./use-table"
import { Tfoot as NativeTfoot, Th, Tr } from "@yamada-ui/native-table"
import { ariaAttr, runIfFunc } from "@yamada-ui/utils"
import { render, useTableContext } from "./use-table"

export interface TableFootProps extends NativeTableFootProps {}

export const Tfoot: FC = ({ ...rest }: TableFootProps) => {
  const { footerGroups, footerGroupProps, footerProps } = useTableContext()

  return (
    <NativeTfoot {...rest}>
      {footerGroups.map(({ id, headers }) => {
        return (
          <Tr key={id} {...runIfFunc(footerGroupProps, headers)}>
            {headers.map((header) => {
              const { id, colSpan, column, getContext, isPlaceholder } = header
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

Tfoot.displayName = "Tfoot"
Tfoot.__ui__ = "Tfoot"
