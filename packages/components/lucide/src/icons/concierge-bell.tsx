import { forwardRef } from "@yamada-ui/core"
import { ConciergeBell as ConciergeBellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ConciergeBellProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConciergeBell = forwardRef<ConciergeBellProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ConciergeBellIcon} {...props} />,
)
