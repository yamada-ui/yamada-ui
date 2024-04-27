import {
  Flex,
  Option,
  Pagination,
  Select,
  Spacer,
  Text,
} from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import type { Task } from "../data/tasks"

interface FooterProps {
  rowSelection: Record<Task["id"], boolean>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  pageSize: 10 | 20 | 30 | 40 | 50
  setPageSize: Dispatch<SetStateAction<10 | 20 | 30 | 40 | 50>>
  filteredTasks: Task[]
}

export const Footer: FC<FooterProps> = ({
  rowSelection,
  page,
  setPage,
  pageSize,
  setPageSize,
  filteredTasks,
}) => {
  const handleSelect = (value: string) => {
    const valueAsNumber = Number.parseInt(value, 10)
    if ([10, 20, 30, 40, 50].includes(valueAsNumber)) {
      setPageSize(valueAsNumber as 10 | 20 | 30 | 40 | 50)

      const lastPage = Math.ceil(filteredTasks.length / valueAsNumber)
      if (page > lastPage) setPage(lastPage)
    }
  }

  return (
    <Flex alignItems="center" g={8}>
      <Text fontSize="sm">
        {filteredTasks.filter((task) => rowSelection[task.id]).length} of{" "}
        {filteredTasks.length} row(s) selected.
      </Text>
      <Spacer />
      <Flex alignItems="center" g={4}>
        <Text fontSize="sm" fontWeight="bold">
          Rows per page
        </Text>
        <Select value={`${pageSize}`} onChange={handleSelect} w={24} size="sm">
          {[10, 20, 30, 40, 50].map((option) => (
            <Option key={option} value={`${option}`}>
              {option}
            </Option>
          ))}
        </Select>
      </Flex>
      <Text fontSize="sm" fontWeight="bold">
        Page {page} of {Math.ceil(filteredTasks.length / pageSize)}
      </Text>
      <Pagination
        total={Math.ceil(filteredTasks.length / pageSize)}
        page={page}
        onChange={setPage}
        size="sm"
      />
    </Flex>
  )
}
