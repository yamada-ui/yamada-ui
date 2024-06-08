import { forwardRef } from "@yamada-ui/core"
import { MessageSquareMore as MessageSquareMoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareMoreProps = LucideIconProps

/**
 * `MessageSquareMore` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareMore = forwardRef<MessageSquareMoreProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareMoreIcon} {...props} />
  ),
)
