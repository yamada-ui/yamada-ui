import type {
  HeaderGroup,
  Row,
  RowData,
  RowSelectionState,
} from "@tanstack/react-table"
import type { CheckboxProps } from "@yamada-ui/checkbox"
import type { HTMLProps } from "@yamada-ui/core"
import type { Column, UseTableProps } from "./use-table"
import { ariaAttr, handlerAll } from "@yamada-ui/utils"
import { useEffect, useRef } from "react"
import { TableCheckbox, TableTotalCheckbox } from "./table-checkbox"
import { useTableContext } from "./table-context"

export const generateRowId = <Y extends RowData>(key: keyof Y | undefined) =>
  key ? (row: Y) => String(row[key]) : undefined

export const getEnableRowSelection = <Y extends RowData>(
  { id }: Row<Y>,
  disabledRowIds?: string[],
) => !disabledRowIds?.includes(id)

export const generateRowSelection = <Y extends RowData>(
  rowSelection: string[] | undefined,
  enableRowSelection: UseTableProps<Y>["enableRowSelection"],
): RowSelectionState => {
  if (!enableRowSelection) return {}

  if (rowSelection) {
    return rowSelection.reduce<RowSelectionState>(
      (prev, id) => ({ ...prev, [String(id)]: true }),
      {},
    )
  } else {
    return {}
  }
}

export const generateGroups = <Y extends RowData>(
  headerGroup: HeaderGroup<Y>[],
  isFooter = false,
) =>
  headerGroup.map((_header) => {
    const header = Object.assign({}, _header)

    const upperHeaderGroups = headerGroup.filter(
      ({ depth }) => depth < header.depth,
    )
    const lowerHeaderGroups = headerGroup.filter(
      ({ depth }) => depth > header.depth,
    )

    header.headers = header.headers.flatMap((_header) => {
      const header = Object.assign({}, _header)

      const isPlaceholder = (
        isFooter ? lowerHeaderGroups : upperHeaderGroups
      ).some(({ headers }) =>
        headers.some(({ column }) => column.id === header.column.id),
      )

      header.isPlaceholder = isPlaceholder

      for (let { depth, headers } of isFooter
        ? upperHeaderGroups
        : lowerHeaderGroups) {
        const hasRelated = headers.some(
          ({ column }) => column.id === header.column.id,
        )

        if (hasRelated)
          header.rowSpan += isFooter ? header.depth - depth : depth + 1
      }

      if (header.colSpan > 1) {
        return [
          header,
          ...Array(header.colSpan - 1).fill({
            ...header,
            isPlaceholder: true,
          }),
        ]
      } else {
        return header
      }
    })

    return header
  })

export type InternalColumn<Y extends RowData, M = any> = {
  "aria-hidden"?: boolean
} & Column<Y, M>

export interface SelectColumn<Y extends RowData, M = any>
  extends Omit<Column<Y, M>, "accessorFn" | "accessorKey"> {}

export interface MergeColumnsOptions<Y extends RowData> {
  columns: Column<Y>[]
  enablePagination: boolean
  disabledRowIds?: string[]
  rowHeader?: keyof Y
  withFooterSelect?: boolean
  checkboxProps?: CheckboxProps
  selectColumnProps?: SelectColumn<Y>
}

export const mergeColumns = <Y extends RowData>({
  columns,
  disabledRowIds,
  enablePagination,
  rowHeader,
  withFooterSelect,
  checkboxProps = {},
  selectColumnProps,
}: MergeColumnsOptions<Y>): InternalColumn<Y>[] => [
  {
    id: "select",
    header: ({ referenceRef, tabIndex, table }) => (
      <TableTotalCheckbox<Y>
        {...{
          ref: referenceRef,
          disabledRowIds,
          enablePagination,
          tabIndex,
          table,
          ...checkboxProps,
        }}
      />
    ),
    ...(withFooterSelect
      ? {
          footer: ({ referenceRef, tabIndex, table }) => (
            <TableTotalCheckbox<Y>
              {...{
                ref: referenceRef,
                disabledRowIds,
                enablePagination,
                tabIndex,
                table,
                ...checkboxProps,
              }}
            />
          ),
        }
      : {}),
    "aria-hidden": ariaAttr(!withFooterSelect),
    cell: ({ referenceRef, row, tabIndex }) => (
      <TableCheckbox<Y>
        {...{ ref: referenceRef, row, rowHeader, tabIndex, ...checkboxProps }}
      />
    ),
    ...selectColumnProps,
    css: { w: "0", ...selectColumnProps?.css },
  },
  ...columns,
]

interface CellPosition {
  colIndex: number
  rowIndex: number
  colSpan?: number
  rowSpan?: number
}

export const useCellRef = (
  disabled = false,
  { colIndex, colSpan = 1, rowIndex, rowSpan = 1 }: CellPosition,
) => {
  const { cellMapRef } = useTableContext()
  const ref = useRef<HTMLTableCellElement>(null)
  const referenceRef = useRef<HTMLTableCellElement>(null)

  useEffect(() => {
    if (disabled) return

    const cellMap = cellMapRef.current
    let targetRef = ref

    if (referenceRef.current != null) {
      if (ref.current) ref.current.tabIndex = -1

      targetRef = referenceRef
    }

    for (let i = 0; i < rowSpan; i++) {
      cellMap.set(`${rowIndex + i}-${colIndex}`, targetRef)
    }

    for (let i = 0; i < colSpan; i++) {
      cellMap.set(`${rowIndex}-${colIndex + i}`, targetRef)
    }

    return () => {
      for (let i = 0; i < rowSpan; i++) {
        cellMap.delete(`${rowIndex + i}-${colIndex}`)
      }

      for (let i = 0; i < colSpan; i++) {
        cellMap.delete(`${rowIndex}-${colIndex + i}`)
      }
    }
  }, [cellMapRef, colIndex, colSpan, rowIndex, rowSpan, disabled])

  return { ref, referenceRef }
}

type CellElement = "td" | "th"

type CellProps<Y extends CellElement = "td"> = {
  disabled?: boolean
} & HTMLProps<Y>

export const useCellProps = <Y extends CellElement = "td">(
  rowIndex: number,
  colIndex: number,
  { colSpan, disabled, rowSpan, onKeyDown, ...rest }: CellProps<Y>,
) => {
  const { ref, referenceRef } = useCellRef(disabled, {
    colIndex,
    colSpan,
    rowIndex,
    rowSpan,
  })
  const { focusedCell, getOnKeyDown } = useTableContext()
  const hasReference = referenceRef.current != null

  const isFocused = focusedCell[0] === rowIndex && focusedCell[1] === colIndex
  const tabIndex: number = isFocused ? 0 : -1

  return [
    {
      ref,
      "aria-colspan": colSpan,
      "aria-rowspan": rowSpan,
      "data-colindex": colIndex,
      "data-rowindex": rowIndex,
      colSpan,
      rowSpan,
      ...rest,
      tabIndex: hasReference ? -1 : tabIndex,
      onKeyDown: handlerAll(onKeyDown, getOnKeyDown(rowIndex, colIndex)),
    },
    {
      referenceRef,
      tabIndex,
    },
  ] as const
}
