import { forwardRef } from "@yamada-ui/core"
import { WifiOff as WifiOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WifiOffProps = LucideIconProps

/**
 * `WifiOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiOff = forwardRef<WifiOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WifiOffIcon} {...props} />
))
