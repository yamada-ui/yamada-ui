import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wine as LucideWineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWineIcon} {...props} />
))

/**
 * @deprecated Use `WineIcon` instead.
 */
export const Wine = WineIcon
