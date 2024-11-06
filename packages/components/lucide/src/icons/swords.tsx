import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Swords as LucideSwordsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SwordsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwordsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSwordsIcon} {...props} />
))

/**
 * @deprecated Use `SwordsIcon` instead.
 */
export const Swords = SwordsIcon
