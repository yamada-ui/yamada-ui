import { forwardRef } from "@yamada-ui/core"
import { BicepsFlexed as BicepsFlexedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BicepsFlexedProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BicepsFlexed = forwardRef<BicepsFlexedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BicepsFlexedIcon} {...props} />,
)
