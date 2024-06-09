import { forwardRef } from "@yamada-ui/core"
import { MessageCircleX as MessageCircleXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleXProps = LucideIconProps

/**
 * `MessageCircleX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleX = forwardRef<MessageCircleXProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageCircleXIcon} {...props} />,
)
