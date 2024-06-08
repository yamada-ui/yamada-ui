import { forwardRef } from "@yamada-ui/core"
import { MessageSquareReply as MessageSquareReplyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareReplyProps = LucideIconProps

/**
 * `MessageSquareReply` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareReply = forwardRef<MessageSquareReplyProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareReplyIcon} {...props} />
  ),
)
