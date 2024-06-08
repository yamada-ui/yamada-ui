import { forwardRef } from "@yamada-ui/core"
import { BatteryWarning as BatteryWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryWarningProps = LucideIconProps

/**
 * `BatteryWarning` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryWarning = forwardRef<BatteryWarningProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BatteryWarningIcon} {...props} />,
)
