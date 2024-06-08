import { forwardRef } from "@yamada-ui/core"
import { BriefcaseBusiness as BriefcaseBusinessIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BriefcaseBusinessProps = LucideIconProps

/**
 * `BriefcaseBusiness` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseBusiness = forwardRef<BriefcaseBusinessProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BriefcaseBusinessIcon} {...props} />
  ),
)
