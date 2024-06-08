import { forwardRef } from "@yamada-ui/core"
import { Hop as HopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HopProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hop = forwardRef<HopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HopIcon} {...props} />
))
