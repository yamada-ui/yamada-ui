import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CookingPot as LucideCookingPotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CookingPotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookingPotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCookingPotIcon} {...props} />,
)

/**
 * @deprecated Use `CookingPotIcon` instead.
 */
export const CookingPot = CookingPotIcon
