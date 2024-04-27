import {
  Button,
  Checkbox,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Th,
  Thead,
  Tr,
} from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import {
  BsArrowDown,
  BsArrowUp,
  BsChevronExpand,
  BsEyeSlash,
} from "react-icons/bs"
import type { SortOption } from "../../data/data"
import type { Task } from "../../data/tasks"
import { columns } from "../../data/tasks"

interface HeaderProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
  displayColumns: Record<"title" | "status" | "priority", boolean>
  setDisplayColumns: Dispatch<
    SetStateAction<Record<"title" | "status" | "priority", boolean>>
  >
  sortOption: SortOption | null
  setSortOption: Dispatch<SetStateAction<SortOption | null>>
}

const sortIcon = (column: keyof Task, sortOption: SortOption | null) => {
  if (sortOption?.by === column) {
    if (sortOption?.order === "asc") {
      return <Icon as={BsArrowUp} />
    }
    return <Icon as={BsArrowDown} />
  }
  return <Icon as={BsChevronExpand} />
}

export const Head: FC<HeaderProps> = ({
  rowSelection,
  setRowSelection,
  displayColumns,
  setDisplayColumns,
  sortOption,
  setSortOption,
}) => {
  const handleSelectAll = () => {
    const isAllSelected = Object.values(rowSelection).every(Boolean)

    setRowSelection(
      Object.fromEntries(
        Object.keys(rowSelection).map((id) => [id, !isAllSelected]),
      ),
    )
  }

  const handleHideColumn = (column: keyof Task) => {
    setDisplayColumns((prev) => ({
      ...prev,
      [column]: false,
    }))
  }

  const handleSortOption = (column: keyof Task, order: "asc" | "desc") => {
    if (column === "id" || column === "label") return
    setSortOption({ by: column, order })
  }

  return (
    <Thead>
      <Tr>
        <Th>
          <Checkbox
            isChecked={Object.values(rowSelection).every(Boolean)}
            isIndeterminate={
              Object.values(rowSelection).some(Boolean) &&
              !Object.values(rowSelection).every(Boolean)
            }
            onChange={handleSelectAll}
          />
        </Th>
        {columns.map((column) =>
          column.accessorKey === "id" ? (
            <Th key={column.accessorKey}>{column.header}</Th>
          ) : (
            displayColumns[column.accessorKey] && (
              <Th key={column.accessorKey}>
                <Menu>
                  <MenuButton
                    as={Button}
                    size="xs"
                    variant="ghost"
                    rightIcon={sortIcon(column.accessorKey, sortOption)}
                  >
                    {column.header}
                  </MenuButton>
                  <MenuList fontWeight="normal" textTransform="none">
                    <MenuItem
                      icon={<Icon as={BsArrowUp} />}
                      onClick={() =>
                        handleSortOption(column.accessorKey, "asc")
                      }
                    >
                      Asc {column.accessorKey}
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={BsArrowDown} />}
                      onClick={() =>
                        handleSortOption(column.accessorKey, "desc")
                      }
                    >
                      Desc
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      icon={<Icon as={BsEyeSlash} />}
                      onClick={() => handleHideColumn(column.accessorKey)}
                    >
                      Hide
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Th>
            )
          ),
        )}
        <Th />
      </Tr>
    </Thead>
  )
}
