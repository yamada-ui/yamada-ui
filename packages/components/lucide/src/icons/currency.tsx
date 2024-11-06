import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Currency as LucideCurrencyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CurrencyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CurrencyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCurrencyIcon} {...props} />
))

/**
 * @deprecated Use `CurrencyIcon` instead.
 */
export const Currency = CurrencyIcon
