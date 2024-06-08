import { forwardRef } from "@yamada-ui/core"
import { MessageCircle as MessageCircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleProps = LucideIconProps

/**
 * `MessageCircle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircle = forwardRef<MessageCircleProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageCircleIcon} {...props} />,
)
