import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WifiZero as LucideWifiZeroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiZeroIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWifiZeroIcon} {...props} />
))

/**
 * @deprecated Use `WifiZeroIcon` instead.
 */
export const WifiZero = WifiZeroIcon
