import type { Doc } from "@/.velite"
import type { TagProps } from "@yamada-ui/react"
import { Tag } from "@yamada-ui/react"

function getColorScheme(status: Doc["status"]) {
  switch (status) {
    case "new":
      return "blue"
    case "experimental":
      return "purple"
    case "planned":
      return "yellow"
    case "stable":
      return "green"
    case "deprecated":
      return "red"
    default:
      return "gray"
  }
}

export interface StatusProps extends TagProps {
  status: Doc["status"]
}

export function Status({ status, ...rest }: StatusProps) {
  return (
    <Tag
      colorScheme={getColorScheme(status)}
      size="sm"
      variant={{ base: "subtle", _groupCurrent: "solid" }}
      minW="auto"
      {...rest}
    >
      {status}
    </Tag>
  )
}
