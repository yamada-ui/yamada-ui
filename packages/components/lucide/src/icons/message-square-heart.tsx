import { forwardRef } from "@yamada-ui/core"
import { MessageSquareHeart as MessageSquareHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareHeartProps = LucideIconProps

/**
 * `MessageSquareHeart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareHeart = forwardRef<MessageSquareHeartProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareHeartIcon} {...props} />
  ),
)
