import { forwardRef } from "@yamada-ui/core"
import { ListTodo as ListTodoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListTodoProps = LucideIconProps

/**
 * `ListTodo` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTodo = forwardRef<ListTodoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListTodoIcon} {...props} />
))
