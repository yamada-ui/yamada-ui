import { forwardRef } from "@yamada-ui/core"
import { Snowflake as SnowflakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SnowflakeProps = LucideIconProps

/**
 * `Snowflake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Snowflake = forwardRef<SnowflakeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SnowflakeIcon} {...props} />
))
