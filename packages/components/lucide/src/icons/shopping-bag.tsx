import { forwardRef } from "@yamada-ui/core"
import { ShoppingBag as ShoppingBagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShoppingBagProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBag = forwardRef<ShoppingBagProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShoppingBagIcon} {...props} />
))
