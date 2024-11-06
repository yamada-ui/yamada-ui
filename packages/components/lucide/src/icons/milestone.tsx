import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Milestone as LucideMilestoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MilestoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilestoneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMilestoneIcon} {...props} />,
)

/**
 * @deprecated Use `MilestoneIcon` instead.
 */
export const Milestone = MilestoneIcon
