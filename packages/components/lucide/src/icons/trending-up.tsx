import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrendingUp as TrendingUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrendingUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrendingUpIcon} {...props} />
))
