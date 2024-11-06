import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CreditCard as LucideCreditCardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CreditCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreditCardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCreditCardIcon} {...props} />,
)

/**
 * @deprecated Use `CreditCardIcon` instead.
 */
export const CreditCard = CreditCardIcon
