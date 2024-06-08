import { forwardRef } from "@yamada-ui/core"
import { Battery as BatteryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryProps = LucideIconProps

/**
 * `Battery` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Battery = forwardRef<BatteryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BatteryIcon} {...props} />
))
