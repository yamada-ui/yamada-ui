import { forwardRef } from "@yamada-ui/core"
import { MailQuestion as MailQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailQuestionProps = LucideIconProps

/**
 * `MailQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailQuestion = forwardRef<MailQuestionProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MailQuestionIcon} {...props} />,
)
