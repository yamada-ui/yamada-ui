import { Flex, Tag, Tbody, Td, Tr } from "@yamada-ui/react"
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
        <Td>{task.status}</Td>
        <Td>{task.priority}</Td>
      </Tr>
    ))}
  </Tbody>
)
