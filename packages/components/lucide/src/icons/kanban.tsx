import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Kanban as LucideKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KanbanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideKanbanIcon} {...props} />
))

/**
 * @deprecated Use `KanbanIcon` instead.
 */
export const Kanban = KanbanIcon
