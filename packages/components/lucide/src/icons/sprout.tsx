import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sprout as LucideSproutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SproutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SproutIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSproutIcon} {...props} />
))

/**
 * @deprecated Use `SproutIcon` instead.
 */
export const Sprout = SproutIcon
