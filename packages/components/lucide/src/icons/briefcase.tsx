import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Briefcase as LucideBriefcaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BriefcaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBriefcaseIcon} {...props} />,
)

/**
 * @deprecated Use `BriefcaseIcon` instead.
 */
export const Briefcase = BriefcaseIcon
