import { forwardRef } from "@yamada-ui/core"
import { WifiHigh as WifiHighIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `WifiHigh` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiHigh = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WifiHighIcon} {...props} />
))
