import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WifiOff as LucideWifiOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWifiOffIcon} {...props} />
))

/**
 * @deprecated Use `WifiOffIcon` instead.
 */
export const WifiOff = WifiOffIcon
