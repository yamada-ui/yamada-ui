import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Parentheses as LucideParenthesesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ParenthesesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ParenthesesIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideParenthesesIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ParenthesesIcon` instead.
 */
export const Parentheses = ParenthesesIcon
