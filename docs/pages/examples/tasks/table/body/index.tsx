import { Checkbox, Flex, Tag, Tbody, Td, Tr } from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import { priority, status } from "../../data/data"
import type { Task } from "../../data/tasks"
import { tasks } from "../../data/tasks"

interface BodyProps {
  rowSelection: Record<Task["id"], boolean>
  setRowSelection: Dispatch<SetStateAction<Record<Task["id"], boolean>>>
}

export const Body: FC<BodyProps> = ({ rowSelection, setRowSelection }) => {
  const handleCheck = (id: Task["id"]) => {
    setRowSelection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Tbody>
      {tasks.map((task) => (
        <Tr key={task.id}>
          <Td>
            <Checkbox
              isChecked={rowSelection[task.id]}
              onChange={() => handleCheck(task.id)}
            />
          </Td>
          <Td>{task.id}</Td>
          <Td>
            <Flex alignItems="center" gap={4}>
              <Tag colorScheme="neutral">{task.label}</Tag>
              {task.title}
            </Flex>
          </Td>
          <Td>
            <Flex alignItems="center" gap={4}>
              {status[task.status].icon}
              {status[task.status].label}
            </Flex>
          </Td>
          <Td>
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
