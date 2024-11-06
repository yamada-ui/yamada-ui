import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Battery as LucideBatteryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBatteryIcon} {...props} />
))

/**
 * @deprecated Use `BatteryIcon` instead.
 */
export const Battery = BatteryIcon
