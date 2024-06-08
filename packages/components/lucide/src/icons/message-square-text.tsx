import { forwardRef } from "@yamada-ui/core"
import { MessageSquareText as MessageSquareTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareTextProps = LucideIconProps

/**
 * `MessageSquareText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareText = forwardRef<MessageSquareTextProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareTextIcon} {...props} />
  ),
)
