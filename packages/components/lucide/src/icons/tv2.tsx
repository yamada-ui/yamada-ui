import { forwardRef } from "@yamada-ui/core"
import { Tv2 as Tv2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tv2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tv2 = forwardRef<Tv2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tv2Icon} {...props} />
))
