import { forwardRef } from "@yamada-ui/core"
import { MessageCircleQuestion as MessageCircleQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleQuestionProps = LucideIconProps

/**
 * `MessageCircleQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleQuestion = forwardRef<
  MessageCircleQuestionProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={MessageCircleQuestionIcon} {...props} />
))
