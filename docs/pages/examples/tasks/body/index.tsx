import { Flex, Tag, Tbody, Td, Tr } from "@yamada-ui/react"
import { priority, status } from "../data/data"
import { tasks } from "../data/tasks"

export const Body = () => (
  <Tbody>
    {tasks.map((task) => (
      <Tr key={task.id}>
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
