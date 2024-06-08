import { forwardRef } from "@yamada-ui/core"
import { FerrisWheel as FerrisWheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FerrisWheelProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FerrisWheel = forwardRef<FerrisWheelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FerrisWheelIcon} {...props} />
))
