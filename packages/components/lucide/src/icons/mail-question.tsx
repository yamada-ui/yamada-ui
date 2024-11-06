import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MailQuestion as LucideMailQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MailQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailQuestionIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMailQuestionIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MailQuestionIcon` instead.
 */
export const MailQuestion = MailQuestionIcon
