import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lightbulb as LucideLightbulbIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LightbulbIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LightbulbIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLightbulbIcon} {...props} />,
)

/**
 * @deprecated Use `LightbulbIcon` instead.
 */
export const Lightbulb = LightbulbIcon
