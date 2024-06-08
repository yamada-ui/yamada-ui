import { forwardRef } from "@yamada-ui/core"
import { ArrowUpFromDot as ArrowUpFromDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpFromDotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromDot = forwardRef<ArrowUpFromDotProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowUpFromDotIcon} {...props} />,
)
