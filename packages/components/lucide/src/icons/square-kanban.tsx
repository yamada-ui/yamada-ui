import { forwardRef } from "@yamada-ui/core"
import { SquareKanban as SquareKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareKanbanProps = LucideIconProps

/**
 * `SquareKanban` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareKanban = forwardRef<SquareKanbanProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareKanbanIcon} {...props} />,
)
