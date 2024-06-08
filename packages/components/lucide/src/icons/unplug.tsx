import { forwardRef } from "@yamada-ui/core"
import { Unplug as UnplugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UnplugProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Unplug = forwardRef<UnplugProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UnplugIcon} {...props} />
))
