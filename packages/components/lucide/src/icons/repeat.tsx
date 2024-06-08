import { forwardRef } from "@yamada-ui/core"
import { Repeat as RepeatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RepeatProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat = forwardRef<RepeatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RepeatIcon} {...props} />
))
