import { forwardRef } from "@yamada-ui/core"
import { BadgeMinus as BadgeMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeMinusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeMinus = forwardRef<BadgeMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeMinusIcon} {...props} />
))
