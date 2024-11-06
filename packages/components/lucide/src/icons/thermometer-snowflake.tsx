import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ThermometerSnowflake as LucideThermometerSnowflakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThermometerSnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSnowflakeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideThermometerSnowflakeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ThermometerSnowflakeIcon` instead.
 */
export const ThermometerSnowflake = ThermometerSnowflakeIcon
