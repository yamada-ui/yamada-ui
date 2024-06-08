import { forwardRef } from "@yamada-ui/core"
import { Accessibility as AccessibilityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AccessibilityProps = LucideIconProps

/**
 * `Accessibility` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Accessibility = forwardRef<AccessibilityProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AccessibilityIcon} {...props} />,
)
