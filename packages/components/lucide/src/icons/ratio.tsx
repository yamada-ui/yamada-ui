import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ratio as LucideRatioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RatioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RatioIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRatioIcon} {...props} />
))

/**
 * @deprecated Use `RatioIcon` instead.
 */
export const Ratio = RatioIcon
