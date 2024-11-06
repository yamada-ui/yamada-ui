import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SunSnow as LucideSunSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunSnowIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunSnowIcon} {...props} />
))

/**
 * @deprecated Use `SunSnowIcon` instead.
 */
export const SunSnow = SunSnowIcon
