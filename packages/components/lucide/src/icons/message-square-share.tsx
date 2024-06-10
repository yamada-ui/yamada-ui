import { forwardRef } from "@yamada-ui/core"
import { MessageSquareShare as MessageSquareShareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareShareProps = LucideIconProps

/**
 * `MessageSquareShare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareShare = forwardRef<MessageSquareShareProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareShareIcon} {...props} />
  ),
)
