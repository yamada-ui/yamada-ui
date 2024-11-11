import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageSquareOff as OriginalMessageSquareOff } from "lucide-react"

/**
 * `MessageSquareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareOffIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMessageSquareOff} {...props} />,
)

/**
 * `MessageSquareOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageSquareOffIcon` instead.
 */
export const MessageSquareOff = MessageSquareOffIcon
