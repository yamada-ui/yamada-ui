import { forwardRef } from "@yamada-ui/core"
import { HandHeart as HandHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandHeartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHeart = forwardRef<HandHeartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandHeartIcon} {...props} />
))
