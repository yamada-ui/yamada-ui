import { forwardRef } from "@yamada-ui/core"
import { PlaneTakeoff as PlaneTakeoffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlaneTakeoffProps = LucideIconProps

/**
 * `PlaneTakeoff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneTakeoff = forwardRef<PlaneTakeoffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PlaneTakeoffIcon} {...props} />,
)
