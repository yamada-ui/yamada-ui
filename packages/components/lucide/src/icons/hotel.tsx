import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hotel as LucideHotelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HotelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HotelIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHotelIcon} {...props} />
))

/**
 * @deprecated Use `HotelIcon` instead.
 */
export const Hotel = HotelIcon
