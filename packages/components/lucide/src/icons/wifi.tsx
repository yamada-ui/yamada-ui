import { forwardRef } from "@yamada-ui/core"
import { Wifi as WifiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WifiProps = LucideIconProps

/**
 * `Wifi` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wifi = forwardRef<WifiProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WifiIcon} {...props} />
))
