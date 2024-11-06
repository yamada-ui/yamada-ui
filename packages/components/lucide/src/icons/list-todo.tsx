import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListTodo as LucideListTodoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListTodoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTodoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListTodoIcon} {...props} />
))

/**
 * @deprecated Use `ListTodoIcon` instead.
 */
export const ListTodo = ListTodoIcon
