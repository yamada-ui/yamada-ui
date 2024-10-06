import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EggFried as EggFriedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EggFried` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggFried = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EggFriedIcon} {...props} />
))
