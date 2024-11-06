import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleQuestion as LucideMessageCircleQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleQuestionIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCircleQuestionIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCircleQuestionIcon` instead.
 */
export const MessageCircleQuestion = MessageCircleQuestionIcon
