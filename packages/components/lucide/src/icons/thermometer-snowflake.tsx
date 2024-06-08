import { forwardRef } from "@yamada-ui/core"
import { ThermometerSnowflake as ThermometerSnowflakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ThermometerSnowflakeProps = LucideIconProps

/**
 * `ThermometerSnowflake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSnowflake = forwardRef<
  ThermometerSnowflakeProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={ThermometerSnowflakeIcon} {...props} />
))
