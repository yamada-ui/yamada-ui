import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShoppingBag as LucideShoppingBagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShoppingBagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBagIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShoppingBagIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShoppingBagIcon` instead.
 */
export const ShoppingBag = ShoppingBagIcon
