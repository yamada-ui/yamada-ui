import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowBigDownDash as ArrowBigDownDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowBigDownDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigDownDash = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigDownDashIcon} {...props} />,
)
