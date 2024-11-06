import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LightbulbOff as LucideLightbulbOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LightbulbOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LightbulbOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLightbulbOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LightbulbOffIcon` instead.
 */
export const LightbulbOff = LightbulbOffIcon
