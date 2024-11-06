import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareKanban as LucideSquareKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareKanbanIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareKanbanIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareKanbanIcon` instead.
 */
export const SquareKanban = SquareKanbanIcon
