import { forwardRef } from "@yamada-ui/core"
import { Currency as CurrencyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CurrencyProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Currency = forwardRef<CurrencyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CurrencyIcon} {...props} />
))
