import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryFull as BatteryFullIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryFull` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryFull = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BatteryFullIcon} {...props} />
))
