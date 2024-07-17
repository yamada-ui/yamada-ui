import { Ellipsis } from "@yamada-ui/lucide"
import {
  Menu,
  MenuButton,
  IconButton,
  HStack,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuItemButton,
  MenuOptionGroup,
  TableContainer,
  Tag,
  assignRef,
} from "@yamada-ui/react"
import type { TdProps } from "@yamada-ui/react"
import { PagingTable } from "@yamada-ui/table"
import type { Cell, Column, PagingTableProps } from "@yamada-ui/table"
import { memo, useCallback, useMemo, useState } from "react"
import type { FC, MutableRefObject } from "react"
import { DATA, LABEL, PRIORITY, STATUS, VIEW } from "./data"
import type { Data, Priority, Status, View } from "./data"

const TITLE_COLUMN: Column<Data> = {
  header: "Title",
  accessorKey: "title",
  css: { minW: "60%" },
  cell: ({ getValue, row }) => {
    const { label, empty } = row.original
    const value = getValue()

    if (empty) return value

    const colorScheme =
      label === "Bug" ? "red" : label === "Feature" ? "purple" : "blue"

    return (
      <HStack gap="sm">
        {label ? (
          <Tag
            variant="outline"
            size="sm"
            colorScheme={colorScheme}
            whiteSpace="nowrap"
            minW="auto"
          >
            {label}
          </Tag>
        ) : null}

        <Text as="span" lineClamp={1}>
          {value}
        </Text>
      </HStack>
    )
  },
}

const STATUS_COLUMN: (hasTitle?: boolean) => Column<Data, Status> = (
  hasTitle,
) => ({
  header: "Status",
  accessorKey: "status",
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  cell: ({ getValue }) => {
    const value = getValue()

    if (!value) return null

    const Icon = STATUS[value].icon

    return (
      <HStack gap="sm">
        <Icon color="muted" />
        <Text as="span" lineClamp={1}>
          {STATUS[value].label}
        </Text>
      </HStack>
    )
  },
})

const PRIORITY_COLUMN: (hasTitle?: boolean) => Column<Data, Priority> = (
  hasTitle,
) => ({
  header: "Priority",
  accessorKey: "priority",
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  cell: ({ getValue }) => {
    const value = getValue()

    if (!value) return null

    const Icon = PRIORITY[value].icon

    return (
      <HStack gap="sm">
        <Icon color="muted" />
        <Text as="span" lineClamp={1}>
          {PRIORITY[value].label}
        </Text>
      </HStack>
    )
  },
})

const CONTROL_COLUMN: Column<Data> = {
  id: "control",
  css: { w: "2.5%" },
  cell: ({ row }) => (row.original.id ? <ControlMenu /> : null),
}

export type DataTableProps = Omit<PagingTableProps, "columns" | "data"> & {
  titleRef: MutableRefObject<(value: string) => void>
  statusRef: MutableRefObject<(value: Status[]) => void>
  priorityRef: MutableRefObject<(value: Priority[]) => void>
  viewRef: MutableRefObject<(value: View[]) => void>
}

export const DataTable: FC<DataTableProps> = memo(
  ({ titleRef, statusRef, priorityRef, viewRef, ...rest }) => {
    const [inputtedTitle, setInputtedTitle] = useState<string>("")
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([])
    const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([])
    const [selectedViews, setSelectedViews] = useState<View[]>([...VIEW])

    const columns = useMemo<Column<Data>[]>(() => {
      const hasTitle = selectedViews.includes("title")
      const hasStatus = selectedViews.includes("status")
      const hasPriority = selectedViews.includes("priority")

      const computedColumns: Column<Data>[] = [
        {
          header: "Task",
          accessorKey: "id",
          css:
            !hasTitle && !hasStatus && !hasPriority
              ? { minW: "12.5%" }
              : { minW: "24", w: "12.5%" },
          enableSorting: false,
        },
      ]

      if (hasTitle) computedColumns.push(TITLE_COLUMN)
      if (hasStatus) computedColumns.push(STATUS_COLUMN(hasTitle))
      if (hasPriority) computedColumns.push(PRIORITY_COLUMN(hasTitle))

      computedColumns.push(CONTROL_COLUMN)

      return computedColumns
    }, [selectedViews])

    const computedData = useMemo<Data[]>(
      () =>
        DATA.filter(({ title, status, priority }) => {
          let isSelectedStatus: boolean = true
          let isSelectedPriority: boolean = true
          let isSelectedTitle: boolean = true

          if (inputtedTitle.length)
            isSelectedTitle = title
              .toUpperCase()
              .includes(inputtedTitle.toUpperCase())

          if (selectedStatuses.length && status)
            isSelectedStatus = selectedStatuses.includes(status)

          if (selectedPriorities.length && priority)
            isSelectedPriority = selectedPriorities.includes(priority)

          return isSelectedStatus && isSelectedPriority && isSelectedTitle
        }),

      [inputtedTitle, selectedPriorities, selectedStatuses],
    )

    const cellProps: PagingTableProps<Data>["cellProps"] = useCallback(
      ({ column, row }: Cell<Data, unknown>) => {
        const props: TdProps = { verticalAlign: "middle" }

        if (row.original.empty) {
          if (column.columnDef.header === "Title") {
            props.colSpan = 6
            props.textAlign = "center"
            props.color = "muted"
            props.h = "3xs"
          } else {
            props.display = "none"
          }
        }

        return props
      },
      [],
    )

    assignRef(titleRef, setInputtedTitle)
    assignRef(statusRef, setSelectedStatuses)
    assignRef(priorityRef, setSelectedPriorities)
    assignRef(viewRef, setSelectedViews)

    const hasData = !!computedData.length
    const resolvedData: Data[] = hasData
      ? computedData
      : [{ title: "No results.", empty: true }]

    return (
      <TableContainer whiteSpace={{ base: "inherit", lg: "nowrap" }}>
        <PagingTable<Data>
          borderCollapse="separate"
          borderWidth="1px"
          rounded="md"
          sx={{ "tbody > tr:last-of-type > td": { borderBottomWidth: "0px" } }}
          columns={columns}
          data={resolvedData}
          rowId="id"
          rowsClickSelect={hasData}
          highlightOnHover={hasData}
          highlightOnSelected={hasData}
          checkboxProps={{ isDisabled: !hasData }}
          // @ts-ignore
          headerProps={{ textTransform: "capitalize" }}
          // @ts-ignore
          cellProps={cellProps}
          pagingControlProps={{
            gridTemplateColumns: { base: undefined, sm: "1fr" },
          }}
          paginationProps={{
            isDisabled: !hasData,
            innerProps: {
              flex: { base: "inherit", sm: 1 },
              display: hasData ? "flex" : "none",
            },
            gridColumn: { base: undefined, sm: "1 / 2" },
          }}
          selectProps={{ gridColumn: { base: undefined, sm: "1 / 2" } }}
          {...rest}
        />
      </TableContainer>
    )
  },
)

DataTable.displayName = "DataTable"

const ControlMenu = memo(
  () => {
    return (
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          icon={<Ellipsis />}
          size="sm"
          variant="ghost"
          onClick={(ev) => {
            ev.stopPropagation()
          }}
        />

        <MenuList
          onClick={(ev) => {
            ev.stopPropagation()
          }}
        >
          <MenuItem>Edit</MenuItem>
          <MenuItem>Make a copy</MenuItem>
          <MenuItem>Favorite</MenuItem>

          <MenuDivider />

          <MenuItem>
            <Menu>
              <MenuItemButton>Label</MenuItemButton>

              <MenuList>
                <MenuOptionGroup type="radio">
                  {LABEL.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </MenuItem>

          <MenuDivider />

          <MenuItem command="⌘⌫">Delete</MenuItem>
        </MenuList>
      </Menu>
    )
  },
  () => false,
)

ControlMenu.displayName = "ControlMenu"
