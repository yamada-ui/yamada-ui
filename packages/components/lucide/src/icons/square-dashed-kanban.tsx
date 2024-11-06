import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDashedKanban as LucideSquareDashedKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDashedKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedKanbanIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareDashedKanbanIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareDashedKanbanIcon` instead.
 */
export const SquareDashedKanban = SquareDashedKanbanIcon
