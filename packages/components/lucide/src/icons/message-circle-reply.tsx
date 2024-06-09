import { forwardRef } from "@yamada-ui/core"
import { MessageCircleReply as MessageCircleReplyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleReplyProps = LucideIconProps

/**
 * `MessageCircleReply` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleReply = forwardRef<MessageCircleReplyProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCircleReplyIcon} {...props} />
  ),
)
