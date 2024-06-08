import { forwardRef } from "@yamada-ui/core"
import { SquareDashedKanban as SquareDashedKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDashedKanbanProps = LucideIconProps

/**
 * `SquareDashedKanban` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedKanban = forwardRef<SquareDashedKanbanProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareDashedKanbanIcon} {...props} />
  ),
)
