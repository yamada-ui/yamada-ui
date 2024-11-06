import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RockingChair as LucideRockingChairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RockingChairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RockingChairIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRockingChairIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RockingChairIcon` instead.
 */
export const RockingChair = RockingChairIcon
