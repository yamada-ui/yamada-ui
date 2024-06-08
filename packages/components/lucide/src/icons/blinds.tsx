import { forwardRef } from "@yamada-ui/core"
import { Blinds as BlindsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BlindsProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Blinds = forwardRef<BlindsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BlindsIcon} {...props} />
))
