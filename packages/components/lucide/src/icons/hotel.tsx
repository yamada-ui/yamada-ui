import { forwardRef } from "@yamada-ui/core"
import { Hotel as HotelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HotelProps = LucideIconProps

/**
 * `Hotel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hotel = forwardRef<HotelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HotelIcon} {...props} />
))
