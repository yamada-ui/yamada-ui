import { Checkbox, Flex, Tag, Tbody, Td, Text, Tr } from "@yamada-ui/react"
import { useMemo, type Dispatch, type FC, type SetStateAction } from "react"
import { priority, status } from "../../data/data"
import type { Task } from "../../data/tasks"

interface BodyProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
  page: number
  pageSize: 10 | 20 | 30 | 40 | 50
  filteredTasks: Task[]
}

export const Body: FC<BodyProps> = ({
  rowSelection,
  setRowSelection,
  page,
  pageSize,
  filteredTasks,
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
          <Td verticalAlign="middle">
            <Flex alignItems="center" gap={4}>
              <Tag colorScheme="neutral">{task.label}</Tag>
              <Text flexShrink={1}>{task.title}</Text>
            </Flex>
          </Td>
          <Td verticalAlign="middle">
            <Flex alignItems="center" gap={4}>
              {status[task.status].icon}
              {status[task.status].label}
            </Flex>
          </Td>
          <Td verticalAlign="middle">
            <Flex alignItems="center" gap={4}>
              {priority[task.priority].icon}
              {priority[task.priority].label}
            </Flex>
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}
