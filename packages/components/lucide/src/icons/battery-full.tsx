import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryFull as LucideBatteryFullIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryFullIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryFullIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBatteryFullIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BatteryFullIcon` instead.
 */
export const BatteryFull = BatteryFullIcon
