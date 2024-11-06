import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sunrise as LucideSunriseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunriseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunriseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunriseIcon} {...props} />
))

/**
 * @deprecated Use `SunriseIcon` instead.
 */
export const Sunrise = SunriseIcon
