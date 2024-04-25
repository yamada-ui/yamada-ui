import {
  Checkbox,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from "@yamada-ui/react"
import { useMemo, type Dispatch, type FC, type SetStateAction } from "react"
import { BsThreeDots } from "react-icons/bs"
import { priority, status } from "../../data/data"
import type { Task } from "../../data/tasks"

interface BodyProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
  page: number
  pageSize: 10 | 20 | 30 | 40 | 50
  filteredTasks: Task[]
  displayColumns: Record<"title" | "status" | "priority", boolean>
}

export const Body: FC<BodyProps> = ({
  rowSelection,
  setRowSelection,
  page,
  pageSize,
  filteredTasks,
  displayColumns,
}) => {
  const handleCheck = (id: Task["id"]) => {
    setRowSelection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const [pageStart, pageEnd] = useMemo(() => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    return [start, end]
  }, [page, pageSize])

  return (
    <Tbody>
      {filteredTasks.slice(pageStart, pageEnd).map((task) => (
        <Tr key={task.id}>
          <Td verticalAlign="middle">
            <Checkbox
              isChecked={rowSelection[task.id]}
              onChange={() => handleCheck(task.id)}
            />
          </Td>
          <Td verticalAlign="middle">{task.id}</Td>
          {displayColumns.title && (
            <Td verticalAlign="middle">
              <Flex alignItems="center" gap={4}>
                <Tag colorScheme="neutral">{task.label}</Tag>
                <Text flexShrink={1}>{task.title}</Text>
              </Flex>
            </Td>
          )}
          {displayColumns.status && (
            <Td verticalAlign="middle">
              <Flex alignItems="center" gap={4}>
                {status[task.status].icon}
                {status[task.status].label}
              </Flex>
            </Td>
          )}
          {displayColumns.priority && (
            <Td verticalAlign="middle">
              <Flex alignItems="center" gap={4}>
                {priority[task.priority].icon}
                {priority[task.priority].label}
              </Flex>
            </Td>
          )}
          <Td verticalAlign="middle">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Icon as={BsThreeDots} />}
                size="sm"
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Make a copy</MenuItem>
                <MenuItem>Favorite</MenuItem>
                <MenuDivider />
                <MenuItem command="⌘⌫">Delete</MenuItem>
              </MenuList>
            </Menu>
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}
