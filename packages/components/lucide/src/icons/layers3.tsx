import { forwardRef } from "@yamada-ui/core"
import { Layers3 as Layers3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Layers3Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Layers3 = forwardRef<Layers3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Layers3Icon} {...props} />
))
