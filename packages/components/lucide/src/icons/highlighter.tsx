import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Highlighter as HighlighterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Highlighter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Highlighter = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HighlighterIcon} {...props} />
))
