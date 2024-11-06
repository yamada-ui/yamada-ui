import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { House as LucideHouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HouseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHouseIcon} {...props} />
))

/**
 * @deprecated Use `HouseIcon` instead.
 */
export const House = HouseIcon
