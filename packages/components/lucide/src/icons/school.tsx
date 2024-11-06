import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { School as LucideSchoolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SchoolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SchoolIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSchoolIcon} {...props} />
))

/**
 * @deprecated Use `SchoolIcon` instead.
 */
export const School = SchoolIcon
