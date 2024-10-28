import type { HeaderContext, Row, RowData } from "@tanstack/react-table"
import type { CheckboxProps } from "@yamada-ui/checkbox"
import type { ComponentArgs } from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import { Checkbox } from "@yamada-ui/checkbox"
import { ui } from "@yamada-ui/core"
import { handlerAll } from "@yamada-ui/utils"
import { forwardRef, useId } from "react"

const Center = ui("div", {
  baseStyle: {
    alignItems: "center",
    display: "flex",
    h: "100%",
    justifyContent: "center",
    w: "100%",
  },
})

export interface TableTotalCheckboxProps<Y extends RowData>
  extends CheckboxProps {
  enablePagination: boolean
  table: HeaderContext<Y, unknown>["table"]
  disabledRowIds?: string[]
  tabIndex?: number
}

export const TableTotalCheckbox = forwardRef(
  <Y extends RowData>(
    {
      disabledRowIds = [],
      enablePagination,
      tabIndex,
      table,
      ...rest
    }: TableTotalCheckboxProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const {
      getIsAllPageRowsSelected,
      getIsAllRowsSelected,
      getIsSomePageRowsSelected,
      getIsSomeRowsSelected,
      getRowModel,
      getState,
      getToggleAllPageRowsSelectedHandler,
      getToggleAllRowsSelectedHandler,
    } = table

    const state = getState()
    const { rows } = getRowModel()
    const rowIds = rows.map(({ id }) => id)
    const enableRowIds = rowIds.filter((id) => !disabledRowIds.includes(id))
    const selectedRowIds = Object.keys(state.rowSelection)
    const unselectedRowIds = enableRowIds.filter(
      (id) => !selectedRowIds.includes(id),
    )

    const isDisabled = !enableRowIds.length
    const isAllChecked = !isDisabled && !unselectedRowIds.length

    const isChecked = !enablePagination
      ? getIsAllRowsSelected()
      : getIsAllPageRowsSelected()
    const isIndeterminate = !enablePagination
      ? getIsSomeRowsSelected()
      : getIsSomePageRowsSelected()
    const onChange = !enablePagination
      ? getToggleAllRowsSelectedHandler()
      : getToggleAllPageRowsSelectedHandler()

    if (isDisabled) tabIndex = -1

    return (
      <Center>
        <Checkbox
          ref={isDisabled ? undefined : ref}
          isChecked={isAllChecked || isChecked}
          isDisabled={isDisabled}
          tabIndex={tabIndex}
          inputProps={{ "aria-label": "Select all row" }}
          {...(!isAllChecked ? { isIndeterminate } : {})}
          {...{ gap: 0, ...rest }}
          onChange={handlerAll(rest.onChange, onChange)}
        />
      </Center>
    )
  },
) as {
  <Y extends RowData>(
    props: RefAttributes<HTMLInputElement> & TableTotalCheckboxProps<Y>,
  ): ReactElement
} & ComponentArgs

TableTotalCheckbox.displayName = "TableTotalCheckbox"
TableTotalCheckbox.__ui__ = "TableTotalCheckbox"

export interface TableCheckboxProps<Y extends RowData> extends CheckboxProps {
  row: Row<Y>
  rowHeader?: keyof Y
}

export const TableCheckbox = forwardRef(
  <Y extends RowData>(
    { row, rowHeader, tabIndex, ...rest }: TableCheckboxProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const uuid = useId()
    const { getCanSelect, getIsSelected, getToggleSelectedHandler, index } = row
    const isChecked = getIsSelected()
    const isDisabled = !getCanSelect()

    let ariaLabelledby = uuid

    if (rowHeader) ariaLabelledby += ` ${index}_${rowHeader.toString()}`

    if (isDisabled) tabIndex = -1

    return (
      <Center>
        <Checkbox
          id={uuid}
          ref={isDisabled ? undefined : ref}
          isChecked={isChecked}
          isDisabled={isDisabled}
          tabIndex={tabIndex}
          inputProps={{
            "aria-label": "Select row",
            "aria-labelledby": ariaLabelledby,
          }}
          {...{ gap: 0, ...rest }}
          onChange={handlerAll(rest.onChange, getToggleSelectedHandler())}
        />
      </Center>
    )
  },
) as {
  <Y extends RowData>(
    props: RefAttributes<HTMLInputElement> & TableCheckboxProps<Y>,
  ): ReactElement
} & ComponentArgs

TableCheckbox.displayName = "TableCheckbox"
TableCheckbox.__ui__ = "TableCheckbox"
