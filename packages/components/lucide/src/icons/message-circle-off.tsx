import { forwardRef } from "@yamada-ui/core"
import { MessageCircleOff as MessageCircleOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleOffProps = LucideIconProps

/**
 * `MessageCircleOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleOff = forwardRef<MessageCircleOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageCircleOffIcon} {...props} />,
)
