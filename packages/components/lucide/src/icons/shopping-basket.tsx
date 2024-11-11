import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ShoppingBasket as OriginalShoppingBasket } from "lucide-react"

/**
 * `ShoppingBasketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBasketIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalShoppingBasket} {...props} />
))

/**
 * `ShoppingBasket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ShoppingBasketIcon` instead.
 */
export const ShoppingBasket = ShoppingBasketIcon
