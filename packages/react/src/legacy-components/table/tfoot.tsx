import type { Header, RowData } from "@tanstack/react-table"
import type { TableFootProps as NativeTableFootProps } from "../native-table"
import type { ThProps as NativeThProps } from "../native-table"
import type { InternalColumn } from "./table-utils"
import { ariaAttr, runIfFunc } from "../../utils"
import { Tfoot as NativeTfoot, Th as NativeTh, Tr } from "../native-table"
import { useTableContext } from "./table-context"
import { useCellProps } from "./table-utils"
import { render } from "./use-table"

export interface TableFootProps extends NativeTableFootProps {}

export const Tfoot = <Y extends RowData = unknown>({
  ...rest
}: TableFootProps) => {
  const { footerGroups, headerGroups, rows, footerGroupProps, footerProps } =
    useTableContext<Y>()
  const headerCount = headerGroups.length
  const rowCount = rows.length

  return (
    <NativeTfoot {...rest}>
      {footerGroups.map(({ id, headers }, rowIndex) => {
        rowIndex += headerCount + rowCount

        return (
          <Tr key={id} {...runIfFunc(footerGroupProps, headers)}>
            {headers.map((header, colIndex) => {
              const { id, colSpan, isPlaceholder, rowSpan } = header
              const props = runIfFunc(footerProps, header) ?? {}

              if (isPlaceholder) return null

              return (
                <Th
                  key={id}
                  {...props}
                  colIndex={colIndex}
                  colSpan={colSpan}
                  header={header}
                  rowIndex={rowIndex}
                  rowSpan={rowSpan}
                />
              )
            })}
          </Tr>
        )
      })}
    </NativeTfoot>
  )
}

Tfoot.displayName = "Tfoot"
Tfoot.__ui__ = "Tfoot"

interface ThProps<Y extends RowData = unknown> extends NativeThProps {
  colIndex: number
  header: Header<Y, unknown>
  rowIndex: number
}

const Th = <Y extends RowData = unknown>({
  colIndex,
  colSpan,
  header,
  rowIndex,
  rowSpan,
  ...rest
}: ThProps<Y>) => {
  const { column, getContext } = header
  const { columnDef } = column
  const {
    "aria-hidden": ariaHidden,
    colSpan: customColSpan,
    rowSpan: customRowSpan,
  } = columnDef as InternalColumn<Y>
  const computedColSpan = customColSpan ?? colSpan ?? 0
  const computedRowSpan = customRowSpan ?? rowSpan ?? 0

  const [props, renderProps] = useCellProps<"th">(rowIndex, colIndex, {
    colSpan: computedColSpan > 1 ? computedColSpan : undefined,
    rowSpan: computedRowSpan > 1 ? computedRowSpan : undefined,
    ...rest,
  })

  return (
    <NativeTh aria-hidden={ariaAttr(ariaHidden)} {...props}>
      {render(columnDef.footer, { ...renderProps, ...getContext() })}
    </NativeTh>
  )
}

Th.displayName = "Th"
Th.__ui__ = "Th"
