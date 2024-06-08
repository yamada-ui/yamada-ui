import { forwardRef } from "@yamada-ui/core"
import { ArrowUpLeft as ArrowUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpLeft = forwardRef<ArrowUpLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUpLeftIcon} {...props} />
))
