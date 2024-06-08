import { forwardRef } from "@yamada-ui/core"
import { TextCursorInput as TextCursorInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextCursorInputProps = LucideIconProps

/**
 * `TextCursorInput` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextCursorInput = forwardRef<TextCursorInputProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TextCursorInputIcon} {...props} />,
)
