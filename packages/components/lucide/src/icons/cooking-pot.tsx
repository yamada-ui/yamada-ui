import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CookingPot as CookingPotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CookingPot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookingPot = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CookingPotIcon} {...props} />
))
