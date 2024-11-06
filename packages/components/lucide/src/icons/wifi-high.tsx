import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WifiHigh as LucideWifiHighIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiHighIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWifiHighIcon} {...props} />
))

/**
 * @deprecated Use `WifiHighIcon` instead.
 */
export const WifiHigh = WifiHighIcon
