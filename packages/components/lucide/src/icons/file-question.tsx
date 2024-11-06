import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileQuestion as LucideFileQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileQuestionIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileQuestionIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileQuestionIcon` instead.
 */
export const FileQuestion = FileQuestionIcon
