import { forwardRef } from "@yamada-ui/core"
import { Dice6 as Dice6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice6Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice6 = forwardRef<Dice6Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice6Icon} {...props} />
))
