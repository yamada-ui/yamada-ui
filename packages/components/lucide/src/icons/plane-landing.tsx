import { forwardRef } from "@yamada-ui/core"
import { PlaneLanding as PlaneLandingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlaneLandingProps = LucideIconProps

/**
 * `PlaneLanding` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneLanding = forwardRef<PlaneLandingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PlaneLandingIcon} {...props} />,
)
