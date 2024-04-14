import { Flex, Option, Select, Spacer, Text } from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"

interface FooterProps {
  dataCount: number
  selectedDataCount: number
  pageSize: 10 | 20 | 30 | 40 | 50
  setPageSize: Dispatch<SetStateAction<10 | 20 | 30 | 40 | 50>>
}

export const Footer: FC<FooterProps> = ({
  dataCount,
  selectedDataCount,
  pageSize,
  setPageSize,
}) => {
  const handleSelect = (value: string) => {
    const valueAsNumber = Number.parseInt(value, 10)
    if ([10, 20, 30, 40, 50].includes(valueAsNumber)) {
      setPageSize(valueAsNumber as 10 | 20 | 30 | 40 | 50)
    }
  }

  return (
    <Flex alignItems="center" g={4}>
      <Text fontSize="sm">
        {selectedDataCount} of {dataCount} row(s) selected.
      </Text>
      <Spacer />
      <Text fontSize="sm" fontWeight="bold">
        Rows per page
      </Text>
      <Select value={`${pageSize}`} onChange={handleSelect} w={32} size="sm">
        {[10, 20, 30, 40, 50].map((option) => (
          <Option key={option} value={`${option}`}>
            {option}
          </Option>
        ))}
      </Select>
    </Flex>
  )
}
