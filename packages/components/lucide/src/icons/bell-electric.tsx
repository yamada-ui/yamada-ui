import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BellElectric as LucideBellElectricIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellElectricIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellElectricIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBellElectricIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BellElectricIcon` instead.
 */
export const BellElectric = BellElectricIcon
