import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Thermometer as LucideThermometerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThermometerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideThermometerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ThermometerIcon` instead.
 */
export const Thermometer = ThermometerIcon
