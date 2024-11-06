import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EggFried as LucideEggFriedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EggFriedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggFriedIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEggFriedIcon} {...props} />
))

/**
 * @deprecated Use `EggFriedIcon` instead.
 */
export const EggFried = EggFriedIcon
