import { forwardRef } from "@yamada-ui/core"
import { Watch as WatchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WatchProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Watch = forwardRef<WatchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WatchIcon} {...props} />
))
