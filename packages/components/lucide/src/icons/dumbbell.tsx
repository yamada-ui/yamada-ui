import { forwardRef } from "@yamada-ui/core"
import { Dumbbell as DumbbellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DumbbellProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dumbbell = forwardRef<DumbbellProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DumbbellIcon} {...props} />
))
