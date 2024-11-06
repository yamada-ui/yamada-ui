import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldQuestion as LucideShieldQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldQuestionIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShieldQuestionIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShieldQuestionIcon` instead.
 */
export const ShieldQuestion = ShieldQuestionIcon
