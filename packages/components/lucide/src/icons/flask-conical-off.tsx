import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FlaskConicalOff as OriginalFlaskConicalOff } from "lucide-react"

/**
 * `FlaskConicalOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlaskConicalOffIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFlaskConicalOff} {...props} />,
)

/**
 * `FlaskConicalOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FlaskConicalOffIcon` instead.
 */
export const FlaskConicalOff = FlaskConicalOffIcon
