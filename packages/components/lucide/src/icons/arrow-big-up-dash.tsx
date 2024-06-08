import { forwardRef } from "@yamada-ui/core"
import { ArrowBigUpDash as ArrowBigUpDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigUpDashProps = LucideIconProps

/**
 * `ArrowBigUpDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUpDash = forwardRef<ArrowBigUpDashProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigUpDashIcon} {...props} />,
)
