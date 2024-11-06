import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShoppingCart as LucideShoppingCartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShoppingCartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingCartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShoppingCartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShoppingCartIcon` instead.
 */
export const ShoppingCart = ShoppingCartIcon
