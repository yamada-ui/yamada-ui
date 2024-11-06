import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PlaneLanding as LucidePlaneLandingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlaneLandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneLandingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePlaneLandingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PlaneLandingIcon` instead.
 */
export const PlaneLanding = PlaneLandingIcon
