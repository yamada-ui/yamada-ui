import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UtensilsCrossed as LucideUtensilsCrossedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UtensilsCrossedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtensilsCrossedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUtensilsCrossedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UtensilsCrossedIcon` instead.
 */
export const UtensilsCrossed = UtensilsCrossedIcon
