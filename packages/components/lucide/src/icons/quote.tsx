import { forwardRef } from "@yamada-ui/core"
import { Quote as QuoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type QuoteProps = LucideIconProps

/**
 * `Quote` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Quote = forwardRef<QuoteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={QuoteIcon} {...props} />
))
