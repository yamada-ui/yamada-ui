import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BriefcaseBusiness as LucideBriefcaseBusinessIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BriefcaseBusinessIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseBusinessIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBriefcaseBusinessIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BriefcaseBusinessIcon` instead.
 */
export const BriefcaseBusiness = BriefcaseBusinessIcon
