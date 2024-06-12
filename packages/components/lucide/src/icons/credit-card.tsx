import { forwardRef } from "@yamada-ui/core"
import { CreditCard as CreditCardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CreditCardProps = LucideIconProps

/**
 * `CreditCard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreditCard = forwardRef<CreditCardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CreditCardIcon} {...props} />
))
