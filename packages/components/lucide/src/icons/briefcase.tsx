import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Briefcase as BriefcaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Briefcase` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Briefcase = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BriefcaseIcon} {...props} />
))
