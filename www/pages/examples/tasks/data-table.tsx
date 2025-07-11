import type { TdProps } from "@yamada-ui/react"
import type { Cell, Column, PagingTableProps } from "@yamada-ui/table"
import type { FC, MutableRefObject } from "react"
import type { Data, Priority, Status, View } from "./data"
import { EllipsisIcon } from "@yamada-ui/lucide"
import {
  assignRef,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  MenuSeparator,
  TableContainer,
  Tag,
  Text,
} from "@yamada-ui/react"
import { PagingTable } from "@yamada-ui/table"
import { memo, useCallback, useMemo, useState } from "react"
import { DATA, LABEL, PRIORITY, STATUS, VIEW } from "./data"

const TITLE_COLUMN: Column<Data> = {
  css: { minW: "60%" },
  accessorKey: "title",
  cell: ({ getValue, row }) => {
    const { empty, label } = row.original
    const value = getValue()

    if (empty) return value

    const colorScheme =
      label === "Bug" ? "red" : label === "Feature" ? "purple" : "blue"

    return (
      <HStack gap="sm">
        {label ? (
          <Tag
            colorScheme={colorScheme}
            size="sm"
            variant="outline"
            minW="auto"
            whiteSpace="nowrap"
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
  header: "Title",
}

const STATUS_COLUMN: (
  hasTitle?: boolean,
) => Column<Data, Status | undefined> = (hasTitle) => ({
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  accessorKey: "status",
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
  header: "Status",
})

const PRIORITY_COLUMN: (
  hasTitle?: boolean,
) => Column<Data, Priority | undefined> = (hasTitle) => ({
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  accessorKey: "priority",
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
  header: "Priority",
})

const CONTROL_COLUMN: Column<Data> = {
  id: "control",
  css: { w: "2.5%" },
  cell: ({ row }) => (row.original.id ? <ControlMenu /> : null),
}

export interface DataTableProps {
  priorityRef: MutableRefObject<(value: Priority[]) => void>
  statusRef: MutableRefObject<(value: Status[]) => void>
  titleRef: MutableRefObject<(value: string) => void>
  viewRef: MutableRefObject<(value: View[]) => void>
}

export const DataTable: FC<DataTableProps> = memo(
  ({ priorityRef, statusRef, titleRef, viewRef }) => {
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
          css:
            !hasTitle && !hasStatus && !hasPriority
              ? { minW: "12.5%" }
              : { minW: "24", w: "12.5%" },
          accessorKey: "id",
          enableSorting: false,
          header: "Task",
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
        DATA.filter(({ priority, status, title }) => {
          let isSelectedStatus = true
          let isSelectedPriority = true
          let isSelectedTitle = true

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
      : [{ empty: true, title: "No results." }]

    return (
      <TableContainer whiteSpace={{ base: "inherit", lg: "nowrap" }}>
        <PagingTable<Data>
          sx={{ "tbody > tr:last-of-type > td": { borderBottomWidth: "0px" } }}
          borderCollapse="separate"
          borderWidth="1px"
          columns={columns}
          data={resolvedData}
          highlightOnHover={hasData}
          highlightOnSelected={hasData}
          rounded="md"
          rowId="id"
          rowsClickSelect={hasData}
          withPagingControl={hasData}
          cellProps={cellProps}
          checkboxProps={{ disabled: !hasData }}
          headerProps={{ textTransform: "capitalize" }}
        />
      </TableContainer>
    )
  },
)

DataTable.displayName = "DataTable"

const ControlMenu = memo(
  () => {
    return (
      <Menu lazy>
        <MenuButton
          as={IconButton}
          size="sm"
          variant="ghost"
          icon={<EllipsisIcon />}
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

          <MenuSeparator />

          <MenuItem>
            <Menu>
              <MenuItemButton>Label</MenuItemButton>

              <MenuList>
                <MenuOptionGroup type="radio">
                  {LABEL.map((value) => (
                    <MenuOptionItem key={value} value={value}>
                      {value}
                    </MenuOptionItem>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </MenuItem>

          <MenuSeparator />

          <MenuItem command="⌘⌫">Delete</MenuItem>
        </MenuList>
      </Menu>
    )
  },
  () => false,
)

ControlMenu.displayName = "ControlMenu"
