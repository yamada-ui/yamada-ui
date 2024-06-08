import { forwardRef } from "@yamada-ui/core"
import { RockingChair as RockingChairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RockingChairProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RockingChair = forwardRef<RockingChairProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RockingChairIcon} {...props} />,
)
