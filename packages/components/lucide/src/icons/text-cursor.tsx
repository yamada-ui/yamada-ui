import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TextCursor as LucideTextCursorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TextCursorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursorIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTextCursorIcon} {...props} />,
)

/**
 * @deprecated Use `TextCursorIcon` instead.
 */
export const TextCursor = TextCursorIcon
