import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TextQuote as LucideTextQuoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TextQuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextQuoteIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTextQuoteIcon} {...props} />,
)

/**
 * @deprecated Use `TextQuoteIcon` instead.
 */
export const TextQuote = TextQuoteIcon
