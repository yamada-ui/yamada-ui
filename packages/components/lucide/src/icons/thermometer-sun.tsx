import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ThermometerSun as LucideThermometerSunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThermometerSunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSunIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideThermometerSunIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ThermometerSunIcon` instead.
 */
export const ThermometerSun = ThermometerSunIcon
