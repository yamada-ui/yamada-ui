import { forwardRef } from "@yamada-ui/core"
import { MessageSquareOff as MessageSquareOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareOffProps = LucideIconProps

/**
 * `MessageSquareOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareOff = forwardRef<MessageSquareOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageSquareOffIcon} {...props} />,
)
