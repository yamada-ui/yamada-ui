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
import { priority } from "../../data/data"
import { tasks, type Task } from "../../data/tasks"

interface PriorityProps {
  filterPriority: Record<Task["priority"], boolean>
  setFilterPriority: Dispatch<SetStateAction<Record<Task["priority"], boolean>>>
}

export const Priority: FC<PriorityProps> = ({
  filterPriority,
  setFilterPriority,
}) => {
  const [searchPriority, setSearchPriority] = useState("")

  const handleCheckPriority = (priority: Task["priority"]) => {
    setFilterPriority((prev) => ({ ...prev, [priority]: !prev[priority] }))
  }

  const clearFilterPriority = () => {
    setFilterPriority(
      (prev) =>
        Object.fromEntries(
          Object.keys(prev).map((key) => [key, false]),
        ) as Record<Task["priority"], boolean>,
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
          Priority
          {Object.values(filterPriority).some(Boolean) &&
            (Object.entries(priority).filter(([key]) => filterPriority[key])
              .length < 3 ? (
              Object.entries(priority)
                .filter(([key]) => filterPriority[key])
                .map(([key, value]) => (
                  <Tag key={key} colorScheme="neutral" size="sm">
                    {value.label}
                  </Tag>
                ))
            ) : (
              <Tag colorScheme="neutral" size="sm">
                {
                  Object.keys(priority).filter((key) => filterPriority[key])
                    .length
                }{" "}
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
            placeholder="Priority"
            variant="unstyled"
            size="sm"
            value={searchPriority}
            onChange={(e) => setSearchPriority(e.target.value)}
          />
        </InputGroup>
        <MenuDivider />
        {Object.entries(priority)
          .filter(([, value]) => value.label.includes(searchPriority))
          .map(([key, value]) => (
            <MenuItem key={key} p={0}>
              <Checkbox
                width="100%"
                px={3}
                py={2}
                isChecked={filterPriority[key]}
                onChange={() => handleCheckPriority(key as Task["priority"])}
                labelProps={{ w: "100%" }}
              >
                <Flex alignItems="center" gap={2}>
                  {value.icon}
                  <Text fontSize="sm" fontWeight="bold">
                    {value.label}
                  </Text>
                  <Spacer />
                  <Text size="xs">
                    {tasks.filter((task) => task.priority === key).length}
                  </Text>
                </Flex>
              </Checkbox>
            </MenuItem>
          ))}
        {Object.values(filterPriority).some(Boolean) && (
          <>
            <MenuDivider />
            <MenuItem justifyContent="center" onClick={clearFilterPriority}>
              Clear filters
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}
