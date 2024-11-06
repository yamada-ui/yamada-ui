import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LetterText as LucideLetterTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LetterTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LetterTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLetterTextIcon} {...props} />,
)

/**
 * @deprecated Use `LetterTextIcon` instead.
 */
export const LetterText = LetterTextIcon
