import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Snowflake as LucideSnowflakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SnowflakeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSnowflakeIcon} {...props} />,
)

/**
 * @deprecated Use `SnowflakeIcon` instead.
 */
export const Snowflake = SnowflakeIcon
