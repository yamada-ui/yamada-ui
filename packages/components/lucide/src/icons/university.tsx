import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { University as LucideUniversityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UniversityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UniversityIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUniversityIcon} {...props} />,
)

/**
 * @deprecated Use `UniversityIcon` instead.
 */
export const University = UniversityIcon
