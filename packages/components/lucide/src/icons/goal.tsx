import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Goal as LucideGoalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GoalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GoalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGoalIcon} {...props} />
))

/**
 * @deprecated Use `GoalIcon` instead.
 */
export const Goal = GoalIcon
