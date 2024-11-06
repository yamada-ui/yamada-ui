import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HousePlug as LucideHousePlugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HousePlugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlugIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHousePlugIcon} {...props} />,
)

/**
 * @deprecated Use `HousePlugIcon` instead.
 */
export const HousePlug = HousePlugIcon
