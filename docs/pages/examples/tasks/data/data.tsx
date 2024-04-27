import type { ReactElement } from "react"
import type { IconType } from "react-icons"
import {
  BsArrowDown,
  BsArrowRight,
  BsArrowUp,
  BsCheckCircle,
  BsCircle,
  BsQuestionCircle,
  BsStopwatch,
  BsXCircle,
} from "react-icons/bs"
import type { Task } from "./tasks"

interface Status {
  label: string
  icon: ReactElement<IconType>
}

interface Priority {
  label: string
  icon: ReactElement<IconType>
}

export interface SortOption {
  by: Exclude<keyof Task, "id" | "label">
  order: "asc" | "desc"
}

const iconProps = {
  size: 16,
  color: "#777",
}

export const status: Record<Task["status"], Status> = {
  "in progress": {
    label: "In Progress",
    icon: <BsStopwatch {...iconProps} />,
  },
  backlog: {
    label: "Backlog",
    icon: <BsQuestionCircle {...iconProps} />,
  },
  todo: {
    label: "Todo",
    icon: <BsCircle {...iconProps} />,
  },
  done: {
    label: "Done",
    icon: <BsCheckCircle {...iconProps} />,
  },
  canceled: {
    label: "Canceled",
    icon: <BsXCircle {...iconProps} />,
  },
}

export const priority: Record<Task["priority"], Priority> = {
  low: {
    label: "Low",
    icon: <BsArrowDown {...iconProps} />,
  },
  medium: {
    label: "Medium",
    icon: <BsArrowRight {...iconProps} />,
  },
  high: {
    label: "High",
    icon: <BsArrowUp {...iconProps} />,
  },
}
