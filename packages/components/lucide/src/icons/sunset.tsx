import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sunset as LucideSunsetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunsetIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunsetIcon} {...props} />
))

/**
 * @deprecated Use `SunsetIcon` instead.
 */
export const Sunset = SunsetIcon
