import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WifiLow as LucideWifiLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiLowIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWifiLowIcon} {...props} />
))

/**
 * @deprecated Use `WifiLowIcon` instead.
 */
export const WifiLow = WifiLowIcon
