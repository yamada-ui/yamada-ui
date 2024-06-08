import { forwardRef } from "@yamada-ui/core"
import { Sunrise as SunriseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunriseProps = LucideIconProps

/**
 * `Sunrise` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sunrise = forwardRef<SunriseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunriseIcon} {...props} />
))
