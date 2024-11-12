import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ThermometerSnowflake as OriginalThermometerSnowflake } from "lucide-react"

/**
 * `ThermometerSnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSnowflakeIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalThermometerSnowflake} {...props} />
  ),
)

/**
 * `ThermometerSnowflake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ThermometerSnowflakeIcon` instead.
 */
export const ThermometerSnowflake = ThermometerSnowflakeIcon
