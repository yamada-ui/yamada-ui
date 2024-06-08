import { forwardRef } from "@yamada-ui/core"
import { CookingPot as CookingPotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CookingPotProps = LucideIconProps

/**
 * `CookingPot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookingPot = forwardRef<CookingPotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CookingPotIcon} {...props} />
))
