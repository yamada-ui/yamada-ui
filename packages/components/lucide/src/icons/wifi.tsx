import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wifi as LucideWifiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWifiIcon} {...props} />
))

/**
 * @deprecated Use `WifiIcon` instead.
 */
export const Wifi = WifiIcon
