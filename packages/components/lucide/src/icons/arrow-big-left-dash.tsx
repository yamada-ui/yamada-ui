import { forwardRef } from "@yamada-ui/core"
import { ArrowBigLeftDash as ArrowBigLeftDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigLeftDashProps = LucideIconProps

/**
 * `ArrowBigLeftDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftDash = forwardRef<ArrowBigLeftDashProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigLeftDashIcon} {...props} />,
)
