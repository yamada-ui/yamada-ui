import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HopOff as LucideHopOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HopOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HopOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHopOffIcon} {...props} />
))

/**
 * @deprecated Use `HopOffIcon` instead.
 */
export const HopOff = HopOffIcon
