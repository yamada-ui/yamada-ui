import { forwardRef } from "@yamada-ui/core"
import { MessageSquareQuote as MessageSquareQuoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareQuoteProps = LucideIconProps

/**
 * `MessageSquareQuote` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareQuote = forwardRef<MessageSquareQuoteProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareQuoteIcon} {...props} />
  ),
)
