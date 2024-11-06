import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Quote as LucideQuoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `QuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const QuoteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideQuoteIcon} {...props} />
))

/**
 * @deprecated Use `QuoteIcon` instead.
 */
export const Quote = QuoteIcon
