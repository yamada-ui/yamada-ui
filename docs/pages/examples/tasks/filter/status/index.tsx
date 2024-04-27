import {
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Tag,
  Text,
} from "@yamada-ui/react"
import { useState } from "react"
import type { Dispatch, SetStateAction, FC } from "react"
import { BsPlusCircle, BsSearch } from "react-icons/bs"
import { status } from "../../data/data"
import { tasks, type Task } from "../../data/tasks"

interface StatusProps {
  filterStatus: Record<Task["status"], boolean>
  setFilterStatus: Dispatch<SetStateAction<Record<Task["status"], boolean>>>
}

export const Status: FC<StatusProps> = ({ filterStatus, setFilterStatus }) => {
  const [searchStatus, setSearchStatus] = useState("")

  const handleCheck = (status: Task["status"]) => {
    setFilterStatus((prev) => ({ ...prev, [status]: !prev[status] }))
  }

  const clearFilter = () => {
    setFilterStatus(
      (prev) =>
        Object.fromEntries(
          Object.keys(prev).map((key) => [key, false]),
        ) as Record<Task["status"], boolean>,
    )
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        size="sm"
        variant="outline"
        borderStyle="dashed"
        leftIcon={<Icon as={BsPlusCircle} />}
      >
        <Flex alignItems="center" gap={2}>
          Status
          {Object.values(filterStatus).some(Boolean) &&
            (Object.entries(status).filter(([key]) => filterStatus[key])
              .length < 3 ? (
              Object.entries(status)
                .filter(([key]) => filterStatus[key])
                .map(([key, value]) => (
                  <Tag key={key} colorScheme="neutral" size="sm">
                    {value.label}
                  </Tag>
                ))
            ) : (
              <Tag colorScheme="neutral" size="sm">
                {Object.keys(status).filter((key) => filterStatus[key]).length}{" "}
                selected
              </Tag>
            ))}
        </Flex>
      </MenuButton>
      <MenuList>
        <InputGroup>
          <InputLeftElement>
            <Icon as={BsSearch} />
          </InputLeftElement>
          <Input
            placeholder="Status"
            variant="unstyled"
            size="sm"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
          />
        </InputGroup>
        <MenuDivider />
        {Object.entries(status)
          .filter(([, value]) => value.label.includes(searchStatus))
          .map(([key, value]) => (
            <MenuItem key={key} p={0}>
              <Checkbox
                width="100%"
                px={3}
                py={2}
                isChecked={filterStatus[key]}
                onChange={() => handleCheck(key as Task["status"])}
                labelProps={{ w: "100%" }}
              >
                <Flex alignItems="center" gap={2}>
                  {value.icon}
                  <Text fontSize="sm" fontWeight="bold">
                    {value.label}
                  </Text>
                  <Spacer />
                  <Text fontSize="sm">
                    {tasks.filter((task) => task.status === key).length}
                  </Text>
                </Flex>
              </Checkbox>
            </MenuItem>
          ))}
        {Object.values(filterStatus).some(Boolean) && (
          <>
            <MenuDivider />
            <MenuItem justifyContent="center" onClick={clearFilter}>
              Clear filters
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}
