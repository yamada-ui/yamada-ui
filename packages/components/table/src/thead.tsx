import type { Header, RowData } from "@tanstack/react-table"
import type { TableHeadProps as NativeTableHeadProps } from "@yamada-ui/native-table"
import type { ThProps as NativeThProps } from "@yamada-ui/native-table"
import type { Column } from "./use-table"
import {
  Th as NativeTh,
  Thead as NativeThead,
  Tr,
} from "@yamada-ui/native-table"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { useTableContext } from "./table-context"
import { TableSortIcon, TableSortTextButton } from "./table-sort-button"
import { useCellProps } from "./table-utils"
import { render } from "./use-table"

export interface TableHeadProps extends NativeTableHeadProps {}

export const Thead = <Y extends RowData = unknown>({
  ...rest
}: TableHeadProps) => {
  const { headerGroups, headerGroupProps, headerProps } = useTableContext<Y>()

  return (
    <NativeThead {...rest}>
      {headerGroups.map(({ id, headers }, rowIndex) => {
        return (
          <Tr key={id} {...runIfFunc(headerGroupProps, headers)}>
            {headers.map((header, colIndex) => {
              const { id, colSpan, isPlaceholder, rowSpan } = header
              const props = runIfFunc(headerProps, header) ?? {}

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
    </NativeThead>
  )
}

Thead.displayName = "Thead"
Thead.__ui__ = "Thead"

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
  const { sortIconProps } = useTableContext<Y>()
  const { column, getContext } = header
  const { columnDef, getCanSort, getIsSorted, getToggleSortingHandler } = column
  const {
    className,
    css,
    style,
    sx,
    "aria-label": ariaLabel,
    colSpan: customColSpan,
    rowSpan: customRowSpan,
  } = columnDef as Column<Y>

  const canSort = getCanSort()
  const isSorted = getIsSorted()
  const toggleSortingHandler = getToggleSortingHandler()

  const [props, renderProps] = useCellProps<"th">(rowIndex, colIndex, {
    colSpan: (customColSpan ?? colSpan) || 1,
    rowSpan: (customRowSpan ?? rowSpan) || 1,
    ...rest,
    onClick: handlerAll(rest.onClick, toggleSortingHandler),
  })
  const { role: _role, ...computedProps } =
    useClickable<HTMLTableCellElement>(props)

  return (
    <NativeTh
      aria-colindex={colIndex + 1}
      aria-label={ariaLabel}
      aria-sort={
        isSorted ? (isSorted === "asc" ? "ascending" : "descending") : "none"
      }
      {...computedProps}
      className={cx(rest.className, className)}
      style={{ ...rest.style, ...style }}
      sx={{ ...rest.sx, ...sx }}
      __css={{
        position: "relative",
        userSelect: canSort ? "none" : undefined,
        ...css,
      }}
    >
      {canSort ? (
        <>
          <TableSortTextButton onClick={toggleSortingHandler}>
            {render(columnDef.header, { ...renderProps, ...getContext() })}
          </TableSortTextButton>

          <TableSortIcon {...{ isSorted, ...sortIconProps }} />
        </>
      ) : (
        render(columnDef.header, { ...renderProps, ...getContext() })
      )}
    </NativeTh>
  )
}

Th.displayName = "Th"
Th.__ui__ = "Th"
