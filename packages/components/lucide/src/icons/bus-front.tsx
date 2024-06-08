import { forwardRef } from "@yamada-ui/core"
import { BusFront as BusFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BusFrontProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BusFront = forwardRef<BusFrontProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BusFrontIcon} {...props} />
))
