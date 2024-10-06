import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HousePlug as HousePlugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HousePlug` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlug = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HousePlugIcon} {...props} />
))
