import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hop as LucideHopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HopIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHopIcon} {...props} />
))

/**
 * @deprecated Use `HopIcon` instead.
 */
export const Hop = HopIcon
