import { forwardRef } from "@yamada-ui/core"
import { TextCursor as TextCursorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextCursorProps = LucideIconProps

/**
 * `TextCursor` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursor = forwardRef<TextCursorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TextCursorIcon} {...props} />
))
