import { forwardRef } from "@yamada-ui/core"
import { Clock2 as Clock2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock2 = forwardRef<Clock2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock2Icon} {...props} />
))
