"use client"

import type { StyleProps } from "@yamada-ui/react"
import type { RefObject } from "react"
import type { Data, Priority, Status, View } from "../data"
import {
  assignRef,
  Box,
  Checkbox,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  Field,
  For,
  Grid,
  HStack,
  NativeTable,
  Pagination,
  Select,
  Show,
  Spacer,
  Tag,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo, useCallback, useMemo, useState } from "react"
import { DATA, PRIORITY, STATUS, VIEW } from "../data"
import { ControlMenu } from "./control-menu"

const PAGE_SIZE_ITEMS: Select.Item[] = [20, 50, 100].map((value) => ({
  label: String(value),
  value: String(value),
}))

type SortKey = "priority" | "status"
type SortOrder = "asc" | "desc" | null

export interface DataTableProps {
  priorityRef: RefObject<(value: Priority[]) => void>
  statusRef: RefObject<(value: Status[]) => void>
  titleRef: RefObject<(value: string) => void>
  viewRef: RefObject<(value: View[]) => void>
}

export const DataTable = memo<DataTableProps>(
  ({ priorityRef, statusRef, titleRef, viewRef }) => {
    const [inputtedTitle, setInputtedTitle] = useState<string>("")
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([])
    const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([])
    const [selectedViews, setSelectedViews] = useState<View[]>([...VIEW])
    const [selectedRows, setSelectedRows] = useState<string[]>([])
    const [pageSize, setPageSize] = useState<number>(20)
    const [sortKey, setSortKey] = useState<null | SortKey>(null)
    const [sortOrder, setSortOrder] = useState<SortOrder>(null)
    const [currentPage, onChangeCurrentPage] = useState(1)

    const computedData = useMemo<Data[]>(() => {
      const filtered = DATA.filter(({ priority, status, title }) => {
        const isSelectedTitle = inputtedTitle.length
          ? title.toUpperCase().includes(inputtedTitle.toUpperCase())
          : true

        const isSelectedStatus = selectedStatuses.length
          ? selectedStatuses.includes(status)
          : true

        const isSelectedPriority = selectedPriorities.length
          ? selectedPriorities.includes(priority)
          : true

        return isSelectedStatus && isSelectedPriority && isSelectedTitle
      })

      if (!sortKey || !sortOrder) return filtered

      return filtered.toSorted((a, b) => {
        const aValue = a[sortKey]
        const bValue = b[sortKey]

        const comparison = aValue.localeCompare(bValue)
        return sortOrder === "asc" ? comparison : -comparison
      })
    }, [
      inputtedTitle,
      selectedPriorities,
      selectedStatuses,
      sortKey,
      sortOrder,
    ])

    const paginatedData = useMemo<Data[]>(() => {
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize
      return computedData.slice(start, end)
    }, [computedData, currentPage, pageSize])

    const hasTitle = selectedViews.includes("title")
    const hasStatus = selectedViews.includes("status")
    const hasPriority = selectedViews.includes("priority")

    const taskColumnWidth = useMemo<StyleProps>(
      () =>
        !hasTitle && !hasStatus && !hasPriority
          ? { minW: "12.5%" }
          : { minW: "24", w: "12.5%" },
      [hasTitle, hasStatus, hasPriority],
    )

    const sortableColumnWidth = useMemo<StyleProps>(
      () => (hasTitle ? { w: "12.5%" } : { minW: "12.5%" }),
      [hasTitle],
    )

    assignRef(titleRef, setInputtedTitle)
    assignRef(statusRef, setSelectedStatuses)
    assignRef(priorityRef, setSelectedPriorities)
    assignRef(viewRef, setSelectedViews)

    const hasData = !!computedData.length

    const handleRowClick = useCallback<(id: string) => void>((id) => {
      setSelectedRows((prev) =>
        prev.includes(id)
          ? prev.filter((rowId) => rowId !== id)
          : [...prev, id],
      )
    }, [])

    const allSelected = useMemo<boolean>(
      () =>
        hasData &&
        paginatedData.length > 0 &&
        paginatedData.every((d) => selectedRows.includes(d.id)),
      [hasData, paginatedData, selectedRows],
    )
    const handleSelectAll = useCallback<() => void>(() => {
      if (allSelected) {
        setSelectedRows([])
      } else {
        setSelectedRows(paginatedData.map((d) => d.id))
      }
    }, [allSelected, paginatedData])

    const indeterminate = useMemo<boolean>(
      () =>
        hasData &&
        !allSelected &&
        paginatedData.some((d) => selectedRows.includes(d.id)),
      [hasData, allSelected, paginatedData, selectedRows],
    )

    const handleSort = useCallback<(key: SortKey) => void>(
      (key) => {
        if (sortKey === key) {
          if (sortOrder === null) {
            setSortOrder("desc")
          } else if (sortOrder === "desc") {
            setSortOrder("asc")
          } else {
            setSortOrder(null)
            setSortKey(null)
          }
        } else {
          setSortKey(key)
          setSortOrder("desc")
        }
      },
      [sortKey, sortOrder],
    )

    const thProps = useMemo<NativeTable.ThProps>(
      () => ({
        textAlign: "left",
      }),
      [],
    )

    return (
      <VStack alignItems="center">
        <Box borderWidth="1px" overflowX="auto" rounded="md" w="full">
          <NativeTable.Root
            aria-colcount={
              (hasTitle ? 1 : 0) +
              (hasStatus ? 1 : 0) +
              (hasPriority ? 1 : 0) +
              2
            }
            aria-rowcount={paginatedData.length}
            borderCollapse="collapse"
            highlightOnHover={hasData}
            highlightOnSelected={hasData}
            whiteSpace={{ base: "inherit", lg: "nowrap" }}
          >
            <NativeTable.Thead>
              <NativeTable.Tr>
                <NativeTable.Th {...thProps}>
                  <Show when={hasData}>
                    <Checkbox
                      aria-label="Select all rows"
                      checked={allSelected}
                      cursor="pointer"
                      indeterminate={indeterminate}
                      onClick={handleSelectAll}
                    />
                  </Show>
                </NativeTable.Th>
                <NativeTable.Th {...taskColumnWidth} {...thProps}>
                  Task
                </NativeTable.Th>
                <Show when={hasTitle}>
                  <NativeTable.Th minW="60%" {...thProps}>
                    Title
                  </NativeTable.Th>
                </Show>
                <Show when={hasStatus}>
                  <NativeTable.Th
                    {...sortableColumnWidth}
                    {...thProps}
                    cursor="pointer"
                    onClick={() => handleSort("status")}
                  >
                    <HStack gap="xs">
                      <SortIcon
                        currentKey={sortKey}
                        currentOrder={sortOrder}
                        targetKey="status"
                      />
                      <Text>Status</Text>
                    </HStack>
                  </NativeTable.Th>
                </Show>
                <Show when={hasPriority}>
                  <NativeTable.Th
                    {...sortableColumnWidth}
                    {...thProps}
                    cursor="pointer"
                    onClick={() => handleSort("priority")}
                  >
                    <HStack gap="xs">
                      <SortIcon
                        currentKey={sortKey}
                        currentOrder={sortOrder}
                        targetKey="priority"
                      />
                      <Text>Priority</Text>
                    </HStack>
                  </NativeTable.Th>
                </Show>
                <NativeTable.Th w="2.5%" />
              </NativeTable.Tr>
            </NativeTable.Thead>
            <NativeTable.Tbody>
              {!hasData ? (
                <NativeTable.Tr>
                  <NativeTable.Td colSpan={6} textAlign="center">
                    <Text color="muted" h="3xs" lineHeight="3xs">
                      No results.
                    </Text>
                  </NativeTable.Td>
                </NativeTable.Tr>
              ) : (
                <For each={paginatedData}>
                  {(row) => (
                    <TableRow
                      key={row.id}
                      hasPriority={hasPriority}
                      hasStatus={hasStatus}
                      hasTitle={hasTitle}
                      row={row}
                      selected={selectedRows.includes(row.id)}
                      onRowClick={handleRowClick}
                    />
                  )}
                </For>
              )}
            </NativeTable.Tbody>
          </NativeTable.Root>
        </Box>

        <Show when={hasData}>
          <Grid templateColumns="1fr auto 1fr" w="full">
            <Spacer />
            <Pagination.Root
              size="xs"
              page={currentPage}
              total={Math.ceil(computedData.length / pageSize)}
              withEdges
              onChange={onChangeCurrentPage}
            />
            <Field.Root justifySelf="end" w="24">
              <Select.Root
                aria-label="Select page size"
                defaultValue="20"
                items={PAGE_SIZE_ITEMS}
                onChange={(value) => setPageSize(Number(value))}
              />
            </Field.Root>
          </Grid>
        </Show>
      </VStack>
    )
  },
)

DataTable.displayName = "DataTable"

interface SortIconProps {
  currentKey: null | SortKey
  currentOrder: SortOrder
  targetKey: SortKey
}

const SortIcon = memo<SortIconProps>(
  ({ currentKey, currentOrder, targetKey }) => {
    if (currentKey !== targetKey || currentOrder === null) {
      return <ChevronsUpDownIcon color="muted" fontSize="sm" />
    }
    if (currentOrder === "desc") {
      return <ChevronDownIcon fontSize="sm" />
    }
    return <ChevronUpIcon fontSize="sm" />
  },
)

SortIcon.displayName = "SortIcon"

interface TableRowProps extends NativeTable.TrProps {
  hasPriority: boolean
  hasStatus: boolean
  hasTitle: boolean
  row: Data
  selected: boolean
  onRowClick: (id: string) => void
}

const TableRow = memo<TableRowProps>(
  ({
    hasPriority,
    hasStatus,
    hasTitle,
    row,
    selected,
    onRowClick,
    ...rest
  }) => {
    const tdProps = useMemo<NativeTable.TdProps>(
      () => ({ verticalAlign: "middle" }),
      [],
    )

    const StatusIcon = STATUS[row.status].icon

    const PriorityIcon = PRIORITY[row.priority].icon

    return (
      <NativeTable.Tr
        aria-label={`Select row ${row.id} ${row.title}`}
        aria-selected={selected}
        bg={selected ? ["blackAlpha.50", "whiteAlpha.50"] : undefined}
        _hover={{
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        }}
        onClick={() => onRowClick(row.id)}
        {...rest}
      >
        <NativeTable.Td {...tdProps}>
          <Checkbox checked={selected} />
        </NativeTable.Td>
        <NativeTable.Td {...tdProps}>{row.id}</NativeTable.Td>
        <Show when={hasTitle}>
          <NativeTable.Td {...tdProps}>
            <HStack gap="sm">
              <Show when={row.label}>
                <Tag
                  colorScheme={
                    row.label === "Bug"
                      ? "red"
                      : row.label === "Feature"
                        ? "purple"
                        : "blue"
                  }
                  size="sm"
                  variant="outline"
                  minW="auto"
                >
                  {row.label}
                </Tag>
              </Show>
              <Text as="span" lineClamp={1}>
                {row.title}
              </Text>
            </HStack>
          </NativeTable.Td>
        </Show>
        <Show when={hasStatus}>
          <NativeTable.Td {...tdProps}>
            <Show when={row.status}>
              <HStack gap="sm">
                <StatusIcon color="fg.muted" />
                <Text as="span" lineClamp={1}>
                  {STATUS[row.status].label}
                </Text>
              </HStack>
            </Show>
          </NativeTable.Td>
        </Show>
        <Show when={hasPriority}>
          <NativeTable.Td {...tdProps}>
            <Show when={row.priority}>
              <HStack gap="sm">
                <PriorityIcon color="fg.muted" />
                <Text as="span" lineClamp={1}>
                  {PRIORITY[row.priority].label}
                </Text>
              </HStack>
            </Show>
          </NativeTable.Td>
        </Show>
        <NativeTable.Td {...tdProps}>
          <ControlMenu aria-label={`Control menu for ${row.id}`} />
        </NativeTable.Td>
      </NativeTable.Tr>
    )
  },
)

TableRow.displayName = "TableRow"
