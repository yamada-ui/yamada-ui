import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SunMoon as LucideSunMoonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunMoonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunMoonIcon} {...props} />
))

/**
 * @deprecated Use `SunMoonIcon` instead.
 */
export const SunMoon = SunMoonIcon
