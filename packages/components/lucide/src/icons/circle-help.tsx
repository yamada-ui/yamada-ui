import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleHelp as LucideCircleHelpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleHelpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleHelpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCircleHelpIcon} {...props} />,
)

/**
 * @deprecated Use `CircleHelpIcon` instead.
 */
export const CircleHelp = CircleHelpIcon
