import { Button, Flex, Icon, Input, Spacer } from "@yamada-ui/react"
import {
  useMemo,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react"
import { BsX } from "react-icons/bs"
import { priority, status } from "../data/data"
import type { Task } from "../data/tasks"
import { Priority } from "./priority"
import { Status } from "./status"
import { View } from "./view"

interface FilterProps {
  filterWord: string
  setFilterWord: Dispatch<SetStateAction<string>>
  filterStatus: Record<Task["status"], boolean>
  setFilterStatus: Dispatch<SetStateAction<Record<Task["status"], boolean>>>
  filterPriority: Record<Task["priority"], boolean>
  setFilterPriority: Dispatch<SetStateAction<Record<Task["priority"], boolean>>>
  displayColumns: Record<"title" | "status" | "priority", boolean>
  setDisplayColumns: Dispatch<
    SetStateAction<Record<"title" | "status" | "priority", boolean>>
  >
}

const initialFilterStatus = Object.fromEntries(
  Object.keys(status).map((key) => [key, false]),
) as Record<keyof typeof status, boolean>

const initialFilterPriority = Object.fromEntries(
  Object.keys(priority).map((key) => [key, false]),
) as Record<keyof typeof priority, boolean>

export const Filter: FC<FilterProps> = ({
  filterWord,
  setFilterWord,
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority,
  displayColumns,
  setDisplayColumns,
}) => {
  const isFiltered = useMemo(
    () =>
      [
        filterWord !== "",
        Object.values(filterStatus).some(Boolean),
        Object.values(filterPriority).some(Boolean),
      ].some(Boolean),
    [filterWord, filterStatus, filterPriority],
  )

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterWord(e.target.value)
  }

  const reset = () => {
    setFilterWord("")
    setFilterStatus(initialFilterStatus)
    setFilterPriority(initialFilterPriority)
  }

  return (
    <Flex alignItems="center" gap={4}>
      <Input
        placeholder="Filter tasks..."
        value={filterWord}
        onChange={handleInput}
        size="sm"
        maxW={64}
      />
      <Status filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <Priority
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
      {isFiltered && (
        <Button
          size="sm"
          variant="ghost"
          rightIcon={<Icon as={BsX} />}
          onClick={reset}
        >
          Reset
        </Button>
      )}
      <Spacer />
      <View
        displayColumns={displayColumns}
        setDisplayColumns={setDisplayColumns}
      />
    </Flex>
  )
}
