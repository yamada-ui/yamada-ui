import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Watch as LucideWatchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WatchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WatchIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWatchIcon} {...props} />
))

/**
 * @deprecated Use `WatchIcon` instead.
 */
export const Watch = WatchIcon
