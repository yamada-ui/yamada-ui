import { forwardRef } from "@yamada-ui/core"
import { Drill as DrillIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DrillProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Drill = forwardRef<DrillProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DrillIcon} {...props} />
))
