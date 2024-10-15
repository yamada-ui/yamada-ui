import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Snowflake as SnowflakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Snowflake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Snowflake = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SnowflakeIcon} {...props} />
))
