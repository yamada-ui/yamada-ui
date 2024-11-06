import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gem as LucideGemIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GemIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GemIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGemIcon} {...props} />
))

/**
 * @deprecated Use `GemIcon` instead.
 */
export const Gem = GemIcon
