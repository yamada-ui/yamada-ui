import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShoppingBasket as LucideShoppingBasketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShoppingBasketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBasketIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShoppingBasketIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShoppingBasketIcon` instead.
 */
export const ShoppingBasket = ShoppingBasketIcon
