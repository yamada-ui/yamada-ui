import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShoppingBasket as ShoppingBasketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShoppingBasket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBasket = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ShoppingBasketIcon} {...props} />,
)
