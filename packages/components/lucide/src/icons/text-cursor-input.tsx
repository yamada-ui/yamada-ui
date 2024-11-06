import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TextCursorInput as LucideTextCursorInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TextCursorInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursorInputIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTextCursorInputIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TextCursorInputIcon` instead.
 */
export const TextCursorInput = TextCursorInputIcon
