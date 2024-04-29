import {
  Menu,
  MenuButton,
  IconButton,
  Icon,
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
import type { Column, PagingTableProps } from "@yamada-ui/table"
import { PagingTable } from "@yamada-ui/table"
import { Ellipsis } from "lucide-react"
import { memo, useMemo, useState } from "react"
import type { FC, MutableRefObject } from "react"
import type { Data, Priority, Status, View } from "./data"
import { DATA, LABEL, PRIORITY, STATUS, VIEW } from "./data"

const TITLE_COLUMN: Column<Data> = {
  header: "Title",
  accessorKey: "title",
  css: { minW: "60%" },
  cell: ({ getValue, row }) => {
    const { label } = row.original

    const colorScheme =
      label === "Bug" ? "red" : label === "Feature" ? "purple" : "blue"
    return (
      <HStack gap="sm">
        <Tag
          variant="outline"
          size="sm"
          colorScheme={colorScheme}
          whiteSpace="nowrap"
          minW="auto"
        >
          {row.original.label}
        </Tag>

        <Text as="span" lineClamp={1}>
          {getValue()}
        </Text>
      </HStack>
    )
  },
}

const STATUS_COLUMN: (hasTitle?: boolean) => Column<Data> = (hasTitle) => ({
  header: "Status",
  accessorKey: "status",
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  cell: ({ getValue }) => (
    <HStack gap="sm">
      <Icon as={STATUS[getValue()].icon} />
      <Text as="span" lineClamp={1} color="muted">
        {STATUS[getValue()].label}
      </Text>
    </HStack>
  ),
})

const PRIORITY_COLUMN: (hasTitle?: boolean) => Column<Data> = (hasTitle) => ({
  header: "Priority",
  accessorKey: "priority",
  css: hasTitle ? { w: "12.5%" } : { minW: "12.5%" },
  cell: ({ getValue }) => (
    <HStack gap="sm">
      <Icon as={PRIORITY[getValue()].icon} color="muted" />
      <Text as="span" lineClamp={1}>
        {PRIORITY[getValue()].label}
      </Text>
    </HStack>
  ),
})

const CONTROL_COLUMN: Column<Data> = {
  id: "control",
  css: { w: "2.5%" },
  cell: () => <ControlMenu />,
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
          css: {
            minW: "24",
            ...(!hasTitle && !hasStatus && !hasPriority
              ? { minW: "12.5%" }
              : { w: "12.5%" }),
          },
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

          if (selectedStatuses.length)
            isSelectedStatus = selectedStatuses.includes(status)

          if (selectedPriorities.length)
            isSelectedPriority = selectedPriorities.includes(priority)

          return isSelectedStatus && isSelectedPriority && isSelectedTitle
        }),
      [inputtedTitle, selectedPriorities, selectedStatuses],
    )

    assignRef(titleRef, setInputtedTitle)
    assignRef(statusRef, setSelectedStatuses)
    assignRef(priorityRef, setSelectedPriorities)
    assignRef(viewRef, setSelectedViews)

    return (
      <TableContainer whiteSpace={{ base: "inherit", lg: "nowrap" }}>
        <PagingTable
          columns={columns}
          data={computedData}
          rowId="id"
          rowsClickSelect
          highlightOnHover
          highlightOnSelected
          headerProps={{ textTransform: "capitalize" }}
          cellProps={{ verticalAlign: "middle" }}
          pagingControlProps={{
            gridTemplateColumns: { base: undefined, sm: "1fr" },
          }}
          paginationProps={{
            innerProps: { flex: { base: "inherit", sm: 1 } },
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
          icon={<Icon as={Ellipsis} />}
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
