import { forwardRef } from "@yamada-ui/core"
import { MessageCircleDashed as MessageCircleDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleDashedProps = LucideIconProps

/**
 * `MessageCircleDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleDashed = forwardRef<MessageCircleDashedProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCircleDashedIcon} {...props} />
  ),
)
