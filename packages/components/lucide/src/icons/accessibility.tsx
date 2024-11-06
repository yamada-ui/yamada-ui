import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Accessibility as LucideAccessibilityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AccessibilityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AccessibilityIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAccessibilityIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AccessibilityIcon` instead.
 */
export const Accessibility = AccessibilityIcon
