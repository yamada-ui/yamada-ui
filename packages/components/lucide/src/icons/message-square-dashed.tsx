import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDashed as MessageSquareDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareDashedProps = LucideIconProps

/**
 * `MessageSquareDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDashed = forwardRef<MessageSquareDashedProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareDashedIcon} {...props} />
  ),
)
