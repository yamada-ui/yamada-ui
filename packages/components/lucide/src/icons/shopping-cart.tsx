import { forwardRef } from "@yamada-ui/core"
import { ShoppingCart as ShoppingCartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShoppingCartProps = LucideIconProps

/**
 * `ShoppingCart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingCart = forwardRef<ShoppingCartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ShoppingCartIcon} {...props} />,
)
