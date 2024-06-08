import { forwardRef } from "@yamada-ui/core"
import { Pin as PinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PinProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pin = forwardRef<PinProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PinIcon} {...props} />
))
