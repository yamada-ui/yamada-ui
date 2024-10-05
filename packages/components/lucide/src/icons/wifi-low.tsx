import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WifiLow as WifiLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WifiLow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiLow = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WifiLowIcon} {...props} />
))
