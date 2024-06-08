import { forwardRef } from "@yamada-ui/core"
import { BadgeAlert as BadgeAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeAlertProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeAlert = forwardRef<BadgeAlertProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeAlertIcon} {...props} />
))
