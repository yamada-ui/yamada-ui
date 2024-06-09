import { forwardRef } from "@yamada-ui/core"
import { MessageCircleHeart as MessageCircleHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleHeartProps = LucideIconProps

/**
 * `MessageCircleHeart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleHeart = forwardRef<MessageCircleHeartProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCircleHeartIcon} {...props} />
  ),
)
