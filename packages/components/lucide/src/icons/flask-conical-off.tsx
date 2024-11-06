import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlaskConicalOff as LucideFlaskConicalOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlaskConicalOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConicalOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlaskConicalOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlaskConicalOffIcon` instead.
 */
export const FlaskConicalOff = FlaskConicalOffIcon
