import { forwardRef } from "@yamada-ui/core"
import { MessageSquareX as MessageSquareXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareXProps = LucideIconProps

/**
 * `MessageSquareX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareX = forwardRef<MessageSquareXProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageSquareXIcon} {...props} />,
)
