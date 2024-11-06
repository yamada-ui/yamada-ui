import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PlaneTakeoff as LucidePlaneTakeoffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlaneTakeoffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneTakeoffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePlaneTakeoffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PlaneTakeoffIcon` instead.
 */
export const PlaneTakeoff = PlaneTakeoffIcon
