import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlaskConicalOff as FlaskConicalOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlaskConicalOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConicalOff = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlaskConicalOffIcon} {...props} />,
)
