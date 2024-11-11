import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageCircleOff as OriginalMessageCircleOff } from "lucide-react"

/**
 * `MessageCircleOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleOffIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMessageCircleOff} {...props} />,
)

/**
 * `MessageCircleOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageCircleOffIcon` instead.
 */
export const MessageCircleOff = MessageCircleOffIcon
