import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageCircleQuestion as OriginalMessageCircleQuestion } from "lucide-react"

/**
 * `MessageCircleQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleQuestionIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalMessageCircleQuestion} {...props} />
  ),
)

/**
 * `MessageCircleQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageCircleQuestionIcon` instead.
 */
export const MessageCircleQuestion = MessageCircleQuestionIcon
