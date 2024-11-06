import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WineOff as LucideWineOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WineOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WineOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWineOffIcon} {...props} />
))

/**
 * @deprecated Use `WineOffIcon` instead.
 */
export const WineOff = WineOffIcon
