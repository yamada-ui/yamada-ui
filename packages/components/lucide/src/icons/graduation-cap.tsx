import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GraduationCap as LucideGraduationCapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GraduationCapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GraduationCapIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGraduationCapIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GraduationCapIcon` instead.
 */
export const GraduationCap = GraduationCapIcon
