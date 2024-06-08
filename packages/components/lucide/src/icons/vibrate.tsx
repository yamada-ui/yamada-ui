import { forwardRef } from "@yamada-ui/core"
import { Vibrate as VibrateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VibrateProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vibrate = forwardRef<VibrateProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VibrateIcon} {...props} />
))
