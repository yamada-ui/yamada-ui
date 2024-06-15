import { forwardRef } from "@yamada-ui/core"
import { GraduationCap as GraduationCapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GraduationCapProps = LucideIconProps

/**
 * `GraduationCap` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GraduationCap = forwardRef<GraduationCapProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GraduationCapIcon} {...props} />,
)
