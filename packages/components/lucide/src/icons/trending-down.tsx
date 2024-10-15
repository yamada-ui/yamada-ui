import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrendingDown as TrendingDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrendingDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingDown = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrendingDownIcon} {...props} />
))
