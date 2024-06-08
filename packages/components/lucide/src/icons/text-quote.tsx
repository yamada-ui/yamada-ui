import { forwardRef } from "@yamada-ui/core"
import { TextQuote as TextQuoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextQuoteProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextQuote = forwardRef<TextQuoteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TextQuoteIcon} {...props} />
))
