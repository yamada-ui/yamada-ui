import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Worm as LucideWormIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WormIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WormIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWormIcon} {...props} />
))

/**
 * @deprecated Use `WormIcon` instead.
 */
export const Worm = WormIcon
