import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PlaneTakeoff as OriginalPlaneTakeoff } from "lucide-react"

/**
 * `PlaneTakeoffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneTakeoffIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPlaneTakeoff} {...props} />
))

/**
 * `PlaneTakeoff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PlaneTakeoffIcon` instead.
 */
export const PlaneTakeoff = PlaneTakeoffIcon
