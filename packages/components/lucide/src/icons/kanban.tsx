import { forwardRef } from "@yamada-ui/core"
import { Kanban as KanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type KanbanProps = LucideIconProps

/**
 * `Kanban` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Kanban = forwardRef<KanbanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KanbanIcon} {...props} />
))
