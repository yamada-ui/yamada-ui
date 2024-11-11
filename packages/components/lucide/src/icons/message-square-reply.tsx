import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageSquareReply as OriginalMessageSquareReply } from "lucide-react"

/**
 * `MessageSquareReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareReplyIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMessageSquareReply} {...props} />,
)

/**
 * `MessageSquareReply` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageSquareReplyIcon` instead.
 */
export const MessageSquareReply = MessageSquareReplyIcon
