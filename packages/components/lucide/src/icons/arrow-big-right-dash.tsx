import { forwardRef } from "@yamada-ui/core"
import { ArrowBigRightDash as ArrowBigRightDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigRightDashProps = LucideIconProps

/**
 * `ArrowBigRightDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigRightDash = forwardRef<ArrowBigRightDashProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowBigRightDashIcon} {...props} />
  ),
)
